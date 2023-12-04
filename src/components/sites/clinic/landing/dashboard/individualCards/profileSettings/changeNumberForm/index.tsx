import React, { useState } from "react"
import BtnWithLoader from "components/shared/button/buttonWithLoader"

import FloatingInput from "components/shared/floatingInput/FloatingInput"
import PasswordInput from "components/shared/floatingInput/FloatingPassword";

import { Form, Field } from "react-final-form"
import { formValidate } from "./formValidate"
import useToast from "hooks/useToast"
import { useMutation } from "@tanstack/react-query";
import { sendChangePhoneNubmerInit } from "tanstack/fetchers/individualDashboard";
import { AxiosError } from "axios";
import { changePhoneNumberFailed } from "types/patientTypes/changePhoneNumber";


type ChangeNumberFormTypes = {
  onSuccess: () => void
}

export default function ChangePhoneForm({ onSuccess }: ChangeNumberFormTypes) {
  const [error, activeError] = useState(false)

  const { mutate: changePhoneNumberMutation, isPending: changePhoneNumberIsPending } = useMutation({
    mutationFn: sendChangePhoneNubmerInit,
    onSuccess: async () => {
      onSuccess()
    },
    onError: async (err: AxiosError) => {
      let errorData = err.response?.data
      addToast("error", (errorData as changePhoneNumberFailed).detail || (errorData as changePhoneNumberFailed).message)
    }
  })
  const addToast = useToast()



  const onSubmit = (values: Record<string, any>) => {
    changePhoneNumberMutation({ newPhoneNum: values.newPhoneNum, password: values.password })
  }


  return (
    <div className="w-full shrink-0 !snap-center px-12 py-8">
      <h1 className="text-center text-3xl pb-4 font-bold" >Change your phone Number</h1>

      <Form
        onSubmit={onSubmit}
        validate={(values): Record<string, string> => formValidate(values)
        }

        render={({ handleSubmit, submitting, values, errors }) => (
          <form onSubmit={handleSubmit}>


            <div className="row form-row">
              <Field name="newPhoneNum">
                {({ input, meta }) => (
                  <>
                    <div className="col-12">
                      <FloatingInput
                        placeholder="New phone Number"
                        inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                        placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                        error={meta.error}
                        errorActive={error}
                        type="tel"
                        {...input}

                      />
                    </div>
                  </>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <>
                    <div className="col-12">
                      <PasswordInput
                        placeholder="Enter your password"
                        inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                        placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                        error={meta.error}
                        errorActive={error}
                        {...input}

                      />
                    </div>
                  </>
                )}
              </Field>
            </div>
            <div className={`flex justify-end`}>
              <BtnWithLoader showSpinner={changePhoneNumberIsPending} title="Save Changes" onClick={() => { activeError(true) }} disabled={submitting} />
            </div>
          </form>
        )}
      ></Form>
    </div>
  )
}