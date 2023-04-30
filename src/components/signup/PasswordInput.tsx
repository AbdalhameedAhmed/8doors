import { InputProps } from "@theme-ui/components";
import classNames from "classnames";
import React, { InputHTMLAttributes } from "react";
import { JsxElement } from "typescript";

import OpenEye from "assets/eye-solid.svg"
import ClosedEye from "assets/eye-slash-solid.svg"


interface passwordInputTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number | any;
  error?: string | number | any;
  touched?: string | number | any;
  icon?: JsxElement;
  containerStyle?: string;
  inputStyle?: string
  errorStyle?: string;
  props?: InputProps;
  errorActive: boolean
}
export default function PasswordInput({
  label = "",
  error,
  touched,
  icon,
  inputStyle = "",
  containerStyle = "",
  errorStyle,
  errorActive,
  placeholder,
  ...props
}: passwordInputTypes) {

  let [inputType, changeInputType] = React.useState("password")

  return (
    <div className="relative w-full">

      <div className="relative">
        <input type={inputType} id={props.name} placeholder=" " className={classNames("block p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-[1px] border-gray-300 appearance-none focus:border-[rgb(118,118,118)] hover:border-[rgb(118,118,118)] focus:outline-none focus:ring-0 focus:border-blue-600 peer", { "!border-red-500": error && errorActive })} {...props} />
        <label htmlFor={props.name} className={classNames("absolute text-sm text-[#6b7280] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-focus:text-[rgb(33,43,54)] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1", { "!text-red-500": error && errorActive })}>

          {placeholder}</label>
        <span
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-[25px] h-[25px] rounded-full flex justify-center items-center hover:bg-layout-secondary"
          onClick={(e) => {
            e.preventDefault()
            inputType === "password" ? changeInputType("text") : changeInputType("password")
          }}
        >{inputType === "password" ? <ClosedEye className="w-[15px] h-[15px]" /> : <OpenEye className="w-[15px] h-[15px]" />}</span>


      </div>
      {error && errorActive && <p className={`text-red-500 text-[0.75rem] mt-2 ${errorStyle}`}>{error}</p>}
    </div>

  );
}
