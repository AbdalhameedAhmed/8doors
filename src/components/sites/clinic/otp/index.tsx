import React, { FormEvent } from "react"
import styles from "./otp.module.css"
import OtpInput from "components/sites/clinic/landing/onboarding/individualForm/OTP"
import OtpImg from "assets/otp/otp2.jpg"
import { Form } from "react-final-form";
import { useOtpMutation } from "redux/services/clinic/otp";
import { addUser } from "redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { rootState } from "redux/store";
import useToast from "hooks/useToast";





type otpTypes = {
    onSuccess?: () => void
}
export default function Otp({ onSuccess = () => { } }: otpTypes) {

    const [postData] = useOtpMutation()
    const dispatch = useDispatch()
    const { user } = useSelector(state => (state as rootState).auth)
    const router = useRouter()
    const addToast = useToast()
        console.log(user);
        
    const [otp, setOtp] = React.useState('');
    const handleOtpChange = (newOtp: string) => {
        setOtp(newOtp);
    };


   
    const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        await postData({ username: user.username, otpCode: otp }).unwrap()
            .then((res) => {
                dispatch(addUser(res))
                if (res.token) {
                    localStorage.setItem("token", res.token)
                    router.push("/")
                }
                // router.push(toSubDomain("clinic", `dashboard?token=${res.token}`))
                console.log("otp response is", res);




            })
            .catch(() => {
                addToast("error", "Username or password is wrong")
            })

        console.log("otp is", otp);

    }

    return (
        <div className="container flex justify-center">
            <form onSubmit={(event) => { handelSubmit(event) }}>

                <div className={`${styles.onboardingContentBox} ${styles.contentWrap} shadow mb-[20px]`}>
                    <h2>Enter 4-digit code sent to your email.</h2>
                    <div>
                        {/* <div className={`${styles.onboardingTitle}`}>
                            <h6>We’ve sent it to 8doors@example.com</h6>
                        </div> */}
                        <div className={`onboarding-content ${styles.passcodewrap}`}>
                            <div className="flex justify-center gap-[23px] digit-group">

                                {
                                    <OtpInput key={1} length={4} onChange={handleOtpChange} />
                                }

                            </div>
                        </div>
                        {/* <div className={`${styles.otpResend}`}>
                            <a href="#" className="text-danger">Resend OTP</a>
                        </div> */}
                    </div>
                    <div className={`${styles.onboardingBtn} text-right`}>
                        <button className="">Resend OTP</button>
                        <button onClick={() => { onSuccess() }} type="submit">Continue</button>
                    </div>
                </div>
            </form>
        </div>
    )
}