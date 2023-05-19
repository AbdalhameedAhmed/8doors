import React from "react"
import styles from "./otp.module.css"
import OtpInput from "components/sites/clinic/landing/onboarding/individualForm/OTP"

type otpTypes = {
    onSuccess?: () => void
}
export default function Otp({ onSuccess = () => { } }: otpTypes) {


    const [otp, setOtp] = React.useState('');
    const handleOtpChange = (newOtp: string) => {
        setOtp(newOtp);
    };


    return (
        <div className="container flex justify-center">

            <div className={`${styles.onboardingContentBox} ${styles.contentWrap} mb-[20px]`}>
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
                    <div className={`${styles.otpResend}`}>
                        <a href="#" className="text-danger">Resend OTP</a>
                    </div>
                </div>
                <div className={`${styles.onboardingBtn}`}>
                    <button onClick={() => { onSuccess() }}>Continue</button>
                </div>
            </div>
        </div>
    )
}