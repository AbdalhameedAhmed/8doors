import React from "react"
import { useSelector } from "react-redux"

import { formValidate } from "./formValidate"
import OpacityForm from "components/shared/opacityForm"
import { inputInfo } from "types/opacityFormTypes"
import useToast from "hooks/useToast"
import { useAddClinicMutation, useGetClinicsQuery } from "redux/services/clinic/addAndGetClinics"
import { useUpdateClinicMutation } from "redux/services/clinic/updateClinic"
import { rootState } from "redux/store"

type clinicFormTypes = {
  openModal: Function
}
export default function ClinicForm({ openModal }: clinicFormTypes) {

  const activeClinic = useSelector(reduxData => (reduxData as rootState).activeClinic)

  const [addClinic] = useAddClinicMutation()
  const [updateClinic] = useUpdateClinicMutation()


  let { refetch } = useGetClinicsQuery(undefined)
  let addToast = useToast()

  let inputsData: inputInfo[] = [
    {
      name: "clinicName",
      placeholder: "Clinic name",
      type: "text",
      value: activeClinic ? activeClinic.clinicName : ""
    },
    {
      name: "address",
      placeholder: "address",
      type: "text",
      value: activeClinic ? activeClinic.address : ""
    },
    {
      name: "phone",
      placeholder: "phone",
      type: "text",
      value: activeClinic ? activeClinic.phone : ""
    }
  ]

  const onSubmit = async (values: FormData) => {
    if (!activeClinic) {
      await addClinic(values).unwrap()
        .then(() => {
          addToast("success", "Added successfully")
          refetch()

        })
        .catch(() => {
          addToast("error", "rejected")

        })

    } else {
      await updateClinic({ id: activeClinic.id, ...values }).unwrap()
        .then(() => {
          addToast("success", "Updated successfully")
          refetch()

        })
        .catch(() => {
          addToast("error", "rejected")
        })
    }

    openModal!()
  }
  return (

    <OpacityForm inputsData={inputsData} formValidate={formValidate} formSubmit={onSubmit} inputContainerStyle="py-0" trackerContainerStyle="absolute top-[37px] right-[24px] xs:right-[16px] !m-0" submitBtnContainer="!pt-0 !border-0" />

  );
}