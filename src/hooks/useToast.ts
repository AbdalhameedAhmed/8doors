
import {toast} from "react-toastify"
export default function useToast (){
  const customToast = (type:string,message:string,config?:{})=>{
    toast[type](message,{
      autoClose:1000,
      hideProgressBar:true,
      ...config
    })
  }
  return customToast
}