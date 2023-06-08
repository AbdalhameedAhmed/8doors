import React, { ChangeEvent } from "react"
import { FieldInputProps } from "react-final-form"
import styles from "./idInfo.module.css"


type uploadImageTypes = {
  imageSrc: string;
  direction?: "rtl" | "ltr";
  input: FieldInputProps<any, HTMLElement>;
  fieldError: string
  activeError: boolean
}
export default function UploadImage({ imageSrc, direction, input, fieldError, activeError: activeFormError }: uploadImageTypes) {
  let [idImageSrc, changeIdImageSrc] = React.useState(imageSrc)
  let [error, activeError] = React.useState(false)
  let [disabled, isInputDisabled] = React.useState(true)
  let imageSizeLimit = 2097152

  const convertImageToUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      if (file?.size > imageSizeLimit) {
        activeError(true)
        isInputDisabled(true)
      } else {
        input.onChange(file)
        isInputDisabled(false)

        activeError(false)
        const reader = new FileReader();
        reader.onload = (e) => {
          const url = e.target?.result as string;
          changeIdImageSrc(url);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  React.useEffect(() => {
    changeIdImageSrc(imageSrc)
  }, [imageSrc])
  console.log("image value", imageSrc);

  return (
    <div className="col-12 col-md-5 mb-5 flex flex-col gap-4 ">

      <div className={`${styles.formGroup}`}>
        <div className={`${styles.relativeForm} ${direction === "rtl" && "!justify-end"} ${disabled && "!bg-stone-200"}`}>
          <span>Upload the front side of your ID</span>
          <label className={`${styles.relativeFileUpload}`}>
            File Upload <input name={input.name} onChange={(e) => { convertImageToUrl(e) }} type="file" accept=".jpg, .jpeg, .png" />
          </label>
        </div>
        <p className={`text-[0.775rem] mt-1 ${error ? "text-red-500" : "text-gray"}`}>
          {
            error ? "Image size too large. Maximum size is 2MB." : "Max Image size: 2MB. Acceptable types: .jpg, .jpeg, .png."
          }
        </p>
      </div>
      <div className="w-full flex justify-center  border-[#E6E9F4] p-[1px] pr-[2px] rounded-2xl">
        <div className="w-full h-[300px]">
          <img src={idImageSrc} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>

  )
}