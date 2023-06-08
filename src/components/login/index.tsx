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
import axios from "axios";
import cookies from "cookie"
import { toSubDomain } from "utiles";



export default function SignIn() {
  const [error, activeError] = React.useState(false)
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
    axios.post("/api/auth",{ username: values.username, password: values.password })
    await postData({ username: values.username, password: values.password }).unwrap()
      .then((res) => {
        dispatch(addUser(res))
        if (res.token) {
          localStorage.setItem("token", res.token)
          axios.post("/api/setToken", { token: res.token })
        } else {
          axios.post("/api/setToken", { token: "" })

        }
        // router.push(toSubDomain("clinic", `dashboard?token=${res.token}`))
        if (res.mobileVerified === false) {
          router.push("/otp")
        } else {
          router.push("/")
        }


      })
      .catch(() => {
        addToast("error", "Username or password is wrong")
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
                            <Link className={`${styles.forgotLink} hover:text-[#09dca4]`} href="/register">you don&apos;t have an account?</Link>
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

