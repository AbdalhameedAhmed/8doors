import React from "react"
import LoginInput from "components/login/LoginInput"
import { formValidate } from "./formValidate"
import CustomBtn from "components/shared/button/CustomBtn"
import useToast from "hooks/useToast"
import { Field, Form } from "react-final-form"
import FormInput from "./formInput"

type props = {
  openModal: Function
}
export default function UpdateClinicForm({ openModal,clinicData }: props) {

  const onSubmit = async (values: FormData) => {
    console.log(values);
    
    openModal!()
  }
  return (
    <div className="p-6">

      <Form
        onSubmit={onSubmit}
        validate={(values)=>formValidate(values)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 items-start">
            <div className="flex gap-4 items-center w-full">
              <label className="text-lg font-bold w-36">Clinic name :</label>
              <Field name="clinicName" initialValue={clinicData.clinicName}>
                {({ input, meta }) => (
                  <>
                    <FormInput
                      containerStyle="!m-0"
                      inputStyle="!m-0"
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />

                  </>
                )}
              </Field>
            </div>
            <div className="flex gap-4 items-center w-full">
              <label className="text-lg font-bold w-36">Address :</label>
              <Field name="address" initialValue={clinicData.address}>
                {({ input, meta }) => (
                  <>
                    <FormInput
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />

                  </>
                )}
              </Field>
            </div>
            <div className="flex gap-4 items-center w-full">
              <label className="text-lg font-bold w-36">Phone :</label>
              <Field name="phone" initialValue={clinicData.phone}>
                {({ input, meta }) => (
                  <>
                    <FormInput
                      error={meta.error}
                      touched={meta.touched}
                      {...input}
                    />

                  </>
                )}
              </Field>
            </div>
            <CustomBtn type="submit" className="block ml-auto">Change</CustomBtn>
          </form>
        )}
      />
    </div>

  );
}