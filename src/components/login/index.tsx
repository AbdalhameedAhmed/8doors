import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";

import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import { LoginFormData } from "types";
import { addUser } from "redux/slices/auth"
import { useLoginMutation } from "redux/services/clinic/auth"
import useToast from "hooks/useToast";

import FireIcon from "assets/ic_firebase.png";
import Twitter from "assets/twitter.svg"
import Github from "assets/github.svg"
import Google from "assets/google.svg"



export default function SignIn() {
  const [error, activeError] = React.useState(false)
  const { t } = useTranslation("common");
  const [postData] = useLoginMutation()
  const dispatch = useDispatch()
  const router = useRouter()
  const addToast = useToast()

  const onSubmit = async (values: LoginFormData) => {

    await postData({ username: values.username, password: values.password }).unwrap()
      .then((res) => {
        dispatch(addUser(res))
        router.push("/dashboard")
      })
      .catch(() => {
        addToast("error", "Username or password is wrong")
      })

  };

  return (
    <>
      <div className={`self-start w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
        <div className="flex flex-col align-start justify-center relative mb-[80px]">
          <p className="text-primary text-[1.5rem] font-[700]">Sign in to 8doors</p>
          <p className="text-custom text-primary mt-4">New user?  <Link href="/signup" className="cursor-pointer text-theme-primary hover:underline font-[700]"> Create an account</Link></p>
        </div>
        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => {
            const errors: Record<string, string> = {};

            if (!values.username) {
              errors.username = "This field is required";
            }
            if (!values.password) {
              errors.password = "This field is required";
            }
            return errors;
          }}

          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <>
                    <LoginInput
                      label=""
                      placeholder={"Email"}
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

      </div>
    </>
  );
}

