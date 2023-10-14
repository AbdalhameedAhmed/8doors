import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import styles from "./register.module.css"

import LoginInput from "components/shared/floatingInput/FloatingInput";
import PasswordInput from "components/shared/floatingInput/FloatingPassword";
import { formValdate } from "./formValidate";
import { LoginFormData } from "types";
import { addUser } from "redux/slices/auth"
import { useLoginMutation } from "redux/services/clinic/auth"
import useToast from "hooks/useToast";



import { rootState } from "redux/store";
import TestSvg from "assets/addPharmacist.jpg"
import axios from "axios";
import BtnWithLoader from "components/shared/button/buttonWithLoader";


export default function SignIn() {
  const [error, activeError] = React.useState(false)
  const [loadingState, changeLoadingState] = React.useState(false)
  const token = useSelector(state => (state as rootState).auth.user.token)
  const { t } = useTranslation("common");
  const [postData] = useLoginMutation()
  const dispatch = useDispatch()
  const router = useRouter()
  const addToast = useToast()
  React.useEffect(() => {
    // console.log(cookies.parse(document.cookie));
    // console.log(document.cookie);


  }, [])


  const onSubmit = async (values: LoginFormData) => {
    changeLoadingState(true)
    await postData({ login: values.username, password: values.password }).unwrap()
      .then((res) => {
        changeLoadingState(false)
        dispatch(addUser(res))
        if (res.token) {
          localStorage.setItem("token", res.token)
          axios.post("/api/setToken", { token: res.token })
        } else {
          axios.post("/api/setToken", { token: "" })

        }
        if (res.mobileVerified === false) {
          router.push("/otp")
        } else {
          router.push("/")
        }


      })
      .catch((res) => {
        changeLoadingState(false)
        if (res?.data?.detail) {
          addToast("error", res?.data?.detail)
        } else {
          res?.data?.violations.forEach((fieldErr: { field: string, message: string }) => {
            addToast("error", `${fieldErr.field} : ${fieldErr.message}`)
          })
        }
      })

  };

  return (
    <>

      <div className={`${styles.content} py-[50px] relative `} style={{
        minHeight: "414.5px"
      }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">

              <div className="">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img src={TestSvg.src} className="img-fluid" alt="Login Banner" />
                  </div>
                  <div className={`col-md-12 col-lg-6 ${styles.loginRight}`}>
                    <div className={`${styles.loginHeader}`}>
                      <h3>Login</h3>
                    </div>

                    <Form
                      onSubmit={onSubmit}

                      validate={(values): Record<string, string> => formValdate(values)}

                      render={({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                          <Field name="username">
                            {({ input, meta }) => (
                              <>
                                <LoginInput
                                  label=""
                                  placeholder={"Username / Email / Phone number"}
                                  inputStyle={`!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] ${error && meta.error ? "focus:!border-red-500" : "focus:!border-floating-border"}`}
                                  placeholderStyles="!bg-[#F5F6FA] z-0"
                                  error={meta.error}
                                  errorActive={error}
                                  type="text"
                                  {...input}
                                />


                              </>
                            )}
                          </Field>
                          <Field name="password">
                            {({ input, meta }) => (
                              <>
                                <PasswordInput
                                  placeholder={"Password"}
                                  inputStyle={`!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] ${error && meta.error ? "focus:!border-red-500" : "focus:!border-floating-border"}`}
                                  placeholderStyles="!bg-[#F5F6FA] z-0"
                                  errorActive={error}
                                  error={meta.error}
                                  {...input}
                                />
                              </>
                            )}
                          </Field>
                          <div className="flex items-center justify-between w-full">
                            <Link className={`${styles.forgotLink} hover:text-[#09dca4]`} href="/forget-password">forgot your password?</Link>
                            <Link className={`${styles.forgotLink} hover:text-[#09dca4]`} href="/register">you don&apos;t have an account?</Link>
                          </div>
                          <BtnWithLoader showSpinner={loadingState} title="Login" onClick={() => { activeError(true) }} disabled={submitting} />

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
  );
}

