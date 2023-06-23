import React from "react"

import { Form, Field } from "react-final-form";

import { formValdate } from "./formValidate";



import styles from "./idInfo.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingPassword";
import BtnWithLoader from "components/shared/button/buttonWithLoader";
import { useChangePasswordMutation } from "redux/services/clinic/changePassword";
import { changePasswordTypes } from "types/patientTypes/changePasswordTypes";
import useToast from "hooks/useToast";



type idInfoType = {
  direction?: "rtl" | "ltr"
}
export default function IdInfo({ direction }: idInfoType) {

  const [error, isErrorActive] = React.useState(false)
  const [loadingState, changeLoadingState] = React.useState(false)
  const [postNewPassword] = useChangePasswordMutation()

  const addToast = useToast()


  const btnHandler = () => {
    isErrorActive(true)
  }

  const onSubmit = (values: changePasswordTypes) => {
    changeLoadingState(true)

    postNewPassword({ currentPassword: values.currentPassword, newPassword: values.newPassword }).unwrap().then((res) => {
      addToast("success", "Your password changed successfully")
      changeLoadingState(false)
    }).catch((err) => {

      addToast("error", err?.data?.detail)
      changeLoadingState(false)

    })

  }

  return (
    <div className={`card ${styles.infoCard} w-full`}>
      <div className={`card-body ${styles.infoCardBody} w-full`}>
        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => formValdate(values)}

          render={(props) => (
            <form onSubmit={props.handleSubmit}>
              <div className={`row form-row w-full ${styles.formBody}`}>
                <div className="col-12 col-md-12 mb-5 ">
                  <Field name="currentPassword">
                    {({ input, meta }) => (
                      <FloatingInput
                        placeholder="Current password"
                        inputStyle="focus:border-floating-border"
                        errorActive={error}
                        error={meta.error}
                        {...input}
                      />
                    )}
                  </Field>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <Field name="newPassword">
                    {({ input, meta }) => (
                      <FloatingInput
                        placeholder="New password"
                        inputStyle="focus:border-floating-border"
                        errorActive={error}
                        error={meta.error}
                        {...input}
                      />
                    )}
                  </Field>
                </div>
                <div className="col-12 col-md-6 mb-5">
                  <Field name="confirmNewPassword">
                    {({ input, meta }) => (
                      <FloatingInput
                        placeholder="Confirm new password"
                        inputStyle="focus:border-floating-border"
                        errorActive={error}
                        error={meta.error}
                        {...input}
                      />
                    )}
                  </Field>
                </div>

                <div className={`${styles.submitSection} flex items-center justify-end`}>
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