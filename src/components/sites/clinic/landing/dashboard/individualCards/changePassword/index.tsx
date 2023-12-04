import React from "react"

import { Form, Field } from "react-final-form";

import { formValidate } from "./formValidate";
import FloatingInput from "components/shared/floatingInput/FloatingPassword";
import BtnWithLoader from "components/shared/button/buttonWithLoader";
import useToast from "hooks/useToast";

import styles from "./idInfo.module.css"
import { useMutation } from "@tanstack/react-query";
import { sendNewPassword } from "tanstack/fetchers/individualDashboard";
import { AxiosError } from "axios";
import { changePasswordFailed, changePasswordRequestData } from "types/auth/changePassword";

type idInfoType = {
  direction?: "rtl" | "ltr"
}

export default function IdInfo({ direction }: idInfoType) {

  const [error, isErrorActive] = React.useState(false)

  const addToast = useToast()

  const { mutate: newPasswordMutation, isPending: newPasswordIsPending } = useMutation({
    mutationFn: sendNewPassword,
    onSuccess: async () => {
      ChangedSuccessfully()
    },
    onError: async (err: AxiosError) => {
      changeFailed(err.response as changePasswordFailed)
    }
  })

  const ChangedSuccessfully = () => {
    addToast("success", "Your password changed successfully")
  }

  const changeFailed = (err: changePasswordFailed) => {
    addToast("error", err?.data?.detail)
  }

  const btnHandler = () => {
    isErrorActive(true)
  }

  const onSubmit = (values: changePasswordRequestData) => {

    newPasswordMutation({ currentPassword: values.currentPassword, newPassword: values.newPassword })

  }

  return (
    <div className={`card ${styles.infoCard} w-full`}>
      <div className={`card-body ${styles.infoCardBody} w-full`}>
        <Form
          onSubmit={onSubmit}

          validate={(values): Record<string, string> => formValidate(values)}

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
                  <BtnWithLoader showSpinner={newPasswordIsPending} title="Save Changes" fullWidht={false} onClick={() => { btnHandler() }} disabled={props.submitting} />
                </div>
              </div>
            </form>
          )}
        ></Form>


      </div>
    </div>
  )
}