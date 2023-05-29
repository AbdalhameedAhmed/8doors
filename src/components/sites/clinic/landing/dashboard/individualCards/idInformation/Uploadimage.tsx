import React, { ChangeEvent } from "react"
import styles from "./idInfo.module.css"


type uploadImageTypes = {
  defaultImageSrc:string;
  direction?:"rtl"|"ltr"
}
export default function UploadImage ({defaultImageSrc,direction}:uploadImageTypes) {
  let [idImageSrc,changeIdImageSrc] = React.useState(defaultImageSrc)




  const convertImageToUrl = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;
        changeIdImageSrc(url);
      };
      reader.readAsDataURL(file);
    }
  }
  
  return (
    <div className="col-12 col-md-5 mb-5 flex flex-col gap-4 ">

    <div className={`${styles.formGroup}`}>
      <div className={`${styles.relativeForm} ${direction==="rtl"&&"!justify-end"}`}>
        <span>Upload the front side of your ID</span>
        <label className={`${styles.relativeFileUpload}`}>
          File Upload <input onChange={(e)=>{convertImageToUrl(e)}} type="file" />
        </label>
      </div>
    </div>
    <div className="w-full flex justify-center  border-[#E6E9F4] p-[1px] pr-[2px] rounded-2xl">
      <div className="w-full">
      <img src={idImageSrc} alt="" className="w-full" />
      </div>
    </div>
  </div>

  )
}