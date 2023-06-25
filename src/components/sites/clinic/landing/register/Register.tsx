import React from "react"
import { useRouter } from "next/router"
import styles from "./register.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import FloatingPassword from "components/shared/floatingInput/FloatingPassword"
import Doctor from "assets/addDoctor.jpg"
import Pharmacist from "assets/addPharmacist.jpg"
import Patient from "assets/registerPatient.jpg"

import { Form, Field } from "react-final-form";
import useToast from "hooks/useToast"
import { useSignupMutation } from "redux/services/signup"
import { formValdate } from "./formValidate";
import { addUser } from "redux/slices/auth"
import { useDispatch } from "react-redux"
import BtnWithLoader from "components/shared/button/buttonWithLoader"




export default function Register() {
  let [activeImage, changeActiveImage] = React.useState(Patient.src)
  const [loadingState, changeLoadingState] = React.useState(false)

  const [error, activeError] = React.useState(false)
  const [signup] = useSignupMutation()
  const addToast = useToast()
  const dispatch = useDispatch()


  let handelChangeImage = (imageSrc: string) => {
    changeActiveImage(imageSrc)
  }

  const router = useRouter()

  const onSubmit = async (values: Record<string, any>) => {
    changeLoadingState(true)

    await signup({ username: values.username, email: values.email, password: values.password, phoneNumber: values.phoneNumber }).unwrap()
      .then((res) => {
        changeLoadingState(false)
        dispatch(addUser(res.data))
        router.push('/otp');
      }).catch((res) => {
        changeLoadingState(false)

        addToast("error", res?.data?.message)
      })

  };


  return (
    <>
      <div className={`${styles.content} relative `} style={{
        minHeight: "414.5px"
      }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">

              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={activeImage} className="img-fluid" alt="Login Banner" />
                  </div>
                  <div className={`col-md-12 col-lg-6 ${styles.loginRight}`}>
                    <div className={`${styles.loginHeader}`}>
                      <h3>Register</h3>
                    </div>

                    <Form
                      onSubmit={onSubmit}
                      initialValues={{
                        type: "patient"
                      }}
                      validate={(values): Record<string, string> => formValdate(values)
                      }

                      render={(props) => (
                        <form onSubmit={props.handleSubmit}>


                          <Field name="username">
                            {({ input, meta }) => (
                              <>
                                <div className={`${styles.formGroup} ${styles.formFocus} `}>

                                  <FloatingInput
                                    label=""
                                    placeholder={"Username"}
                                    error={meta.error}
                                    inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0"
                                    errorActive={error}
                                    type="text"
                                    {...input}
                                  />
                                </div>


                              </>
                            )}
                          </Field>
                          <Field name="email">
                            {({ input, meta }) => (
                              <>
                                <div className={`${styles.formGroup} ${styles.formFocus} `}>

                                  <FloatingInput
                                    label=""
                                    placeholder={"Email"}
                                    error={meta.error}
                                    inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0"
                                    errorActive={error}
                                    type="text"
                                    {...input}
                                  />
                                </div>


                              </>
                            )}
                          </Field>
                          <Field name="phoneNumber">
                            {({ input, meta }) => (
                              <>
                                <div className={`${styles.formGroup} ${styles.formFocus} `}>

                                  <FloatingInput
                                    label=""
                                    placeholder={"phoneNumber"}
                                    error={meta.error}
                                    inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0"
                                    errorActive={error}
                                    type="text"
                                    {...input}
                                  />
                                </div>


                              </>
                            )}
                          </Field>
                          <Field name="password">
                            {({ input, meta }) => (
                              <>
                                <div className={`${styles.formGroup} ${styles.formFocus} `}>

                                  <FloatingPassword
                                    placeholder={"Password"}
                                    errorActive={error}
                                    inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0"
                                    error={meta.error}
                                    {...input}
                                  />
                                </div>
                              </>
                            )}
                          </Field>
                          <Field name="confirm">
                            {({ input, meta }) => (
                              <>
                                <div className={`${styles.formGroup} ${styles.formFocus} `}>

                                  <FloatingPassword
                                    placeholder={"Confirm"}
                                    errorActive={error}
                                    inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0"
                                    error={meta.error}
                                    {...input}
                                  />
                                </div>
                              </>
                            )}
                          </Field>
                          <div className={`row ${styles.selectRegisterType}`}>

                            <Field name="type" value="patient" type="radio">
                              {({ input, meta }) => (
                                <>
                                  <div className={`col-4 ${styles.registerOption}`}>
                                    <input name={input.name} defaultChecked id="default-radio-1" type="radio" value={input.value} onChange={(e) => { input.onChange(e); handelChangeImage(Patient.src) }} className="hidden peer" />
                                    <label htmlFor="default-radio-1"><span>Patient</span></label>
                                  </div>
                                </>
                              )}
                            </Field>

                            <Field name="type" value="Doctor" type="radio" >
                              {({ input, meta }) => (
                                <>
                                  <div className={`col-4 ${styles.registerOption}`}>
                                    <input name={input.name} id="default-radio-2" type="radio" value={input.value} onChange={(e) => { input.onChange(e); handelChangeImage(Doctor.src) }} className="hidden peer" />
                                    <label htmlFor="default-radio-2"><span>Doctor</span></label>
                                  </div>
                                </>
                              )}
                            </Field>

                            <Field name="type" value="pharmacist" type="radio">
                              {({ input, meta }) => (
                                <>
                                  <div className={`col-4 ${styles.registerOption}`}>
                                    <input name={input.name} id="default-radio-3" type="radio" value={input.value} onChange={(e) => { input.onChange(e); handelChangeImage(Pharmacist.src) }} className="hidden peer" />
                                    <label htmlFor="default-radio-3"><span>Pharmacist</span></label>
                                  </div>
                                </>
                              )}
                            </Field>
                          </div>

                          <BtnWithLoader showSpinner={loadingState} title="Submit" onClick={() => { activeError(true) }} disabled={props.submitting} />

                        </form>
                      )}
                    ></Form>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}