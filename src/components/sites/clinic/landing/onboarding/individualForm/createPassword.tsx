import React, { Dispatch, SetStateAction } from "react"

import styles from "./forms.module.css"

import FloatingInput from "components/shared/floatingInput/FloatingInput"



type createPasswordTypes = {
  activeItem: number
  changeActiveItem: Dispatch<SetStateAction<number>>
  changeModalState: Dispatch<SetStateAction<boolean>>
}


export default function CreatePassword({ changeActiveItem, activeItem, changeModalState }: createPasswordTypes) {

  const handelChangeForm = () => {
    changeModalState(true)
  }


  return (
    <div className={` ${styles.onboardingContentBox} ${styles.contentWrap}`}>
      <div className="onboard-set">
        <div className={`${styles.onboardingTitle}`}>
          <h2>Create a passcode on your Doccure account</h2>
          <h6>Enter Password for your Account</h6>
        </div>
        <div className="onboarding-content">
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.formGroup} pass-group`}>

                <FloatingInput placeholder="Enter new password" name="password" type={"password"} inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>

                <FloatingInput placeholder="Enter confirm password" name="confirm Password" type={"password"} inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
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