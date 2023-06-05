import React from "react"
import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Form, Field } from "react-final-form"
import { formValdate } from "./formValidate";
import { useGetCountriesQuery } from "redux/services/lookup/getAllCountries"



export default function UserInfo() {

  const [error, activeError] = React.useState(false)
  const [countries, setCountries] = React.useState<[] | string[]>([])
  const [states, setStates] = React.useState<[] | string[]>([])
  const [cities, setCities] = React.useState<[] | string[]>([])
  const { data, refetch } = useGetCountriesQuery(null)
  const onSubmit = (values: Record<string, any>) => {
    console.log(values);

  }
  console.log(data);

  const fetchStates = (countryId: string) => {
    setTimeout(() => {
      setStates([
        "Cairo",
        "Giza",
        "Alexandria",
        "Qalyubia",
        "Dakahlia",
        "Beheira",
        "Sohag",
        "Qena",
        "Luxor",
        "Aswan"
      ])
    }, 500)
  }
  const fetchCities = (cityId: string) => {
    setTimeout(() => {
      setCities([
        "Giza",
        "6th of October City",
        "New Cairo",
        "Maadi",
        "Zamalek",
        "Heliopolis",
        "Nasr City",
        "Dokki",
        "Mohandessin",
        "Agouza"
      ])
    }, 500)
  }
  React.useEffect(() => {
    setTimeout(() => {
      setCountries([
        "Egypt",
        "United States of America (USA)",
        "United Kingdom (UK)",
        "Germany",
        "France",
        "Italy",
        "Canada",
        "Australia",
        "Japan",
        "Brazil"
      ])
    }, 500)
  }, [])

  return (
    <div className={`card ${styles.infoCard}`}>
      <div className={`card-body ${styles.infoCardBody}`}>
        <Form
          onSubmit={onSubmit}
          initialValues={
            {
              firstName: "Abdalhameed",
              lastName:"Ahmed"
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
                            options={["A-", "A+", "B-", "B+", "AB-", "AB+", "O-", "O+"]}
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