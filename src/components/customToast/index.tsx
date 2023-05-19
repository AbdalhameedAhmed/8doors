import React from "react"
import classNames from "classnames"
import { ToastContext } from "context/toastContext"

export default function CustomToast() {
    const [toast, openToast] = React.useState(false)
    const { toastInfo } = React.useContext(ToastContext)


    console.log(toastInfo.underCrumb, "toskgfsk");

    React.useEffect(() => {
        openToast(toastInfo.isOpen)

    }, [toastInfo.isOpen])

    return (
        <div className={classNames("w-fit bg-[rgb(7,188,12,0.8)] fixed text-center text-white p-4 py-2 rounded top-16 -right-full transition-all duration-300 z-[9999]", { "!right-0": toastInfo.fitScreen && toast, "!right-8": !toastInfo.fitScreen && toast, "!w-full": toastInfo.fitScreen, "!top-[160px]": toastInfo.underCrumb, "!bg-[rgb(52,152,219,0.8)]": toastInfo.type === "info", "!bg-[rgb(231,76,60,0.8)] ": toastInfo.type === "error", "!bg-[rgb(241,196,15,0.8)]": toastInfo.type === "warning" })}>
            {toastInfo.message}
        </div>
    )
}