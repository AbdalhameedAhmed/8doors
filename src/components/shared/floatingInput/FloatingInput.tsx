import React, { InputHTMLAttributes } from "react";
import { InputProps } from "@theme-ui/components";
import { JsxElement } from "typescript";
import classNames from "classnames";

interface LoginInputTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number | any;
  error?: string | number | any;
  icon?: JsxElement;
  containerStyle?: string;
  inputStyle?: string
  errorStyle?: string;
  props?: InputProps;
  errorActive: boolean
}

export default function FloatingInput({
  label = "",
  error,
  icon,
  inputStyle = "",
  containerStyle = "",
  errorStyle,
  errorActive,
  placeholder,
  ...props
}: LoginInputTypes) {

  return (
    <div className="relative w-full">

      <div className="relative">
        <input type={props.type} name={props.name} id={props.name} placeholder=" " className={classNames("block p-4 w-full text-gray-900 dark:text-white bg-transparent rounded-lg border-[1px] border-gray-300 dark:border-[#3D464F] appearance-none hover:border-[rgb(118,118,118)] dark:hover:border-white dark:focus:border-white focus:border-[rgb(118,118,118)] focus:outline-none focus:ring-0 focus:border-blue-600 peer", { "!border-red-500": error && errorActive })} {...props} />
        <label htmlFor={props.name} className={classNames("absolute text-sm text-[#6b7280] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-[rgb(33,43,54)] dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 peer-focus:left-3", { "!text-red-500": error && errorActive, "!left-3": props.value  })}>
          {placeholder}</label>
      </div>
      {error && errorActive && <p className={`text-red-500 text-[0.75rem] mt-2 ${errorStyle}`}>{error}</p>}
    </div>
  );

}
