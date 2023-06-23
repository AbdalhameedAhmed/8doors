import React, { FormEvent, MouseEvent } from "react"
import styles from "./otp.module.css"
import OtpInput from "components/sites/clinic/landing/onboarding/individualForm/OTP"
import OtpImg from "assets/otp/otp2.jpg"
import { Form } from "react-final-form";
import { useOtpMutation } from "redux/services/patient/otp";
import { useResendOtpMutation } from "redux/services/patient/resendOtp";
import { addUser } from "redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { rootState } from "redux/store";
import useToast from "hooks/useToast";
import axios from "axios";
import BtnWithLoader from "components/shared/button/buttonWithLoader";





type otpTypes = {
    onSuccess?: () => void
}
export default function Otp({ onSuccess = () => { } }: otpTypes) {

    const [error, isErrorActive] = React.useState(false)
    const [sendOTP] = useOtpMutation()
    const [submitSpiner, showSubmitSpiner] = React.useState(false)
    const [resendOTPSpiner, showResendOtpSpiner] = React.useState(false)
    const [resendOTP] = useResendOtpMutation()
    const dispatch = useDispatch()
    const { user } = useSelector(state => (state as rootState).auth)
    const router = useRouter()
    const addToast = useToast()
    const otpLength = 4
    console.log(user);

    const [otp, setOtp] = React.useState('');

    const handleOtpChange = (newOtp: string) => {
        setOtp(newOtp);
    };



    const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (otp.length == otpLength) {
            showSubmitSpiner(true)
            await sendOTP({ username: user.username, otpCode: otp }).unwrap()
                .then((res) => {
                    showSubmitSpiner(false)
                    if (res.token) {
                        localStorage.setItem("token", res.token)
                        axios.post("/api/setToken", { token: res.token })

                        router.push("/")
                    }

                })
                .catch((err) => {
                    showSubmitSpiner(false)
                    addToast("error", err?.data?.detail)
                })
        } else {
            isErrorActive(true)
        }

    }

    const handelResendOtp = async (event: MouseEvent) => {
        event.preventDefault()
        showResendOtpSpiner(true)
        await resendOTP({ username: user.username }).unwrap()
            .then((res) => {
                // showResendOtpSpiner(false)
                console.log(res, "resendotp");

            })
            .catch((err) => {
                console.log(err);
                // showResendOtpSpiner(false)

                addToast("error", err?.data?.detail)
            })
    }

    return (
        <div className="container flex justify-center">
            <form onSubmit={(event) => { handelSubmit(event) }}>

                <div className={`${styles.onboardingContentBox} ${styles.contentWrap} shadow mb-[20px]`}>
                    <h2>Enter 4-digit code sent to your email.</h2>
                    <div>
                        {
                            <OtpInput key={1} length={otpLength} onChange={handleOtpChange} error={error} isErrorActive={isErrorActive} />
                        }
                    </div>
                    <div className={`${styles.onboardingBtn} text-right`}>
                        <BtnWithLoader spinerStyles="!border-[#09e5ab]" showSpinner={resendOTPSpiner} title="Resend OTP" fullWidht={false} onClick={(event) => { handelResendOtp(event) }} />
                        <BtnWithLoader showSpinner={submitSpiner} title="Continue" fullWidht={false} onClick={() => { onSuccess() }} />
                    </div>
                </div>
            </form>
        </div>
    )
}