import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import { Form, Field } from "react-final-form";

import { useSignupMutation } from "redux/services/signup"
import useToast from "hooks/useToast"
import FloatingInput from "./FloatingInput";
import PasswordInput from "./PasswordInput";

import Twitter from "assets/twitter.svg"
import Github from "assets/github.svg"
import Google from "assets/google.svg"
import { formValdate } from "./formValidate";


function SignUp() {

  const { t } = useTranslation("common");
  const router = useRouter();
  const [signup] = useSignupMutation()
  const addToast = useToast()
  const [error, activeError] = React.useState(false)

  const onSubmit = async (values: Record<string, any>) => {

    await signup({ username: values.username, email: values.email, password: values.password }).unwrap()
      .then(() => {
        router.push('/login');
      }).catch(() => {
        addToast("error", "somthing wrong")
      })
  };

  return (
    <>
      <div className={`self-start w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
        <div className="flex flex-col align-start justify-center mb-[40px] relative">
          <p className="text-primary text-[1.5rem] font-[700]">Get started</p>
          <p className="text-custom mt-4 text-primary">Already have an account?  <Link href="/login" className="cursor-pointer text-theme-primary hover:underline font-[700]"> Sign in</Link></p>
        </div>


        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => formValdate(values)
          }

          render={({ handleSubmit, submitting, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center justify-center w-full gap-5">

                <Field name="username">
                  {({ input, meta }) => (
                    <>
                      <FloatingInput
                        label=""
                        placeholder={"Username"}
                        error={meta.error}
                        errorActive={error}
                        type="text"
                        {...input}
                      />


                    </>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <FloatingInput
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
                <Field name="confirm">
                  {({ input, meta }) => (
                    <>
                      <PasswordInput
                        placeholder={"Confirm"}
                        errorActive={error}
                        error={meta.error}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-block w-full rounded-lg py-3 px-[22px] bg-[#212B36] dark:bg-white text-white dark:text-black"
                  onClick={() => {
                    activeError(true)
                  }}
                >
                  Create account
                </button>
              </div>
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

export default SignUp;


