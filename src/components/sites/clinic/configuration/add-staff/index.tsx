import React from "react";
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import MultipleSelector from "components/shared/customMultipleSelector";
import SingleSelector from "components/shared/customSingleSelector";
import { fromValdate } from "./formValidate"
import OpacityForm,{inputInfo} from "components/shared/opacityForm"
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
    window.alert(values);
    openModal(false)
  };
  return (
    <>
      <OpacityForm inputsData={inputsData} formValidate={fromValdate} formSubmit={onSubmit}/>
    </>
  );
};
