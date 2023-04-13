import React from "react";
import { formValidate } from "./formValidate"
import OpacityForm from "components/shared/opacityForm"
import {inputInfo} from "types/opacityFormTypes"
import useToast from "hooks/useToast"
type props = {
  openModal: Function
}
export const AddStaff = ({ openModal }: props) => {
  let inputsData:inputInfo[] = [
    {
      name:"name",
      placeholder:"Name",
      type:"text"
    },
    {
      name:"email",
      placeholder:"Email",
      type:"text"
    },
    {
      name:"tel",
      placeholder:"phone",
      type:"text"
    },
    {
      name:"gender",
      placeholder:"Gender",
      type:"singleSelector",
      options:["male","female"]
    },
    {
      name:"speciality",
      placeholder:"select role/s",
      type:"multipleSelector",
      options:[
          "Allergist",
          "Dermatologist",
          "Infectious disease",
          "Ophthalmologists"
      ]
    }
  ]
  const onSubmit = async (values: FormData) => {
    openModal(false)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useToast("success","Added successfully")

  };
  return (
    <>
      <OpacityForm inputsData={inputsData} formValidate={formValidate} formSubmit={onSubmit} inputContainerStyle="py-0" trackerContainerStyle="absolute top-[37px] right-[24px] xs:right-[16px] !m-0 xs:gap-2" submitBtnContainer="!pt-0 !border-0"/>
    </>
  );
};
