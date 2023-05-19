import React, { Dispatch, SetStateAction } from "react"
import styles from "./forms.module.css"


import OtpInput from "./OTP"

type emailOTPTypes = {
  nestedActiveForm: number
  changeNestedActiveForm: Dispatch<SetStateAction<number>>
}

export default function EmailOTP({ changeNestedActiveForm, nestedActiveForm }: emailOTPTypes) {

  const [otp, setOtp] = React.useState('');
  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handelChangeForm = () => {
    changeNestedActiveForm(nestedActiveForm + 1)
  }


  return (
    <div className={`${styles.onboardingContentBox} ${styles.contentWrap}`}>
      <div className="onboard-set">
        <div className={`${styles.onboardingTitle}`}>
          <h2>Enter 4-digit code sent to your email.</h2>
          <h6>We’ve sent it to 8doors@example.com</h6>
        </div>
        <div className={`onboarding-content ${styles.passcodewrap}`}>
          <div className="d-flex digit-group">
            {
              <OtpInput key={1} length={4} onChange={handleOtpChange} />
            }
          </div>
        </div>
        <div className={`${styles.otpResend} mb-[20px]`}>
          <a href="#" className="text-danger">Resend OTP</a>
        </div>
      </div>
      <div className={`${styles.onboardingBtn}`}>
        <button onClick={handelChangeForm}>Continue</button>
      </div>
    </div>
  )
}