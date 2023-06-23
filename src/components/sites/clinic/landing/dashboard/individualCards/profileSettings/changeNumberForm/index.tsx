import React, { useState } from "react"
import BtnWithLoader from "components/shared/button/buttonWithLoader"

import FloatingInput from "components/shared/floatingInput/FloatingInput"
import { Form, Field } from "react-final-form"
import { formValidate } from "./formValidate"
import { useChangePhoneNubmerInitMutation } from "redux/services/patient/changePhoneNumberInit"

type ChangeNumberFormTypes = {
  onSuccess: () => void
}

export default function ChangePhoneForm({ onSuccess }: ChangeNumberFormTypes) {
  const [loadingState, changeLoadingState] = useState(false)
  const [error, activeError] = useState(false)
  const [postNewPhone] = useChangePhoneNubmerInitMutation()


  const onSubmit = (values: Record<string, any>) => {
    postNewPhone({ newPhoneNum: values.newPhoneNum, password: values.password }).unwrap().then(res => {
      onSuccess()
      console.log(res);

    }).catch(err => {
      console.log(err);

    })


  }

  const formValdate = () => {

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
                        type="text"
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
                      <FloatingInput
                        placeholder="Enter your password"
                        inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border"
                        placeholderStyles="!bg-white peer-focus:!bg-white z-0"
                        error={meta.error}
                        errorActive={error}
                        type="text"
                        {...input}

                      />
                    </div>
                  </>
                )}
              </Field>
            </div>
            <div className={`flex justify-end`}>
              <BtnWithLoader showSpinner={loadingState} title="Save Changes" onClick={() => { activeError(true); onSuccess() }} disabled={submitting} />
            </div>
          </form>
        )}
      ></Form>
    </div>
  )
}