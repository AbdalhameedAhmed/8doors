import { createContext, Dispatch, SetStateAction, useState } from "react"


type toastTypes = {
    isOpen: boolean
    message: string;
    type: "success" | "warning" | "error" | "info";
    fitScreen: boolean
    underCrumb: boolean
}

type toastContextTypes = {
    toastInfo:toastTypes|null;
    setToastInfo: Dispatch<SetStateAction<toastTypes | null>> | null;
}

type toastContextProviderTypes = {
    children:React.ReactNode
}
export const ToastContext = createContext<toastContextTypes|null>(null)




export const ToastContextProvider = ({ children }:toastContextProviderTypes) => {
    const [toastInfo, setToastInfo] = useState<toastTypes|null>({
        isOpen: false,
        message: "Add your info",
        type: "success",
        fitScreen: false,
        underCrumb: false

    })

    return (

        <ToastContext.Provider value= {{ toastInfo, setToastInfo }}>

        { children }
    </ToastContext.Provider>
    )
}

