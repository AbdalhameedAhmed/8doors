import { InputProps } from "@theme-ui/components";
import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | number | any;
  touched?: string | number | any;
  containerStyle?: string;
  inputStyle?: string
  errorStyle?: string;
  props?: InputProps;
}
export default function FormInput({
  error,
  touched,
  inputStyle = "",
  containerStyle = "",
  errorStyle,
  ...props
}: Props) {
  return (
  <>
      <div className="flex">
      <input
        type={props.name}
        className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputStyle}`}
        {...props}
        />
      {error && touched && <p className={`text-red-500 text-sm mt-2 ${errorStyle}`}>{error}</p>}
      </div>
        </>
  );
}
