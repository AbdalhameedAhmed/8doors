import React from "react";

import { useTranslation } from "react-i18next";
import Link from "next/link";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { signup } from "redux/slices/clinic/authSlice"
import { useRouter } from "next/router";
import Logo from "../../assets/logo.svg";
import { CustomInput } from "components/shared";
import CustomBtn from "components/shared/button/CustomBtn";
import { formValdate } from "./formValidate"
import OpacityForm,{inputInfo} from "components/shared/opacityForm"

function SignUp() {

  const dispatch = useDispatch()

  const { t } = useTranslation("common");

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
  const router = useRouter();
 
  const onSubmit = (values: FormData) => {
    dispatch(signup({ username: values.username,email:values.email, password: values.password }))
    router.push('/login');
  };

  let inputsData:inputInfo[] = [
    {
      name:"username",
      placeholder:"Username",
      type:"text"
    },
    {
      name:"email",
      placeholder:"Email",
      type:"text"
    },
    {
      name:"password",
      placeholder:"Password",
      type:"password"
    },
    {
      name:"confirm",
      placeholder:"Confirm password",
      type:"password"
    }
  ]


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
        <OpacityForm 
        inputsData={inputsData} 
        formValidate={formValdate} 
        formSubmit={onSubmit} 
        inputContainerStyle="!px-0" 
        inputStyle={"!bg-transparent placeholder:text-white !text-white !border-[rgba(222, 221, 221, 0.913)] focus:!border-white focus:!ring-0 !py-[10px] !px-[18px] !border-[1px] "} 
        fitSubmitBtn={true} 
        submitBtnContainer="!p-0 !border-none" 
        submitBtnStyle="!mr-0 !mb-4"/>
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