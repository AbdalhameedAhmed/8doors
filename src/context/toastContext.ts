import { createContext } from "react"

export const ToastContext = createContext({
    isOpen: false,
    message: "Add your info",
    type: "success",
    fitScreen: false,
    underCrumb: false

})
