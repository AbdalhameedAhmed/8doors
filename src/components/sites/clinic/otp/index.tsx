import React, { FormEvent, MouseEvent } from "react"
import styles from "./otp.module.css"
import OtpInput from "components/sites/clinic/landing/onboarding/individualForm/OTP"
import { useRouter } from "next/router";
import useToast from "hooks/useToast";
import axios, { AxiosError, AxiosResponse } from "axios";
import BtnWithLoader from "components/shared/button/buttonWithLoader";
import { otpFailed, otpRequest, otpResponse } from 'types/otpResponse';
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import axiosClient from "api/axiosClient";
import { User } from "types/auth/registerTypes";






type otpTypes = {
    onSuccess?: () => void
}
export default function Otp({ onSuccess = () => { } }: otpTypes) {

    const [error, isErrorActive] = React.useState(false)
    const { data: user }: { data: User | undefined } = useQuery({ queryKey: ["auth"], enabled: false })
    const router = useRouter()
    const addToast = useToast()
    const queryClient = useQueryClient()
    const otpLength = 4

    const sendOtp = (data: otpRequest) => {
        return axiosClient.post("/account/otp", data)
    }

    const resendOtp = ({ username }: { username: string }) => {
        return axiosClient.post(`/account/otp/resend/${username}`)
    }

    const [otp, setOtp] = React.useState('');

    const handleOtpChange = (newOtp: string) => {
        setOtp(newOtp);
    };

    const otpSuccessfully = (res: otpResponse) => {
        queryClient.setQueryData(["auth"], res)
        if (res.token) {
            localStorage.setItem("token", res.token)
            axios.post("/api/setToken", { token: res.token })
            router.push("/")
        }

    }

    const otpFailed = (err: otpFailed) => {
        addToast("error", err?.detail)
    }

    const { mutate: resendMutate, isPending: resendIsPending } = useMutation({
        mutationFn: resendOtp,
        onSuccess: async (res) => {
            console.log(res);
        },
        onError: async (error) => {
            console.log(error);
        }
    })

    const { mutate, isPending } = useMutation({
        mutationFn: sendOtp,
        onSuccess: async (res: AxiosResponse) => {
            otpSuccessfully(res.data)
        },
        onError: async (error: AxiosError) => {
            otpFailed(error.response?.data as otpFailed)
            console.log(error.response?.data);

        }
    })

    const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (otp.length == otpLength) {
            if (user) mutate({ username: user?.username, otpCode: otp })
            else addToast("error", "There is something wrong, try again later")
        } else {
            isErrorActive(true)
        }

    }

    const handelResendOtp = async (event: MouseEvent) => {
        event.preventDefault()
        if (user)
            resendMutate({ username: user?.username })
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
                        <BtnWithLoader showSpinner={isPending} title="Continue" fullWidht={false} onClick={() => { onSuccess() }} />
                        <BtnWithLoader spinerStyles="!border-[#09e5ab]" showSpinner={resendIsPending} title="Resend OTP" fullWidht={false} onClick={(event) => { handelResendOtp(event) }} />
                    </div>
                </div>
            </form>
        </div>
    )
}