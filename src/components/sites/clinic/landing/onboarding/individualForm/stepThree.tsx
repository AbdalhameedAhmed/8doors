import React, { Dispatch, SetStateAction } from "react"

import styles from "./forms.module.css"

import FloatingInput from "components/shared/floatingInput/FloatingInput"

import SingleSelector from "components/shared/customSingleSelector"


import MaleIcon from "assets/patientOnBoarding/mars-solid.svg"
import FemaleIcon from "assets/patientOnBoarding/venus-solid.svg"
import CollapseCheckMenu from "../customComponent/CollapseCheckMenu"

type stepThreeTypes = {
  activeItem:number
  changeActiveItem:Dispatch<SetStateAction<number>>
}
export default function StepThree({changeActiveItem,activeItem}:stepThreeTypes) {

  const handelChangeForm = ()=>{
    changeActiveItem(activeItem+1)
  }


  return (
    <div className={`${styles.onboardingContentBox} ${styles.contentWrap}`}>
      <div className={`${styles.onboardingTitle}`}>
        <h2>What are your personal details? <span>*</span></h2>
        <h6>Please provide your personal information</h6>
      </div>
      <div className="patient-details-form">
        <div className={`${styles.loginHeader}`}>
          <form id="personal_details">
            <div className={`${styles.formGroup}`}>
              <div className={`row ${styles.selectGenderOption}`}>
                <div className="col-6">
                  <div className="option-set">
                    <input type="radio" id="test1" name="gender" value="Male" />
                    <label htmlFor="test1">
                      <span><MaleIcon /> Male</span>
                    </label>
                  </div>
                </div>
                <div className="col-6 ">
                  <input type="radio" id="test2" name="gender" value="Female" />
                  <label htmlFor="test2">
                    <span><FemaleIcon /> Female</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="Your weight" name="weight" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
      
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="Your height" name="height" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />                </div>
              </div>
         
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="age" name="age" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <SingleSelector placeholder="Blood type" options={["O+ve", "O-ve", "B+ve", "B-ve"]} inputStyle="!p-4 !bg-[#f5f6fa] !mt-0 !text-[rgba(107,114,128)]" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="Heart rate" name="HeartRate" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="Blood pressure" name="BloodPressure" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput placeholder="Glucose Level" name="Glucose" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`${styles.formGroup}`}>
                  <FloatingInput type={"text"} placeholder="Allergies" name="Allergies" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                </div>
              </div>
              <div className="col-lg-12">
              </div>

              <div className="col-lg-12">
                <CollapseCheckMenu
                  title="Are you pregnant"
                  hiddenComponent={<SingleSelector placeholder="Select your pregnancy month" options={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} inputStyle="!p-4 !bg-[#f5f6fa] !mt-0 !text-[rgba(107,114,128)]" />}
                />
                <CollapseCheckMenu
                  title="Do you have any pre-exisiting conditions?"
                />
                <CollapseCheckMenu
                  title="Are you currently taking any medication"
                />
              </div>
            </div>

          </form>
        </div>
        <div className={`${styles.onboardingBtn}`}>
          <button onClick={handelChangeForm}>Continue</button>
        </div>
      </div>
    </div>
  )
}