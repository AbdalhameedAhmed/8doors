import React from 'react'

import classNames from "classnames"

import FloatingInput from "components/shared/floatingInput/FloatingInput"

import styles from "./onBoarding.module.css"

type rightPanelTypes = {
  boardingList: { itemTitle: string, itemSubtitle: string }[];
}

export default function RightPanel({ boardingList }: rightPanelTypes) {
  const [activeItem,changeActiveItem] = React.useState(0)

  const handelItemClick = (itemIndex:number)=>{
    changeActiveItem(itemIndex)
  }
  return (
    <div className={`${styles.rightPanel}`}>
      <div className="onBoarding container">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className={`${styles.rightPanelTitle} text-center`}>
              <p className="text-logo text-6xl font-bold transition-all pb-2 duration-300">8doors</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className={`${styles.onBoardWizard}`}>
              <ul>
                {
                  boardingList?.map((itemInfo, index) => (
                    <li key={index} onClick={()=>{handelItemClick(index)}}>
                      
                        <div className={`${styles.onboardingProgress} ${index<=activeItem&& `${styles.active}` }`}>
                          <span>{index + 1}</span>
                        </div>
                        <div className={`${styles.onboardingList}`}>
                          <h6>{itemInfo.itemTitle}</h6>
                          <p>{itemInfo.itemSubtitle} </p>
                        </div>
                      
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className={`${styles.onboardingContentBox} ${styles.contentWrap}`}>
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
                          {/* <label className={`${styles.focusLabel}`}>Email Address<span>*</span></label> */}
                          <FloatingInput placeholder="Email Address" name="name" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA]" placeholderStyles="!bg-[#F5F6FA] peer-focus:!bg-white z-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.onboardingBtn}`}>
                <a href="onboarding-email-otp.html">Continue</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}