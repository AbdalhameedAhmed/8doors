import React, { Dispatch, SetStateAction } from "react"
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import { formValdate } from "./formValidate"
import SingleSelector from "components/shared/customSingleSelector"
import MultipleSelector from "components/shared/customMultipleSelector"
import OpacityForm,{inputInfo} from "components/shared/opacityForm"

type props = {
  openModal: Function
}
export default function ClinicForm ({ openModal }: props){
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
  ]

  const onSubmit = (values: FormData) => {
    window.alert(values);
    openModal!()
  }
  return (
    <>
    <OpacityForm inputsData={inputsData} formValidate={formValdate} formSubmit={onSubmit}/>
     </>
  );
}