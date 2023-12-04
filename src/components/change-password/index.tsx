import React from "react"

import { Form, Field } from "react-final-form";

import { FormValidate } from "./formValidate"
import CustomBtn from "components/shared/button/CustomBtn";
import PasswordInput from "./passwordInput"
import useToast from "hooks/useToast";
import { changePasswordFormTypes } from "types/changePasswordFormTypes"
import { useMutation } from "@tanstack/react-query";
import { changePassword } from "tanstack/fetchers/sites/clinic/Settings";

export default function ChangePasswordForm() {

  const { mutate: changePasswordMutate, isPending: isChangePasswordPending } = useMutation({
    mutationFn: changePassword,
    onSuccess: async () => {
      addToast("success", "changed Succesfully")
    },
    onError: async () => {
      addToast("error", "not changed")
    }
  })

  let addToast = useToast()

  const handleSubmit = (values: changePasswordFormTypes) => {

    changePasswordMutate({ currentPassword: values.currentPassword, newPassword: values.newPassword })

  };

  return (
    <div className="p-5 w-1/2 sm:w-full xs:w-full">

      <Form
        onSubmit={handleSubmit}
        validate={FormValidate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-start w-full">
            <div className="flex flex-col items-start gap-1 w-full">
              <label className="text-lg font-bold ">Current Password</label>
              <Field name="currentPassword">
                {({ input, meta }) => (
                  <>
                    <PasswordInput
                      label=""
                      containerStyle="w-full"
                      inputStyle="w-full"
                      error={meta.error}
                      errorStyle="mt-0"
                      touched={meta.touched}
                      {...input}
                    />

                  </>
                )}
              </Field>
            </div>
            <div className="w-full flex md:flex-col gap-8">

              <div className="flex flex-col gap-1 items-start w-1/2 md:w-full">
                <label className="text-lg font-bold w-48">New Password</label>
                <Field name="newPassword">
                  {({ input, meta }) => (
                    <>
                      <PasswordInput
                        containerStyle="w-full"
                        inputStyle="w-full"
                        label=""
                        error={meta.error}
                        touched={meta.touched}
                        {...input}
                      />

                    </>
                  )}
                </Field>
              </div>
              <div className="flex flex-col gap-1 items-start w-1/2 md:w-full">
                <label className="text-lg font-bold w-48">Confirm new password</label>
                <Field name="newPasswordConfirmation">
                  {({ input, meta }) => (
                    <>
                      <PasswordInput
                        containerStyle="w-full"
                        inputStyle="w-full"
                        label=""
                        error={meta.error}
                        touched={meta.touched}
                        {...input}
                      />

                    </>
                  )}
                </Field>
              </div>
            </div>
            <CustomBtn type="submit" className="block ml-auto">Change</CustomBtn>
          </form>
        )}
      />
    </div>
  )
}