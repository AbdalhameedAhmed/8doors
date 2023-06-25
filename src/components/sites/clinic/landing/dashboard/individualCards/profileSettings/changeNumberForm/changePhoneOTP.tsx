import BtnWithLoader from "components/shared/button/buttonWithLoader"
import useToast from "hooks/useToast"
import React, { FormEvent, MouseEvent, useState } from "react"
import { useChangePhoneNubmerFinishMutation } from "redux/services/patient/changePhoneNumberFinish"
import OtpInput from "../../../../onboarding/individualForm/OTP"
import styles from "./changeNumber.module.css"


type changePhoneOtpTypes = {
  onSuccess: () => void
}
export default function ChangePhoneOtp({ onSuccess }: changePhoneOtpTypes) {
  const [submitSpiner, showSubmitSpiner] = useState(false)
  const [resendOTPSpiner, showResendOTPSpiner] = useState(false)
  const [otp, setOtp] = React.useState('');
  const [error, isErrorActive] = React.useState(false)
  const [postPhoneOtp] = useChangePhoneNubmerFinishMutation()
  const addToast = useToast()
  const otpLength = 4

  const handelResendOtp = async (event: MouseEvent) => {
    event.preventDefault()

  }

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (otp.length == otpLength) {
      showSubmitSpiner(true)
      postPhoneOtp(otp).unwrap().then(res => {
        onSuccess()
        addToast("success", "Your phone number changed successfully")

        console.log(res);
      }).catch(err => {
        addToast("error", err.data.message)

      })

    } else {
      isErrorActive(true)
    }

  }

  return (
    <div className="w-full shrink-0 !snap-center">
      <form onSubmit={(event) => { handelSubmit(event) }} className="w-full h-full px-12 py-8 flex flex-col items-center justify-between">
        <h1 className="text-center text-3xl font-bold" >Enter 4-digit code sent to your email.</h1>

        <OtpInput length={otpLength} onChange={handleOtpChange} error={error} isErrorActive={isErrorActive} />
        <div className={`w-full ${styles.onboardingBtn} `}>
          <BtnWithLoader showSpinner={submitSpiner} title="Continue" fullWidht={false} />
          <BtnWithLoader spinerStyles="!border-[#09e5ab]" showSpinner={resendOTPSpiner} title="Resend OTP" fullWidht={false} onClick={(event) => { handelResendOtp(event) }} />
        </div>
      </form>
    </div>
  )
}