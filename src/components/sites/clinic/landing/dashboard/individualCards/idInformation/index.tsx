import React from "react"

import { Form, Field } from "react-final-form";

import UploadImage from "./Uploadimage"
import { formValidate } from "./formValidate";

import IdFrontSide from "assets/dashboard/idFrontSide.jpg"
import IdBackSide from "assets/dashboard/idBackSide.jpg"

import styles from "./idInfo.module.css"
import { nationalidData } from "types/patientTypes/nationalID";
import BtnWithLoader from "components/shared/button/buttonWithLoader";
import useToast from "hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getNationalIdData, sendNationalIdBack, sendNationalIdFront } from "tanstack/fetchers/individualDashboard";
import { AxiosError } from "axios";

type idInfoType = {
  direction?: "rtl" | "ltr"
}

export default function IdInfo({ direction }: idInfoType) {
  const [error, isErrorActive] = React.useState(false)
  const [frontIdImage, setFrontIdImage] = React.useState(IdFrontSide.src)
  const [backIdImage, setBackIdImage] = React.useState(IdBackSide.src)

  const addToast = useToast()

  const nationalIdData = useQuery({ queryKey: ["nationalId"], queryFn: getNationalIdData })

  const { mutate: frontIdMutation, isPending: frontIdIsPending } = useMutation({
    mutationFn: sendNationalIdFront,
    onSuccess: async () => {
      sendIdFrontSuccessfully()
    },
    onError: async (err: AxiosError) => {
      sendIdFaild(err)
    }
  })

  const { mutate: backIdMutation, isPending: backIdIsPending } = useMutation({
    mutationFn: sendNationalIdBack,
    onSuccess: async () => {
      sendIdBackSuccessfully()
    },
    onError: async (err: AxiosError) => {
      sendIdFaild(err)
    }
  })

  React.useEffect(() => {

    nationalIdData?.data?.map((idInfo: { summary: string, url: string }) => {
      idInfo.summary == "NATIONAL_ID_FRONT" && setFrontIdImage(idInfo.url)
      idInfo.summary == "NATIONAL_ID_BACK" && setBackIdImage(idInfo.url)

    })
  }, [nationalIdData.data])

  const sendIdFrontSuccessfully = () => {
    addToast("success", "Changed successFully")
    nationalIdData.refetch()
  }

  const sendIdBackSuccessfully = () => {
    addToast("success", "Changed successFully")
    nationalIdData.refetch()
  }

  const sendIdFaild = (err: AxiosError) => {
    // addToast("error", (err?.data as {message:string}).message ? err.data.message : "There is something wrong")
  }

  const btnHandler = () => {
    isErrorActive(true)
  }

  const onSubmit = (values: nationalidData) => {
    let frontImageData = new FormData()
    let backImageData = new FormData()

    frontImageData.append("file", values.frontImage)
    backImageData.append("file", values.backImage)

    if (values.frontImage) {
      frontIdMutation(frontImageData)
    }

    if (values.backImage) {
      backIdMutation(backImageData)
    }
  }

  return (
    <div className={`card ${styles.infoCard} w-full`}>
      <div className={`card-body ${styles.infoCardBody} w-full`}>
        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => formValidate(values)}

          render={(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className="row form-row w-full gap-8">
                <Field name="frontImage" type="file" component="input">
                  {({ input, meta }) => (
                    <>

                      <UploadImage input={input} fieldError={meta.error} activeError={error} direction={direction} imageSrc={frontIdImage} />
                    </>
                  )}
                </Field>
                <Field name="backImage">
                  {({ input, meta }) => (
                    <>

                      <UploadImage input={input} fieldError={meta.error} activeError={error} direction={direction} imageSrc={backIdImage} />
                    </>
                  )}
                </Field>


                <div className={`${styles.submitSection} offset-8 flex items-center justify-end pr-[84px] col-3`}>
                  <BtnWithLoader showSpinner={frontIdIsPending || backIdIsPending} title="Save Changes" fullWidht={false} onClick={() => { btnHandler() }} disabled={props.submitting} />
                </div>
              </div>
            </form>
          )}
        ></Form>

      </div>
    </div>
  )
}