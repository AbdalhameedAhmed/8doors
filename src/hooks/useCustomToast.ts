import React from "react"
import { ToastContext } from "context/toastContext"
type ToastState = "success" | "warning" | "error" | "info"

export default function useCustomToast() {
    const { toastInfo, setToastInfo } = React.useContext(ToastContext)



    const customToast = (type: ToastState = toastInfo.type, message: string = toastInfo.message, fitScreen = false, underCrumb = false, duration = 5000) => {
        const newToast = { ...toastInfo }
        newToast.type = type
        newToast.message = message
        newToast.fitScreen = fitScreen
        newToast.isOpen = true
        newToast.underCrumb = underCrumb


        setToastInfo(newToast)

        setTimeout(() => {
            const closeToast = { ...toastInfo }
            closeToast.isOpen = false

            setToastInfo(closeToast)
        }, duration)

    }
    return customToast
}