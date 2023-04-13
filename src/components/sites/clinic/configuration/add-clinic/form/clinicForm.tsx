import React from "react"
import { formValidate } from "./formValidate"
import OpacityForm from "components/shared/opacityForm"
import {inputInfo} from "types/opacityFormTypes"
import useToast from "hooks/useToast"
import {useAddClinicMutation} from "redux/services/clinic/addAndGetClinics"
type props = {
  openModal: Function
}
export default function ClinicForm ({ openModal }: props){
const [postdata] = useAddClinicMutation()
     let inputsData:inputInfo[] = [
    {
      name:"clinicName",
      placeholder:"clinicName",
      type:"text"
    },
    {
      name:"address",
      placeholder:"address",
      type:"text"
    },
    {
      name:"phone",
      placeholder:"phone",
      type:"text"
    },
    {
      name:"authorities",
      placeholder:"choose your authorities",
      type:"multipleSelector",
      options:[
        "ROLE_MANAGER",
        "ROLE_SECRETARY",
        "ROLE_DOCTOR"
      ]
    }
  ]

  const onSubmit = (values: FormData) => {
    openModal!()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    postdata(values)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useToast("success","Added successfully")
  }
  return (
    
    <OpacityForm inputsData={inputsData} formValidate={formValidate} formSubmit={onSubmit} inputContainerStyle="py-0" trackerContainerStyle="absolute top-[37px] right-[24px] xs:right-[16px] !m-0" submitBtnContainer="!pt-0 !border-0"/>
     
  );
}