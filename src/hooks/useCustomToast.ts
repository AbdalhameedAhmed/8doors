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
        console.log("loooook", newToast);

        setToastInfo(newToast)

        setTimeout(() => {
            console.log("doneeeenfkdfk");
            const closeToast = { ...toastInfo }
            closeToast.isOpen = false
            console.log(closeToast);

            setToastInfo(closeToast)
        }, duration)

    }
    return customToast
}