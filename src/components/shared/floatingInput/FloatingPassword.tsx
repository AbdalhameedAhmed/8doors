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
  errorActive?: boolean
  placeholderStyles?: string;
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
  placeholderStyles,
  ...props
}: passwordInputTypes) {

  let [inputType, changeInputType] = React.useState("password")

  return (
    <div className="relative mb-6">

      <div className="relative">
        <input type={inputType} id={props.name} placeholder=" " className={classNames("block p-4 w-full  text-gray-900 dark:text-white bg-transparent rounded-lg border-[1px] border-gray-300 dark:border-[#3D464F] appearance-none focus:border-[rgb(118,118,118)] focus:outline-none focus:ring-0 peer hover:border-[rgb(118,118,118)]", { "!border-red-500 focus:!border-red-500": error && errorActive }, inputStyle)} {...props} />
        <label htmlFor={props.name} className={classNames("absolute text-sm text-[#6b7280] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-[rgb(33,43,54)] dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:left-3", { "!text-red-500": error && errorActive, "!left-3": props.value }, placeholderStyles)}>

          {placeholder}</label>
        <span
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 w-[25px] h-[25px] rounded-full flex justify-center items-center hover:bg-layout-secondary"
          onClick={(e) => {
            e.preventDefault()
            inputType === "password" ? changeInputType("text") : changeInputType("password")
          }}
        >{inputType === "password" ? <ClosedEye className="w-[15px] h-[15px] fill-secondary" /> : <OpenEye className="w-[15px] h-[15px] fill-secondary" />}</span>

      </div>
      {error && errorActive && <p className={`text-red-500 text-[0.75rem] top-full left-0 text-sm mt-2 ${errorStyle}`}>{error}</p>}
    </div>

  );
}
