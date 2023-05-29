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


import Twitter from "assets/twitter.svg"
import Github from "assets/github.svg"
import Google from "assets/google.svg"
import { rootState } from "redux/store";
import TestSvg from "assets/addPharmacist.jpg"



export default function SignIn() {
  const [error, activeError] = React.useState(false)
  const token = useSelector(state => (state as rootState).auth.user.token)

  const { t } = useTranslation("common");
  const [postData] = useLoginMutation()
  const dispatch = useDispatch()
  const router = useRouter()
  const addToast = useToast()

  const onSubmit = async (values: LoginFormData) => {

    await postData({ username: values.username, password: values.password }).unwrap()
      .then((res) => {
        dispatch(addUser(res))
        if(res.token){
          localStorage.setItem("token", res.token)
        }
        // router.push(toSubDomain("clinic", `dashboard?token=${res.token}`))
        if(res.mobileVerified === false){
          router.push("/otp")
        }else {
          router.push("/")
        }


      })
      .catch(() => {
        addToast("error", "Username or password is wrong")
      })

  };

  return (
    <>
      {/* <div className={`self-start w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
        <div className="flex flex-col align-start justify-center relative mb-[80px]">
          <p className="text-primary text-[1.5rem] font-[700]">Sign in to 8doors</p>
          <p className="text-custom text-primary mt-4">New user?  <Link href="/signup" className="cursor-pointer text-theme-primary hover:underline font-[700]"> Create an account</Link></p>
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
                      placeholder={"Email"}
                      inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:!border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0" 
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
                      inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:!border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0" 
                      errorActive={error}
                      error={meta.error}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <p className="mt-3 text-sm text-primary text-right">
                <Link href="/forget-password">
                  <u>Forgot password?</u>
                </Link>
              </p>
              <button

                type="submit"
                disabled={submitting}
                className="inline-block w-full mt-4 rounded-lg py-3 px-[22px] bg-[#212B36] dark:bg-white dark:text-black text-white"
                onClick={() => { activeError(true) }}
              >
                {t("signin.login")}
              </button>
            </form>
          )}
        ></Form>
        <div className="flex items-center justify-center gap-3 p-8 mt-8 border-t-[1px] border-dashed border-main-border relative before:content-['OR'] before:absolute before:left-1/2 before:-translate-x-1/2 before:text-[0.75rem] before:top-0 before:-translate-y-1/2 before:text-gray">
          <button className="w-[35px] h-[35px] rounded-full hover:bg-layout-secondary flex items-center justify-center">

            <Google className="w-[20px] ml-[1px] h-[20px] fill-[#DF3E30]" />
          </button>
          <button className="w-[35px] h-[35px] rounded-full hover:bg-layout-secondary flex items-center justify-center">

            <Github className="w-[20px] ml-[1px] h-[20px] fill-[#212B36] dark:fill-white" />
          </button>

          <button className="w-[35px] h-[35px] rounded-full hover:bg-layout-secondary flex items-center justify-center">

            <Twitter className="w-[20px] ml-[1px] h-[20px] fill-[#1C9CEA] " />
          </button>

        </div>

      </div> */}
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
                                  placeholder={"Email"}
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
                          <div className="text-end">
                            <a className={`${styles.forgotLink} hover:text-[#09dca4]`} href="login.html">Forget password?</a>
                          </div>
                          <button

                            type="submit"
                            disabled={submitting}
                            className={`btn btn-primary w-100 btn-lg ${styles.loginBtn} ${styles.loginBtnPrimary} hover:bg-[#10DEFD] hover:border-[#10DEFD]`}
                            onClick={() => { activeError(true) }}
                          >
                            {t("signin.login")}
                          </button>

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

