import React from "react"
import { useRouter } from "next/router"
import styles from "./register.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import FloatingPassword from "components/shared/floatingInput/FloatingPassword"
import Doctor from "assets/addDoctor.jpg"
import Pharmacist from "assets/addPharmacist.jpg"
import Patient from "assets/registerPatient.jpg"
import { useQueryClient, useMutation } from "@tanstack/react-query"

import { Form, Field } from "react-final-form";
import useToast from "hooks/useToast"
import { formValidate } from "./formValidate";
import { RegisterFaild, RegisterRequest, User } from "types/auth/registerTypes"
import BtnWithLoader from "components/shared/button/buttonWithLoader"
import axiosClient from "api/axiosClient"
import { AxiosError } from "axios"





export default function Register() {
  let [activeImage, changeActiveImage] = React.useState(Patient.src)

  const [error, activeError] = React.useState(false)
  const addToast = useToast()
  const queryClient = useQueryClient()


  let register = (registerData: RegisterRequest) => {
    return axiosClient.post("/account/register", registerData)
  }

  let handelChangeImage = (imageSrc: string) => {
    changeActiveImage(imageSrc)
  }

  const router = useRouter()

  const registerSuccessfully = (data: User) => {

    queryClient.setQueryData(["auth"], data)
    router.push('/otp');

  }

  const registerFailed = (data: RegisterFaild) => {


    if (data?.violations) {

      data?.violations.forEach((fieldErr) => {

        addToast("error", `${fieldErr.field} : ${fieldErr.message}`)

      })

    } else if (data?.message) {
      addToast("error", data?.message)
    }
  }

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: async (res) => {
      registerSuccessfully(res.data)
    },
    onError: async (error: AxiosError) => {
      registerFailed(error.response?.data as RegisterFaild)
    }
  })

  const onSubmit = async (values: Record<string, any>) => {

    let registerData = {
      username: values.username,
      password: values.password,
      email: values.email,
      phoneNumber: values.phoneNumber
    }
    mutate(registerData)
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
                  <div className="col-md-7 col-lg-5 col-xl-6 login-left">
                    <img src={activeImage} className="img-fluid" alt="Login Banner" />
                  </div>
                  <div className={`col-md-12 col-lg-7 col-xl-6 ${styles.loginRight}`}>
                    <div className={`${styles.loginHeader}`}>
                      <h3>Register</h3>
                    </div>

                    <Form
                      onSubmit={onSubmit}
                      initialValues={{
                        type: "patient"
                      }}
                      validate={(values): Record<string, string> => formValidate(values)
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
                                    placeholder={"Phone number"}
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
                                    <label htmlFor="default-radio-1" className="cursor-pointer lg:text-sm"><span>Patient</span></label>
                                  </div>
                                </>
                              )}
                            </Field>

                            <Field name="type" value="Doctor" type="radio" >
                              {({ input, meta }) => (
                                <>
                                  <div className={`col-4 ${styles.registerOption}`}>
                                    <input name={input.name} id="default-radio-2" type="radio" value={input.value} onChange={(e) => { input.onChange(e); handelChangeImage(Doctor.src) }} className="hidden peer" />
                                    <label htmlFor="default-radio-2" className="cursor-pointer lg:text-sm"><span>Doctor</span></label>
                                  </div>
                                </>
                              )}
                            </Field>

                            <Field name="type" value="pharmacist" type="radio">
                              {({ input, meta }) => (
                                <>
                                  <div className={`col-4 ${styles.registerOption}`}>
                                    <input name={input.name} id="default-radio-3" type="radio" value={input.value} onChange={(e) => { input.onChange(e); handelChangeImage(Pharmacist.src) }} className="hidden peer" />
                                    <label htmlFor="default-radio-3" className="cursor-pointer lg:text-sm"><span>Pharmacist</span></label>
                                  </div>
                                </>
                              )}
                            </Field>
                          </div>

                          <BtnWithLoader showSpinner={isPending} title="Submit" onClick={() => { activeError(true) }} disabled={props.submitting} />

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