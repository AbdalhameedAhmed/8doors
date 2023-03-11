import React from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { generate } from "randomized-string";
import classNames from "classnames";
import { useRouter } from "next/router";
import Logo from "../../assets/logo.svg";
import { CustomInput } from "components/shared";
import { register } from "api";
import { SignupFormData } from "types";

function SignUp() {
  const { t } = useTranslation("common");
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const router = useRouter();
  // const dispatch = useDispatch();
  // const [error, setError] = useState('');
  const onSubmit = async (data: any) => {
    // delete data.confirmPassword;
    // await register(data)
    // // dispatch(addAccount(user));
    // router.push('/login');
    window.alert("done");
  };
  return (
    <>
      <div className="self-center px-10 py-10 w-96">
        <div className="flex  align-center justify-center">
          <Logo style={{ height: 65, width: 65 }} />
        </div>
        <h1 className="text-center text-3xl my-2 text-white">
          {" "}
          {t("signup.signup")}{" "}
        </h1>
        <h4 className="text-white text-center">Register new membership</h4>

        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors: any = {};
            if (!values.username) {
              errors.username = "This field is required";
            }
            if (!values.email) {
              errors.email = "This field is required";
            }
            if (!values.password) {
              errors.password = "This field is required";
            }
            if (!values.confirm) {
              errors.confirm = "This field is required";
            } else if (values.password !== values.confirm) {
              errors.confirm = "Must Match";
            }
            if (!values.terms) {
              errors.terms = "accept the terms";
            }

            return errors;
          }}
          render={({ handleSubmit, submitting }) => (
            <form onSubmit={handleSubmit}>
              <Field name="username">
                {({ input, meta }) => (
                  <>
                    <CustomInput
                      placeholder={t("signup.userName")}
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
                      )}
                      type="text"
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <Field name="email">
                {({ input, meta }) => (
                  <>
                    <CustomInput
                      placeholder={t("signup.email")}
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
                      )}
                      type="email"
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <>
                    <CustomInput
                      placeholder={t("signup.password")}
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
                      )}
                      type="password"
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <>
                    <CustomInput
                      placeholder={t("signup.confirmPassword")}
                      className={classNames(
                        `signin-signout-input w-full rounded-lg `,
                        { "!border-red-500": meta.error && meta.touched }
                      )}
                      type="password"
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />
                  </>
                )}
              </Field>
              <div className="flex items-center mt-5 justify-center">
                <Field name="terms" type="checkbox">
                  {({ input, meta }) => (
                    <>
                      <input
                        type="checkbox"
                        className={classNames(`mr-3`, {
                          "ring-red-500 ": meta.error && meta.touched,
                        })}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                <p className="text-white">
                  I read and agree to the <u>terms of usage</u>{" "}
                </p>
              </div>
              <button className="mt-8 w-full p-4 text-white bg-sky-500/100 rounded-lg">
                {t("signup.signup")}
              </button>
            </form>
          )}
        ></Form>
        <p className="my-2 text-sm text-white text-center flex justify-center">
          <Link href="/login">
            <b>{t("signup.alreadyHaveAccount") + " "}</b>
          </Link>
        </p>
      </div>
    </>
  );
}

export default SignUp;

