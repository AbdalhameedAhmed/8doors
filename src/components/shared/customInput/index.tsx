import { InputProps } from "@theme-ui/components";
import React, { InputHTMLAttributes } from "react";
import { JsxElement } from "typescript";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | number | any;
  error?: string | number | any;
  touched?: string | number | any;
  icon?: JsxElement;
  containerStyle?: string;
  inputStyle?: string
  errorStyle?: string;
  dirtyFields?: {};
  errorActive?: string
  isactive?: string;
  props?: InputProps;
}
export function CustomInput({
  label = "",
  error,
  touched,
  icon,
  inputStyle = "",
  containerStyle = "",
  errorStyle,
  errorActive,
  dirtyFields,
  ...props
}: Props) {
  return (
    <label className={`block mt-6 ${containerStyle}`}>
      <span className="block text-sm font-medium text-slate-700">{label}</span>
      <input
        type={props.type}
        className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputStyle}`}
        {...props}
      />
      {error && touched && errorActive == props.name && <p className={`text-red-500 text-sm mt-2 ${errorStyle}`}>{error}</p>}

    </label>
  );
}
