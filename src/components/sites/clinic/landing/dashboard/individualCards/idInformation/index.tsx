import { Form, Field } from "react-final-form";

import UploadImage from "./Uploadimage"
import { formValdate } from "./formValidate";


import IdFrontSide from "assets/dashboard/idFrontSide.jpg"
import IdBackSide from "assets/dashboard/idBackSide.jpg"

import styles from "./idInfo.module.css"



type idInfoType = {
  direction?: "rtl" | "ltr"
}
export default function IdInfo({ direction }: idInfoType) {

  const btnHandler = () => {

  }

  const onSubmit = () => {
    alert("done")
  }

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
                  {({ input,meta }) => (
                    <>

                      <UploadImage input={input} fieldError={meta.error} direction={direction} defaultImageSrc={IdFrontSide.src} />
                    </>
                  )}
                </Field>
                <Field name="backImage">
                  {({ input, meta }) => (
                    <>

                      <UploadImage input={input} fieldError={meta.error} direction={direction} defaultImageSrc={IdBackSide.src} />
                    </>
                  )}
                </Field>


                <div className={`${styles.submitSection} offset-8 text-right pr-[84px] col-3`}>
                  <button type="submit" disabled={props.submitting} className="text-white transition duration-300" onClick={() => {console.log(props,"$$#$#$");
                   ;btnHandler() }}>Save Changes</button>
                </div>
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}