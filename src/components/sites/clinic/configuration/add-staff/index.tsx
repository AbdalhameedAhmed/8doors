import React from "react";
import { Form, Field } from "react-final-form";
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import CustomSelector from "components/shared/customMultipleSelector";
import CustomSSelector from "components/shared/customSingleSelector";
export const AddStaff = () => {
  const onSubmit = async (values: any, form: any) => {
    window.alert(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors: any = {};
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        const validTel = /^[0-9]*$/
        if (!values.name) {
          errors.name = "This field is required";
        }
        if (!values.email) {
          errors.email = "This field is required";
        } else if (!values.email.match(validEmail)) {
          errors.email = "Please include an @ in the email address then add more letters";
        }
        if (!values.tel) {
          errors.tel = "This field is required";
        } else if (!values.tel.match(validTel)) {
          errors.tel = "Only numbers is required";
        }
        if (!values.speciality) {
          errors.speciality = "This field is required";
        }
        return errors;
      }}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div className="relative p-6 flex-auto max-h-96 overflow-auto ">
            <Field name="name">
              {({ input, meta }) => (
                <CustomInput
                  type="text"
                  className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Name"
                  error={meta.error}
                  touched={meta.touched}
                  {...input}
                />
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <CustomInput
                  type="text"
                  className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Email"
                  error={meta.error}
                  touched={meta.touched}
                  {...input}
                />
              )}
            </Field>
            <Field name="tel">
              {({ input, meta }) => (
                <CustomInput
                  type="tel"
                  className=" mt-1 mb-4 px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Mobile"
                  error={meta.error}
                  touched={meta.touched}
                  {...input}
                />
              )}
            </Field>
            <Field name="speciality single" component="select">
              {({ input, meta }) => (
                <>
                  <CustomSSelector input={input} placeholder="Gender" items={["male", "female"]} />
                  {meta.error && meta.touched && (
                    <p className="text-red-500 text-sm mt-2">{meta.error}</p>
                  )}
                </>
              )}
            </Field>
            <Field name="speciality" component="select">
              {({ input, meta }) => (
                <>
                  <CustomSelector input={input} placeholder="select role/s"
                    items={[
                      "Allergist",
                      "Dermatologist",
                      "Infectious disease",
                      "Ophthalmologists"
                    ]} />
                  {meta.error && meta.touched && (
                    <p className="text-red-500 text-sm mt-2">{meta.error}</p>
                  )}
                </>
              )}
            </Field>
          </div>

          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <CustomBtn type="submit" disabled={submitting} fit={false} className="mr-4">
              submit
            </CustomBtn>
          </div>
        </form>
      )}
    ></Form>
  );
};
