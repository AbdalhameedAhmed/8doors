import React, { useState } from "react"
import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Form, Field } from "react-final-form"
import { formValidate } from "./formValidate";
import { useGetCountriesQuery } from "redux/services/lookup/getAllCountries"
import { country } from "types/lookupTypes/country"
import { useGetBloodGroupsQuery } from "redux/services/lookup/getBloodGroup"
import { bloodType } from "types/lookupTypes/bloodGroups"
import { singleSelectorTypes } from "types/singleSelectorTypes"
import { useGetStatesMutation } from "redux/services/lookup/getStates"
import { state } from "types/lookupTypes/stateType"
import { useGetCitiesMutation } from "redux/services/lookup/getCities"
import { city } from "types/lookupTypes/cityType"
import { useUpdatePatientDataMutation } from "redux/services/patient/updatePatientData"
import { patientProfileDataTypes } from "types/patientTypes/patientProfileData"
import { useGetProfileDataQuery } from "redux/services/patient/getProfileData"
import { useSelector } from "react-redux"
import { rootState } from "redux/store"
import useToast from "hooks/useToast"
import BtnWithLoader from "components/shared/button/buttonWithLoader"
import PopUp from "./popUp"
import ChangePhoneForm from "./changeNumberForm"
import ChangePhoneOtp from "./changeNumberForm/changePhoneOTP"



export default function UserInfo() {

  const [error, activeError] = useState(false)
  const [countries, setCountries] = useState<[] | singleSelectorTypes["options"]>([])
  const [bloodGroups, setBloodGroups] = useState<[] | singleSelectorTypes["options"]>([])
  const [states, setStates] = useState<[] | singleSelectorTypes["options"]>([])
  const [cities, setCities] = useState<[] | singleSelectorTypes["options"]>([])
  const [initialProfileData, setInitialProfileData] = useState<null | patientProfileDataTypes>(null)
  const [loadingState, changeLoadingState] = useState(false)
  const [popUpState, openPopUp] = useState(false)
  const [activePopUpCardNum, changeActivePopUpCardNum] = useState(0)
  const { data: profileData, refetch: refetchProfileData } = useGetProfileDataQuery(null)
  const { data: backCountries } = useGetCountriesQuery(null)
  const { data: backBloodGroups } = useGetBloodGroupsQuery(null)
  const [getAllStates] = useGetStatesMutation()
  const [getAllCities] = useGetCitiesMutation()
  const [postPatientData] = useUpdatePatientDataMutation()
  const { user } = useSelector(state => (state as rootState).auth)
  const addToast = useToast()
  const changeNumberCards = [

    <ChangePhoneForm key={0} onSuccess={() => { changeActivePopUpCardNum(activePopUpCardNum + 1) }} />,
    <ChangePhoneOtp key={1} onSuccess={() => { refetchProfileData(); openPopUp(false); changeActivePopUpCardNum(0) }} />,

  ]

  // console.log("profile is", user);

  const onSubmit = (values: patientProfileDataTypes) => {
    changeLoadingState(true)
    const dataForm = {
      firstName: values.firstName,
      lastName: values.lastName,
      dateOfBirth: values.dateOfBirth,
      bloodGroupId: values.bloodGroupId,
      countryId: values.countryId,
      stateId: values.stateId,
      cityId: values.cityId,
      address: values.address,
      nationalId: values.nationalId,
      gender: values.gender
    }

    postPatientData(dataForm).unwrap().then(res => {
      changeLoadingState(false)
      addToast("success", "Your profile information has been updated successfully!")
      refetchProfileData()
    }).catch((err) => {
      changeLoadingState(false)
      addToast("error", err?.data?.message)
    })
  }


  const fetchStates = (countryId: number) => {


    getAllStates({ id: countryId }).unwrap().then(({ data }) => {

      let allStatesData: singleSelectorTypes["options"] = []

      data.map((state: state) => {

        let stateData: { id: number, value: string | number, title: string } = { id: state.id, title: state.nameEn, value: state.id }

        allStatesData.push(stateData)


      })
      setStates((allStatesData))

    })

  }


  const fetchCities = (stateId: number) => {

    getAllCities({ id: stateId }).unwrap().then(({ data }) => {

      let citiesData: singleSelectorTypes["options"] = []
      data.map((city: city) => {

        let cityData: { id: number, value: string | number, title: string } = { id: city.id, title: city.nameEn, value: city.id }

        citiesData.push(cityData)


      })
      setCities((citiesData))

    })

  }

  const handelchangePhoneBtn = () => {
    openPopUp(true)
  }


  React.useEffect(() => {

    if (backCountries) {
      let selectorData: singleSelectorTypes["options"] = []

      backCountries.data.map((country: country) => {

        let countryData: { id: number, value: string | number, title: string } = { id: country.id, value: country.id, title: country.nameEn }

        selectorData.push(countryData)

      })
      setCountries((selectorData))
    }

  }, [backCountries])

  React.useEffect(() => {

    if (backBloodGroups) {
      let selectorData: singleSelectorTypes["options"] = []

      backBloodGroups.data.map((bloodType: bloodType) => {

        let bloodData: { id: number, value: string | number, title: string } = { id: bloodType.id, value: bloodType.id, title: bloodType.value }

        selectorData.push(bloodData)

      })
      setBloodGroups((selectorData))
    }

  }, [backBloodGroups])

  React.useEffect(() => {
    profileData?.data && setInitialProfileData(profileData?.data)

  }, [profileData?.data])

  React.useEffect(() => {
    refetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div className={`card ${styles.infoCard}`}>
      <PopUp popUpState={popUpState} activeItemNum={activePopUpCardNum} openPopup={openPopUp} cardInfo={changeNumberCards} changeActivePopUpCardNum={changeActivePopUpCardNum} />
      <div className={`card-body ${styles.infoCardBody}`}>
        <Form
          onSubmit={onSubmit}
          initialValues={
            initialProfileData && {
              firstName: initialProfileData.firstName,
              lastName: initialProfileData.lastName,
              email: user.email,
              mobile: user.phoneNumber,
              bloodGroupId: initialProfileData.bloodGroupId,
              countryId: initialProfileData.countryId,
              stateId: initialProfileData.stateId,
              cityId: initialProfileData.cityId,
              dateOfBirth: initialProfileData.dateOfBirth,
              address: initialProfileData.address,
              zipCode: initialProfileData.nationalId,
              gender: initialProfileData.gender
            }
          }
          validate={(values): Record<string, string> => formValidate(values)
          }

          render={({ handleSubmit, submitting, values, errors }) => (
            <form onSubmit={handleSubmit}>


              <div className="row form-row">
                <Field name="firstName">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="First name"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Last name"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Email"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            disabled
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="mobile">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Mobile"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            handelChangeBtn={handelchangePhoneBtn}
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            disabled
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>

                <div className={`${styles.loginOr}`}>
                  <span></span>
                </div>
                <div className={`col-12 col-md-6`}>
                  <div className={`row ${styles.selectRegisterType}`}>


                    <Field name="gender" value="MALE" type="radio">
                      {({ input, meta }) => (
                        <>
                          <div className={`col-6 ${styles.registerOption}`}>
                            <input id="gender-male" type="radio" {...input} className="hidden peer" />
                            <label htmlFor="gender-male"><span>Male</span></label>
                          </div>
                        </>
                      )}
                    </Field>
                    <Field name="gender" value="FEMALE" type="radio" >
                      {({ input, meta }) => (
                        <>
                          <div className={`col-6 ${styles.registerOption}`}>
                            <input id="gender-female" type="radio" {...input} className="hidden peer" />
                            <label htmlFor="gender-female"><span>Female</span></label>
                          </div>
                        </>
                      )}
                    </Field>
                  </div>
                </div>
                <Field name="dateOfBirth" type="date">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Date of birth"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <div className={`${styles.loginOr}`}>
                  <span></span>
                </div>
                <Field name="countryId">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <CustomSingleSelector
                            floatMenu={true}
                            placeholder="Country"
                            error={meta.error}
                            errorActive={error}
                            onActiveLi={fetchStates}
                            options={countries}
                            inputStyle="!p-4 bg-white !shadow-none !mt-0 focus:bg-white  h-[58px]"
                            input={input}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>

                <Field name="stateId">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <CustomSingleSelector
                            floatMenu={true}
                            placeholder="State"
                            error={meta.error}
                            errorActive={error}
                            onActiveLi={fetchCities}
                            options={states}
                            inputStyle="!p-4 bg-white !shadow-none !mt-0  focus:bg-white  h-[58px]"
                            input={input}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="cityId">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <CustomSingleSelector
                            floatMenu={true}
                            placeholder="City"
                            error={meta.error}
                            errorActive={error}
                            options={cities}
                            inputStyle="!p-4 bg-white !shadow-none !mt-0 focus:bg-white  h-[58px]"
                            input={input}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="address">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Address"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <div className={`${styles.loginOr}`}>
                  <span></span>
                </div>
                <Field name="bloodGroupId">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <CustomSingleSelector
                            floatMenu={true}
                            placeholder="Blood Group"
                            error={meta.error}
                            errorActive={error}
                            options={bloodGroups}
                            inputStyle="!p-4 bg-white !shadow-none !mt-0 focus:bg-white  h-[58px]"
                            input={input}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>
                <Field name="nationalId">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="National ID"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                            error={meta.error}
                            errorActive={error}
                            type="text"
                            {...input}

                          />
                        </div>
                      </div>
                    </>
                  )}
                </Field>

              </div>
              <div className={`flex justify-end`}>
                <BtnWithLoader showSpinner={loadingState} title="Save Changes" fullWidht={false} onClick={() => { activeError(true) }} disabled={submitting} />
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}