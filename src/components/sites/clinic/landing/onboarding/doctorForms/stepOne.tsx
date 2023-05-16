import styles from "../onBoarding.module.css"

import FloatingInput from "components/shared/floatingInput/FloatingInput"

export default function DoctorStepOne (){



  return (
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
  )
}