import React from "react"
import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Form, Field } from "react-final-form"
import { formValdate } from "./formValidate";



export default function UserInfo() {

  const [error, activeError] = React.useState(false)

  const onSubmit = (values: Record<string, any>) => {
    console.log(values);

  }

  return (
    <div className={`card ${styles.infoCard}`}>
      <div className={`card-body ${styles.infoCardBody}`}>
        <Form
          onSubmit={onSubmit}

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
                <Field name="mobile">
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
                        inputStyle="!p-4 !bg-white !shadow-none !mt-0 !text-[rgba(107,114,128)] focus:!bg-white  h-[58px]"
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
                          <FloatingInput
                            placeholder="Country"
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
                
                <Field name="state">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12 col-md-6">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="State"
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
                <Field name="city">
                  {({ input, meta }) => (
                    <>
                      <div className="col-12">
                        <div className={`form-group ${styles.infoGroup}`}>
                          <FloatingInput
                            placeholder="City"
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
          <button type="submit" className="btn btn-primary submit-btn"onClick={()=>{activeError(true);console.log(values);
          }}>Save Changes</button>
        </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}