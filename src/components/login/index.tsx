import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import classNames from "classnames";
import { Form, Field } from "react-final-form";
import { useDispatch } from "react-redux";

import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import CustomBtn from "components/shared/button/CustomBtn";
import { LoginFormData } from "types";
import { addUser } from "redux/slices/auth"
import { useLoginMutation } from "redux/services/clinic/auth"
import useToast from "hooks/useToast";

import Logo from "../../assets/logo.svg";

export default function SignIn() {

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
      <div className={`self-center px-10 py-10 w-96 bg-[rgba(0,0,0,0.1)] rounded`}>
        <div className="flex  align-center justify-center">
          <Logo style={{ height: 65, width: 65 }} />
        </div>
        <h1 className="text-center text-3xl my-2 text-white">
          {" "}
          {t("signin.login")}
        </h1>

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
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error }
                      )}
                      error={meta.error}
                      touched={meta.touched}
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
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
                      )}
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <CustomBtn
                fit={true}
                type="submit"
                disabled={submitting}
                className="py-4 mt-8 bg-sky-500/100"
              >
                {t("signin.login")}
              </CustomBtn>
              <p className="mt-3 text-sm text-white text-center">
                <Link href="/forget-password">
                  <u>{" " + t("signin.forgetPassword")}</u>
                </Link>
              </p>
            </form>
          )}
        ></Form>
      </div>
    </>
  );
}

