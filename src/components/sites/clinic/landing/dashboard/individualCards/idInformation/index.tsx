import React from "react"

import { Form, Field } from "react-final-form";

import UploadImage from "./Uploadimage"
import { formValdate } from "./formValidate";


import IdFrontSide from "assets/dashboard/idFrontSide.jpg"
import IdBackSide from "assets/dashboard/idBackSide.jpg"

import styles from "./idInfo.module.css"
import { nationalidData } from "types/patientTypes/nationalID";
import { useNationalIdFrontMutation } from "redux/services/patient/nationalIdFront";
import { useNationalIdBackMutation } from "redux/services/patient/nationalIdBack";
import { useGetNationalIdDataQuery } from "redux/services/patient/getNationalIdData";
import { useSelector } from "react-redux";
import { rootState } from "redux/store";
import BtnWithLoader from "components/shared/button/buttonWithLoader";



type idInfoType = {
  direction?: "rtl" | "ltr"
}
export default function IdInfo({ direction }: idInfoType) {
  const [error, isErrorActive] = React.useState(false)
  const [loadingState, changeLoadingState] = React.useState(false)
  const [frontIdImage, setFrontIdImage] = React.useState(IdFrontSide.src)
  const [backIdImage, setBackIdImage] = React.useState(IdBackSide.src)

  const [postNationalIdFrontImage] = useNationalIdFrontMutation()
  const [postNationalIdBackImage] = useNationalIdBackMutation()
  const { data: nationalIdData, refetch: refetchNatinalIdData } = useGetNationalIdDataQuery(null)

  const { user } = useSelector(state => (state as rootState).auth)



  const btnHandler = () => {
    isErrorActive(true)
  }

  const onSubmit = (values: nationalidData) => {
    let frontImageData = new FormData()
    let backImageData = new FormData()

    frontImageData.append("file", values.frontImage)
    backImageData.append("file", values.backImage)

    if (values.frontImage) {
      changeLoadingState(true)
      postNationalIdFrontImage(frontImageData).unwrap().then(res => {
        changeLoadingState(false)
        refetchNatinalIdData()
      }).catch((err) => {
        changeLoadingState(false)
      })
    }

    if (values.backImage) {
      changeLoadingState(true)
      postNationalIdBackImage(backImageData).unwrap().then(res => {
        changeLoadingState(false)
        refetchNatinalIdData()
      }).catch(err => {
        changeLoadingState(false)
      })
    }
  }
  React.useEffect(() => {

    nationalIdData?.data?.map((idInfo: { summary: string, url: string }) => {
      idInfo.summary == "NATIONAL_ID_FRONT" && setFrontIdImage(idInfo.url)
      idInfo.summary == "NATIONAL_ID_BACK" && setBackIdImage(idInfo.url)

    })
  }, [nationalIdData])

  React.useEffect(() => {
    refetchNatinalIdData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  return (
    <div className={`card ${styles.infoCard} w-full`}>
      <div className={`card-body ${styles.infoCardBody} w-full`}>
        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => formValdate(values)}

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
                  <BtnWithLoader showSpinner={loadingState} title="Save Changes" fullWidht={false} onClick={() => { btnHandler() }} disabled={props.submitting} />
                </div>
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}