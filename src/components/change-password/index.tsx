import { formValdate } from "components/signup/formValidate";
import React from "react"
import { Form, Field } from "react-final-form";
import { changeFormValidate } from "./formValidate"

export default function ChangePasswordForm() {
  const handleSubmit = (values) => {
    console.log(values);
    // Submit form data to server here
  };

  return (
    <div className="p-5">

      <Form
        onSubmit={handleSubmit}
        validate={changeFormValidate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <label className="text-lg font-bold w-48">Current Password :</label>
              <Field name="currentPassword" component="input" type="password" className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 `} />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-lg font-bold w-48">New password :</label>
              <Field name="newPassword" component="input" type="password" className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 `} />
            </div>
            <div className="flex gap-4 items-center">
              <label className="text-lg font-bold w-48">Confirm new password :</label>
              <Field name="confirmNewPassword" component="input" type="password" className={`mt-1 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 `} />
            </div>

            <button type="submit" className="">Change</button>
          </form>
        )}
      />
    </div>
  )
}