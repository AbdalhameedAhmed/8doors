import React from "react"
import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Form, Field } from "react-final-form"
import { formValdate } from "./formValidate";
import { useGetCountriesQuery } from "redux/services/lookup/getAllCountries"
import { country } from "types/lookupTypes/country"
import { useGetBloodGroupsQuery } from "redux/services/lookup/getBloodGroup"
import { bloodType } from "types/lookupTypes/bloodGroups"
import { singleSelectorTypes } from "types/singleSelectorTypes"
import { useGetStatesMutation } from "redux/services/lookup/getStates"
import { state } from "types/lookupTypes/stateType"
import { useGetCitiesMutation } from "redux/services/lookup/getCities"
import { city } from "types/lookupTypes/cityType"



export default function UserInfo() {

  const [error, activeError] = React.useState(false)
  const [countries, setCountries] = React.useState<[] | singleSelectorTypes["options"]>([])
  const [bloodGroups, setBloodGroups] = React.useState<[] | singleSelectorTypes["options"]>([])
  const [states, setStates] = React.useState<[] | singleSelectorTypes["options"]>([])
  const [cities, setCities] = React.useState<[] | singleSelectorTypes["options"]>([])
  const { data: backCountries } = useGetCountriesQuery(null)
  const { data: backBloodGroups } = useGetBloodGroupsQuery(null)
  const [getAllStates] = useGetStatesMutation()
  const [getAllCities] = useGetCitiesMutation()

  const onSubmit = (values: Record<string, any>) => {
    console.log(values);

  }


  const fetchStates = (countryId: number) => {


    getAllStates({ id: countryId }).unwrap().then(({ data }) => {
      let allStatesData: singleSelectorTypes["options"] = []
      data.map((state: state) => {

        let stateData: { id: number, value: string|number , title:string } = { id: state.id, title: state.nameEn, value:state.id }

        allStatesData.push(stateData)


      })
      setStates((allStatesData))

    })

  }


  const fetchCities = (stateId: number) => {

    getAllCities({ id: stateId }).unwrap().then(({ data }) => {

      let citiesData: singleSelectorTypes["options"] = []
      data.map((city: city) => {

        let cityData: { id: number, value: string|number, title:string } = { id: city.id, title: city.nameEn, value:city.id }

        citiesData.push(cityData)


      })
      setCities((citiesData))

    })

  }


  React.useEffect(() => {

    if (backCountries) {
      let selectorData: singleSelectorTypes["options"] = []

      backCountries.data.map((country: country) => {

        let countryData: { id: number, value: string|number, title:string } = { id: country.id, value: country.id,title:country.nameEn }

        selectorData.push(countryData)

      })
      setCountries((selectorData))
    }

  }, [backCountries])

  React.useEffect(() => {

    if (backBloodGroups) {
      let selectorData: singleSelectorTypes["options"] = []

      backBloodGroups.data.map((bloodType: bloodType) => {

        let bloodData: { id: number, value: string|number, title:string } = { id: bloodType.id, value: bloodType.id, title:bloodType.value }

        selectorData.push(bloodData)

      })
      setBloodGroups((selectorData))
    }

  }, [backBloodGroups])

  return (
    <div className={`card ${styles.infoCard}`}>
      <div className={`card-body ${styles.infoCardBody}`}>
        <Form
          onSubmit={onSubmit}
          initialValues={
            {
              firstName: "Abdalhameed",
              lastName: "Ahmed",
              date:"2023-06-07"
            }
          }
          validate={(values): Record<string, string> => formValdate(values)
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
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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
                <Field name="email" defaultValue={"any@gmail.com"}>
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Email"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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
                <Field name="mobile" defaultValue="12345678912">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Mobile"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
                            placeholderStyles="!bg-white peer-focus:!bg-white z-0"
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

                <Field name="date" type="date">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Date of birth"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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

                <Field name="bloodType">
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
                <div className={`${styles.loginOr}`}>
                  <span></span>
                </div>
                <Field name="country">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <CustomSingleSelector
                            floatMenu={true}
                            placeholder="Counter"
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

                <Field name="state">
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
                <Field name="city">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12">
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
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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
                <Field name="zipCode">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="Zip Code"
                            inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:!border-floating-border"
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
              <div className={`${styles.submitSection} text-right`}>
                <button type="submit" className="text-white duration-300 transition" onClick={() => {
                  activeError(true); console.log(values);
                }}>Save Changes</button>
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}