import React, { useState } from "react"
import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Form, Field } from "react-final-form"
import { formValidate } from "./formValidate";
import { country } from "types/lookupTypes/country"
import { bloodType } from "types/lookupTypes/bloodGroups"
import { singleSelectorTypes } from "types/singleSelectorTypes"
import { state } from "types/lookupTypes/stateType"
import { city } from "types/lookupTypes/cityType"
import { citiesTypes, patientError, patientProfileDataTypes, statesTypes } from "types/patientTypes/patientProfileData"
import useToast from "hooks/useToast"
import BtnWithLoader from "components/shared/button/buttonWithLoader"
import PopUp from "./popUp"
import ChangePhoneForm from "./changeNumberForm"
import ChangePhoneOtp from "./changeNumberForm/changePhoneOTP"
import { useMutation, useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { User } from "types/auth/registerTypes"
import { getAllCitiesData, getAllStatesData, getBloodGroups, getCountries, getProfileData, sendProfileData } from "tanstack/fetchers/individualDashboard"



export default function UserInfo() {

  const [error, activeError] = useState(false)
  const [countries, setCountries] = useState<[] | singleSelectorTypes["options"]>([])
  const [bloodGroups, setBloodGroups] = useState<[] | singleSelectorTypes["options"]>([])
  const [states, setStates] = useState<[] | singleSelectorTypes["options"]>([])
  const [cities, setCities] = useState<[] | singleSelectorTypes["options"]>([])
  const [initialProfileData, setInitialProfileData] = useState<null | patientProfileDataTypes>(null)
  const [popUpState, openPopUp] = useState(false)
  const [activePopUpCardNum, changeActivePopUpCardNum] = useState(0)

  const addToast = useToast()

  const { data: backCountries } = useQuery({ queryKey: ["countries"], queryFn: getCountries })
  const { data: backBloodGroups } = useQuery({ queryKey: ["blodGroups"], queryFn: getBloodGroups })
  const patientData = useQuery({ queryKey: ["patient"], queryFn: getProfileData })
  const { data: user }: { data: User | undefined } = useQuery({ queryKey: ["auth"], enabled: false })


  const { mutate: getAllStatesMutation } = useMutation({
    mutationFn: getAllStatesData,
    onSuccess: async (res) => {
      getStatesSuccessfully(res.data)
    }
  })
  const { mutate: getAllCitiesMutation } = useMutation({
    mutationFn: getAllCitiesData,
    onSuccess: async (res) => {
      getCitiesSuccessfully(res.data)
    }
  })
  const { mutate, isPending } = useMutation({
    mutationFn: sendProfileData,
    onSuccess: async (res: AxiosResponse) => {
      sendPatientDataSuccessfully()
    },
    onError: async (error: AxiosError) => {
      sendPatientDataFailed(error.response?.data as patientError)
    }
  })

  React.useEffect(() => {

    if (backCountries) {
      let selectorData: singleSelectorTypes["options"] = []

      backCountries.map((country: country) => {

        let countryData: { id: number, value: string | number, title: string } = { id: country.id, value: country.id, title: country.nameEn }

        selectorData.push(countryData)

      })
      setCountries((selectorData))
    }

  }, [backCountries])

  React.useEffect(() => {

    if (backBloodGroups) {
      let selectorData: singleSelectorTypes["options"] = []

      backBloodGroups.map((bloodType: bloodType) => {

        let bloodData: { id: number, value: string | number, title: string } = { id: bloodType.id, value: bloodType.id, title: bloodType.value }

        selectorData.push(bloodData)

      })
      setBloodGroups((selectorData))
    }

  }, [backBloodGroups])

  React.useEffect(() => {
    patientData?.data && setInitialProfileData(patientData?.data)

  }, [patientData?.data])

  React.useEffect(() => {
    patientData.refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])


  const changeNumberCards = [

    <ChangePhoneForm key={0} onSuccess={() => { changeActivePopUpCardNum(activePopUpCardNum + 1) }} />,
    <ChangePhoneOtp key={1} onSuccess={() => { patientData.refetch(); openPopUp(false); changeActivePopUpCardNum(0) }} />,

  ]

  const getStatesSuccessfully = (states: statesTypes) => {

    let allStatesData: singleSelectorTypes["options"] = []

    states.map((state: state) => {

      let stateData: { id: number, value: string | number, title: string } = { id: state.id, title: state.nameEn, value: state.id }

      allStatesData.push(stateData)
    })

    setStates((allStatesData))
  }

  const getCitiesSuccessfully = (cities: citiesTypes) => {
    let citiesData: singleSelectorTypes["options"] = []
    cities.map((city: city) => {

      let cityData: { id: number, value: string | number, title: string } = { id: city.id, title: city.nameEn, value: city.id }

      citiesData.push(cityData)


    })
    setCities((citiesData))
  }

  const sendPatientDataSuccessfully = () => {
    addToast("success", "Your profile information has been updated successfully!")
    patientData.refetch()
  }

  const sendPatientDataFailed = (err: patientError) => {
    addToast("error", err?.detail)
  }

  const onSubmit = (values: patientProfileDataTypes) => {
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
    mutate(dataForm)
  }

  const handelchangePhoneBtn = () => {
    openPopUp(true)
  }

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
              email: user?.email,
              mobile: user?.phoneNumber,
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
                            onActiveLi={getAllStatesMutation}
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
                            onActiveLi={getAllCitiesMutation}
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
                <BtnWithLoader showSpinner={isPending} title="Save Changes" fullWidht={false} onClick={() => { activeError(true) }} disabled={submitting} />
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}