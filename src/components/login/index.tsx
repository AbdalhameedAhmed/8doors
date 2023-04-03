import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";
import CustomBtn from "components/shared/button/CustomBtn";
import { useGetPetQuery, api } from "redux/services/clinic/auth";
import { isMetaProperty } from "typescript";
import { login } from "redux/slices/clinic/authSlice"
function SignIn() {
  const { t } = useTranslation("common");

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  //@ts-ignore

  // const  [ trigger, { data } ] = api.endpoints.getPet.useLazyGetPetQuery()
  // const { trigger, isLoading, data: pet } = useGetPetQuery(1);

  const [trigger, { data }] = api.useLazyGetPetQuery();

  const onSubmit = (values: any) => {
    dispatch(login({ username: values.username, password: values.password }))
  };

  return (
    <>
      <div className={`self-center px-10 py-10 w-96`}>
        <div className="flex  align-center justify-center">
          <Logo style={{ height: 65, width: 65 }} />
        </div>
        <h1 className="text-center text-3xl my-2 text-white">
          {" "}
          {t("signin.login")}
        </h1>

        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: any = {};

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
                      placeholder={t("signup.email")}
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
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
                      placeholder={t("signin.password")}
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

export default SignIn;
