import {toast,ToastOptions} from "react-toastify"

type ToastState = "success"|"warning"|"error"|"info"

export default function useToast (){

  const customToast = (type:ToastState, message: string, config?: ToastOptions)=>{

    toast[type](message,{

      autoClose:1000,
      hideProgressBar:true,
      ...config

    })
  }
  return customToast
}