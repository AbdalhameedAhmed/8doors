import React, { Dispatch, SetStateAction } from "react"
import styles from "./forms.module.css"

import FloatingInput from "components/shared/floatingInput/FloatingInput"

type stepOneTypes = {
  activeItem: number
  nestedActiveForm: number
  changeActiveItem: Dispatch<SetStateAction<number>>
  changeNestedActiveForm: Dispatch<SetStateAction<number>>
  initialInputValues: { name?: string, mobile?: string, email?: string }
  direction: "rtl" | "ltr"
}

export default function StepOne({ changeActiveItem, direction, activeItem, changeNestedActiveForm, nestedActiveForm, initialInputValues }: stepOneTypes) {

  const [defaultInputValue, changeDefaultInputValue] = React.useState({ name: "", mobile: "", email: "" })
  const handelChangeForm = () => {
    changeNestedActiveForm(nestedActiveForm + 1)
  }

  React.useEffect(() => {
    if (initialInputValues) {
      changeDefaultInputValue(initialInputValues)
    }

  }, [initialInputValues])


  return (
    <div className={` ${styles.onboardingContentBox} ${styles.contentWrap}`}>
      <div className="onborad-set">
        <div className={`${styles.onboardingTitle}`}>
          <h2>Whats your Primary email?<span>*</span></h2>
          <h6>We will only use it to advise you for any important changes.</h6>
        </div>
        <div className="onboarding-content">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box`}>
                  <FloatingInput placeholder="Legal name" name="name" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" defaultValue={defaultInputValue.name} />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box`}>
                  <FloatingInput placeholder="Email Address" name="name" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" defaultValue={defaultInputValue.email} />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box`}>
                  <FloatingInput placeholder="Mobile number" name="name" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" defaultValue={defaultInputValue.mobile} />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`${styles.relativeForm} ${direction === "rtl" && "!justify-end"}`}>
                  <span>Upload Photo</span>
                  <label className={`${styles.relativeFileUpload}`}>
                    File Upload <input type="file" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.onboardingBtn}`}>
        <button onClick={handelChangeForm}>Continue</button>
      </div>
    </div>
  )
}