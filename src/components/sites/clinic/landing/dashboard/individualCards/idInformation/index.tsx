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



type idInfoType = {
  direction?: "rtl" | "ltr"
}
export default function IdInfo({ direction }: idInfoType) {
  const [error, isErrorActive] = React.useState(false)
  const [postNationalIdFrontImage] = useNationalIdFrontMutation()
  const [postNationalIdBackImage] = useNationalIdBackMutation()
  const { data: nationalIdData, refetch: refetchNatinalIdData } = useGetNationalIdDataQuery(null)
  const [frontIdImage, setFrontIdImage] = React.useState(IdFrontSide.src)
  const [backIdImage, setBackIdImage] = React.useState(IdBackSide.src)


  const btnHandler = () => {
    isErrorActive(true)
  }
  console.log("natinalid", nationalIdData);

  const onSubmit = (values: nationalidData) => {

    let frontImageData = new FormData()
    let backImageData = new FormData()

    frontImageData.append("file", values.frontImage)
    backImageData.append("file", values.backImage)

    postNationalIdFrontImage(frontImageData).unwrap().then(res => {
      console.log("friont response", res);
      refetchNatinalIdData()
    })

    postNationalIdBackImage(backImageData).unwrap().then(res => {
      console.log("back response", res);
      refetchNatinalIdData()
    })
  }
  React.useEffect(() => {

    nationalIdData?.data?.map((idInfo: { summary: string, url: string }) => {
      idInfo.summary == "NATIONAL_ID_FRONT" && setFrontIdImage(idInfo.url)
      idInfo.summary == "NATIONAL_ID_BACK" && setBackIdImage(idInfo.url)

    })
  }, [nationalIdData])
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


                <div className={`${styles.submitSection} offset-8 text-right pr-[84px] col-3`}>
                  <button type="submit" disabled={props.submitting} className="text-white transition duration-300" onClick={() => { btnHandler() }}>Save Changes</button>
                </div>
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}