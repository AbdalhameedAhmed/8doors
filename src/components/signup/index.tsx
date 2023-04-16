import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import OpacityForm from "components/shared/opacityForm"
import { formValdate } from "./formValidate"
import { inputInfo } from "types/opacityFormTypes"
import { useSignupMutation } from "redux/services/signup"
import useToast from "hooks/useToast"

import Logo from "assets/logo.svg";

function SignUp() {

  const { t } = useTranslation("common");
  const router = useRouter();
  const [signup] = useSignupMutation()
  const addToast = useToast()

  const onSubmit = async (values: Record<string, any>) => {

    await signup({ username: values.username, email: values.email, password: values.password }).unwrap()
      .then(() => {
        router.push('/login');
      }).catch(() => {
        addToast("error", "somthing wrong")
      })
  };

  let inputsData: inputInfo[] = [
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      value: ""
    },
    {
      name: "email",
      placeholder: "Email",
      type: "text",
      value: ""
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      value: ""
    },
    {
      name: "confirm",
      placeholder: "Confirm password",
      type: "password",
      value: ""
    }
  ]


  return (
    <>
      <div className="self-center p-10 w-96 bg-[rgb(0,0,0,0.1)] rounded">
        <div className="flex  align-center justify-center">
          <Logo style={{ height: 65, width: 65 }} />
        </div>
        <h1 className="text-center text-3xl my-2 text-white">
          {" "}
          {t("signup.signup")}{" "}
        </h1>
        <h4 className="text-white text-center mb-8">Register new membership</h4>
        <OpacityForm
          inputsData={inputsData}
          formValidate={formValdate}
          formSubmit={onSubmit}
          inputContainerStyle="!px-0"
          inputStyle={"!bg-transparent placeholder:text-white !text-white !border-[rgba(222, 221, 221, 0.913)] focus:!border-white focus:!ring-0 !py-[10px] !px-[18px] !border-[1px] "}
          fitSubmitBtn={true}
          submitBtnContainer="!p-0 !border-none"
          submitBtnStyle="!mr-0 !mb-4" />
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


