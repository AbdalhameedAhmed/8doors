import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Field } from "react-final-form";
import styles from "./register.module.css"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axiosClient from "api/axiosClient";
import { AxiosError, AxiosResponse } from "axios";


import LoginInput from "components/shared/floatingInput/FloatingInput";
import PasswordInput from "components/shared/floatingInput/FloatingPassword";
import { formValidate } from "./formValidate";
import useToast from "hooks/useToast";
import { LoginFormData } from "types";
import { LoginResponse } from "types/auth/LoginResponse";



import TestSvg from "assets/addPharmacist.jpg"
import axios from "axios";
import BtnWithLoader from "components/shared/button/buttonWithLoader";


export default function SignIn() {
  const [error, activeError] = React.useState(false)
  const router = useRouter()
  const addToast = useToast()
  const queryClient = useQueryClient()


  const login = ({ login, password }: { login: string; password: string }) => {
    return axiosClient.post('/authenticate', { login, password });
  };


  const loginSuccessfully = (data: LoginResponse) => {

    queryClient.setQueryData(["auth"], data)

    if (data.mobileVerified === false) {

      axios.post("/api/setToken", { token: "" })
      router.push("/otp")

    } else if (data.token) {

      axios.post("/api/setToken", { token: data.token })
      router.push("/")

    }

  }

  const loginFailed = (res: LoginResponse) => {
    console.log(res, "Errorrr");


    if (res?.detail) {

      addToast("error", res?.detail)

    } else {

      res?.violations.forEach((fieldErr) => {

        addToast("error", `${fieldErr.field} : ${fieldErr.message}`)

      })
    }
  }

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: async (data: AxiosResponse) => {
      loginSuccessfully(data.data)
    },
    onError: async (error: AxiosError) => {
      loginFailed((error?.response?.data as LoginResponse))
    }

  });

  const onSubmit = async (values: LoginFormData) => {

    mutate({ login: values.username, password: values.password })

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

                      validate={(values): Record<string, string> => formValidate(values)}

                      render={({ handleSubmit, submitting, }) => (
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
                          <BtnWithLoader showSpinner={isPending} title="Login" onClick={() => { activeError(true) }} disabled={submitting} />

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

