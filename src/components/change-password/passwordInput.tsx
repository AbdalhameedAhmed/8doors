import React, { InputHTMLAttributes } from "react";

import { InputProps } from "@theme-ui/components";
import { JsxElement } from "typescript";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number | any;
  error?: string | number | any;
  touched?: string | number | any;
  icon?: JsxElement;
  containerStyle?: string;
  inputStyle?: string
  errorStyle?: string;
  props?: InputProps;
}

export default function PasswordInput({
  label = "",
  error,
  touched,
  icon,
  inputStyle = "",
  containerStyle = "",
  errorStyle,
  ...props
}: Props) {

  let [inputType, changeInputType] = React.useState("password")

  return (
    <>
      <div className={`relative ${containerStyle}`}>
        <input
          type={inputType}
          className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputStyle}`}
          {...props}
        />
        <span
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2"
          onClick={(e) => {
            e.preventDefault()
            inputType === "password" ? changeInputType("text") : changeInputType("password")
          }}
        >{inputType === "password" ? "show" : "hide"}</span>
      </div>
      {error && touched && <p className={`text-red-500 text-sm mt-2 ${errorStyle}`}>{error}</p>}
    </>
  );
}
