import React from "react";
import { Form, Field } from "react-final-form";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { generate } from "randomized-string";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addUser } from "redux/slices/clinic/authSlice"
import { useRouter } from "next/router";
import Logo from "../../assets/logo.svg";
import { CustomInput } from "components/shared";
import CustomBtn from "components/shared/button/CustomBtn";
import { register } from "api";
import { SignupFormData } from "types";
import { fromValdate } from "./formValidate"
function SignUp() {
  const { t } = useTranslation("common");
  const dispatch = useDispatch()
  const [submit, isSubmitTime] = React.useState(false)
  const [activeList, changeActiveList] = React.useState<Array<string>>([])
  const [activeInput, changeActiveInput] = React.useState("username")
  const [errorActive, changeErrorActive] = React.useState("")
  const isFieldActive = (name: string) => {
    let isActive = activeList.find((activeInput) => activeInput === name)
    if (isActive) {
      return true
    } else {
      return false
    }
  }
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  const router = useRouter();
  // const dispatch = useDispatch();
  // const [error, setError] = useState('');
  const onSubmit = (values: any) => {
    // delete data.confirmPassword;
    // await register(data)
    // // dispatch(addAccount(user));
    dispatch(addUser({ username: values.username, password: values.password }))
    // router.push('/login');
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
        <h4 className="text-white text-center mb-8">Register new membership</h4>
        <div className="flex justify-center gap-4 mb-4 items-center">
          <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("username") })}></div>
          <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("email") })}></div>
          <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("password") })}></div>
          <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("confirm") })}></div>
        </div>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            return fromValdate(values, isSubmitTime)
          }}
          render={({ handleSubmit, dirtyFields, submitting, modified, errors }: any) => (
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <Field name="username">
                  {({ input, meta }) => (
                    <>
                      <CustomInput
                        placeholder={"Username"}
                        className={classNames(
                          `signin-signout-input w-full rounded-lg `,
                          { "!border-red-500": meta.error && meta.touched }
                        )}
                        type="text"
                        errorActive={errorActive}
                        error={meta.error}
                        touched={meta.touched}
                        containerStyle={classNames("absolute w-full transition-all duration-300 opacity-100 mt-0 top-0 left-0", { "!opacity-0": activeInput !== input.name, "!-z-10": activeInput !== input.name })}
                        isFirst={true}
                        dirtyFields={dirtyFields}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <>
                      <CustomInput
                        placeholder={"Email"}
                        className={classNames(
                          `signin-signout-input w-full rounded-lg `,
                          { "!border-red-500": meta.error && meta.touched && (dirtyFields[input.name]) }
                        )}
                        type="text"
                        errorActive={errorActive}
                        error={meta.error}
                        dirtyFields={dirtyFields}
                        touched={meta.touched}
                        containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!z-10": activeInput == input.name })}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <>
                      <CustomInput
                        placeholder={"Password"}
                        className={classNames(
                          `signin-signout-input w-full rounded-lg `,
                          { "!border-red-500": meta.error && meta.touched && (dirtyFields[input.name]) }
                        )}
                        type="password"
                        dirtyFields={dirtyFields}
                        errorActive={errorActive}
                        error={meta.error}
                        touched={meta.touched}
                        containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!z-10": activeInput == input.name })}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                <Field name="confirm">
                  {({ input, meta }) => (
                    <>
                      <CustomInput
                        placeholder={"Confirm"}
                        className={classNames(
                          `signin-signout-input w-full rounded-lg `,
                          { "!border-red-500": meta.error && meta.touched && (dirtyFields[input.name]) }
                        )}
                        type="password"
                        errorActive={errorActive}
                        error={meta.error}
                        containerStyle={classNames("absolute w-full transition-all duration-300 opacity-100 mt-0 top-0 left-0", { "!opacity-0": activeInput !== input.name, "!-z-10": activeInput !== input.name })}
                        touched={meta.touched}
                        dirtyFields={dirtyFields}
                        {...input}
                      />
                    </>
                  )}
                </Field>
                {/* <div className="flex items-center mt-5 justify-center">
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
              </div> */}
              </div>
              <CustomBtn
                fit={true}
                type="submit"
                disabled={submitting}
                className="py-4 mt-12 mt-36 bg-sky-500/100"
                onClick={() => {
                  let inputs = Object.keys(modified)
                  inputs.forEach((key, index) => {
                    if (activeInput === key && errors[key]) {
                      changeErrorActive(key)
                    }
                    if (!errors[key]) {
                      changeActiveInput(inputs[index + 1])
                      changeActiveList([...activeList, key])
                    }
                  })
                }}
              >
                {submit ? t("signup.signup") : "Next"}
              </CustomBtn>
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
