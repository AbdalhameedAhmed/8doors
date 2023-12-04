import React from "react"

import { formValidate } from "./formValidate"
import OpacityForm from "components/shared/opacityForm"
import { inputInfo } from "types/opacityFormTypes"
import useToast from "hooks/useToast"
import { useMutation, useQuery } from "@tanstack/react-query"
import { addClinic, getAllClinics, updateClinic } from "tanstack/fetchers/sites/clinic/dashboard"

type clinicFormTypes = {
  openModal: Function
}
type clinicData = {
  clinicName: string;
  address: string;
  phone: string
}
export default function ClinicForm({ openModal }: clinicFormTypes) {

  const { data: activeClinic }: { data: clinicData | undefined } = useQuery({ queryKey: ["activeClinic"], enabled: false })

  const { data: apiClinicsData, refetch } = useQuery({ queryKey: ["clinics"], queryFn: getAllClinics })

  const { mutate: addClinieMutate, isPending: isAddClinicPending } = useMutation({
    mutationFn: addClinic,
    onSuccess: async () => {
      addToast("success", "Added successfully")
      refetch()
    },
    onError: async () => {
      addToast("error", "rejected")
    }
  })

  const { mutate: updateClinieMutate, isPending: isUpdateClinicPending } = useMutation({
    mutationFn: updateClinic,
    onSuccess: async () => {
      addToast("success", "Updated successfully")

      refetch()
    },
    onError: async () => {
      addToast("error", "rejected")
    }
  })

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
      addClinieMutate(values)
    } else {
      updateClinieMutate({ id: activeClinic?.id, ...values })
    }

    openModal!()
  }

  return (

    <OpacityForm inputsData={inputsData} formValidate={formValidate} formSubmit={onSubmit} inputContainerStyle="py-0" trackerContainerStyle="absolute top-[37px] right-[24px] xs:right-[16px] !m-0" submitBtnContainer="!pt-0 !border-0" />

  );
}