import React from "react";

import OpacityForm from "components/shared/opacityForm"
import { formValidate } from "./formValidate"
import { inputInfo } from "types/opacityFormTypes"
import useToast from "hooks/useToast"

type addStaffTypes = {
  openModal: Function
}
export const AddStaff = ({ openModal }: addStaffTypes) => {
  let addToast = useToast()
  let inputsData: inputInfo[] = [
    {
      name: "name",
      placeholder: "Name",
      type: "text",
      value: ""
    },
    {
      name: "email",
      placeholder: "Email",
      type: "text",
      value: ""
    },
    {
      name: "tel",
      placeholder: "phone",
      type: "text"
      ,
      value: ""
    },
    {
      name: "gender",
      placeholder: "Gender",
      type: "singleSelector",
      options: ["male", "female"],
      value: ""
    },
    {
      name: "speciality",
      placeholder: "select role/s",
      type: "multipleSelector",
      options: [
        "Allergist",
        "Dermatologist",
        "Infectious disease",
        "Ophthalmologists"
      ],
      value: ""
    }
  ]
  const onSubmit = async (values: FormData) => {
    openModal(false)

    addToast("success", "Added successfully")
  };
  return (
    <>
      <OpacityForm inputsData={inputsData} formValidate={formValidate} formSubmit={onSubmit} inputContainerStyle="py-0" trackerContainerStyle="absolute top-[37px] right-[24px] xs:right-[16px] !m-0 xs:gap-2" submitBtnContainer="!pt-0 !border-0" />
    </>
  );
};
