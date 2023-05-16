import React, { Dispatch, SetStateAction } from "react"

import styles from "./forms.module.css"

import FloatingInput from "components/shared/floatingInput/FloatingInput"
import SingleSelector from "components/shared/customSingleSelector"

type stepFourTypes = {
  activeItem:number
  changeActiveItem:Dispatch<SetStateAction<number>>
}

export default function StepFour({changeActiveItem,activeItem}:stepFourTypes) {

  const handelChangeForm = ()=>{
    alert("done")
  }


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
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box !h-auto`}>
                  <FloatingInput placeholder="Enter Address" name="address" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box h-auto`}>
                  <SingleSelector placeholder="Select city" options={["New York", "Los Angeles", "Chicago", "Houston"]} inputStyle="!p-4 !bg-[#f5f6fa] !mt-0 !text-[rgba(107,114,128)]" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box h-auto`}>
                  <SingleSelector placeholder="Select State" options={["Alaska", "California", "Hawaii", "Georgia"]} inputStyle="!p-4 !bg-[#f5f6fa] !mt-0 !text-[rgba(107,114,128)]" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} ${styles.passcodeWrap} mail-box h-auto`}>
                  <SingleSelector placeholder="Select Country" options={["Argentina", "Brazile", "Chile", "Egypt"]} inputStyle="!p-4 !bg-[#f5f6fa] !mt-0 !text-[rgba(107,114,128)]" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.formGroup}`}>
                <div className={`input-placeholder ${styles.formFocus} mail-box h-auto`}>

                  <div className="relative w-full">

                    <div className="relative">
                      <textarea name="otherInfo" id="otherInfo" placeholder="otherInfo" className={"block p-4 !w-full h-[135px] text-gray-900 dark:text-white bg-transparent rounded-lg border-[1px] border-gray-300 dark:border-[#3D464F] appearance-none hover:border-[rgb(118,118,118)] dark:hover:border-white dark:focus:border-white focus:border-[#09e5ab] focus:outline-none focus:ring-0 peer !p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] placeholder:opacity-0"}>
                      </textarea>
                      <label htmlFor={"otherInfo"} className={"absolute !text-sm text-[#6b7280] bg-white duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-primary px-2 peer-focus:px-2 peer-focus:text-[rgb(33,43,54)] dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-[24px] peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-2 peer-focus:left-3 !bg-[#F5F6FA] peer-focus:!bg-white z-0"}>
                        {"placeholder"}</label>

                    </div>
                  </div>
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