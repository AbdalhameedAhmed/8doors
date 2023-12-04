import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"
import BtnWithLoader from "components/shared/button/buttonWithLoader"
import useToast from "hooks/useToast"
import React, { FormEvent, MouseEvent, useState } from "react"
import { sendPhoneOtp } from "tanstack/fetchers/individualDashboard"
import { phoneOtpFailed } from "types/patientTypes/changePhoneNumber"
import OtpInput from "../../../../onboarding/individualForm/OTP"
import styles from "./changeNumber.module.css"

type changePhoneOtpTypes = {
  onSuccess: () => void
}

export default function ChangePhoneOtp({ onSuccess }: changePhoneOtpTypes) {

  const [resendOTPSpiner, showResendOTPSpiner] = useState(false)
  const [otp, setOtp] = React.useState('');
  const [error, isErrorActive] = React.useState(false)

  const addToast = useToast()

  const { mutate: phoneOtpMutate, isPending: phoneOtpIspending } = useMutation({
    mutationFn: sendPhoneOtp,
    onSuccess: async () => {
      onSuccess()
      addToast("success", "Your phone number changed successfully")
    },
    onError: async (err: AxiosError) => {
      let errorData = err.response?.data
      addToast("error", (errorData as phoneOtpFailed).detail || (errorData as phoneOtpFailed).message)

    }
  })

  const otpLength = 4

  const handelResendOtp = (event: MouseEvent) => {
    event.preventDefault()

  }

  const handleOtpChange = (newOtp: string) => {
    setOtp(newOtp);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (otp.length == otpLength) {
      phoneOtpMutate(otp)
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
          <BtnWithLoader showSpinner={phoneOtpIspending} title="Continue" fullWidht={false} />
          <BtnWithLoader spinerStyles="!border-[#09e5ab]" showSpinner={resendOTPSpiner} title="Resend OTP" fullWidht={false} onClick={(event) => { handelResendOtp(event) }} />
        </div>
      </form>
    </div>
  )
}