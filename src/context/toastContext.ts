import { createContext } from "react"
import { useState } from "react"

type toastTypes = {
    isOpen: boolean
    message: string;
    type: "success" | "warning" | "error" | "info";
    fitScreen: boolean
    underCrumb: boolean
}

export const ToastContext = createContext({
    isOpen: false,
    message: "Add your info",
    type: "success",
    fitScreen: false,
    underCrumb: false

})
