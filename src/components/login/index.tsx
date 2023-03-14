import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { Form, Field } from "react-final-form";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../assets/logo.svg";
import { CustomInput } from "components/shared";
import CustomBtn from "components/shared/button/CustomBtn";
import { login } from "api";
import { useGetPetQuery, api } from "redux/services/clinic/auth";
import { isMetaProperty } from "typescript";

function SignIn() {
  const { t } = useTranslation("common");

  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.asPath);
  console.log(router.query);
  //@ts-ignore

  // const  [ trigger, { data } ] = api.endpoints.getPet.useLazyGetPetQuery()
  // const { trigger, isLoading, data: pet } = useGetPetQuery(1);

  const [trigger, { data }] = api.useLazyGetPetQuery();

  const onSubmit = async (values: any) => {
    // const res = await login(data)
    // if (res) {
    //   await trigger(true)
    //   console.log(data)
    //   router.push('/');
    // } else {
    //   setError('User is not registered yet!!');
    //   setTimeout(() => {
    //     setError('');
    //   }, 3000);
    // }
    window.alert("done");
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
                    <CustomInput
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
                    <CustomInput
                      placeholder={t("signin.password")}
                      type="password"
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
