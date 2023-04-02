import React from "react";
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import CustomSelector from "components/shared/customMultipleSelector";
import CustomSSelector from "components/shared/customSingleSelector";
import { fromValdate } from "./formValidate"
type props = {
  closeModal: Function
}
export const AddStaff = ({ closeModal }: props) => {
  const [submit, isSubmitTime] = React.useState(false)
  const [activeList, changeActiveList] = React.useState<Array<string>>([])
  const [activeInput, changeActiveInput] = React.useState("name")
  const [errorActive, changeErrorActive] = React.useState("")

  const onSubmit = async (values: FormData) => {
    window.alert(values);
    closeModal()
  };
  const isFieldActive = (name: string) => {
    let isActive = activeList.find((active) => active === name)
    if (isActive) {
      return true
    } else {
      return false
    }
  }
  return (
    <>
      <div className="flex justify-center mt-8 gap-4 items-center">
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("name") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("email") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("tel") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("gender") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("speciality") })}></div>
      </div>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          return fromValdate(values, isSubmitTime)
        }}
        render={({ handleSubmit, dirtyFields, modified, submitting, errors }: any) => (
          <form onSubmit={handleSubmit}>
            <div className="p-6 flex-auto  max-h-96 min-h-[150px] overflow-auto ">
              <div className="relative min-h-[50px]">

                <Field name="name">
                  {({ input, meta }) => (
                    <CustomInput
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-100 mt-0 top-0 left-0", { "!opacity-0": activeInput !== input.name, "!-z-10": activeInput !== input.name })}
                      type="text"
                      className={classNames(
                        `px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 !mb-0 !mt-0`
                      )}
                      placeholder="Name"
                      isFirst={true}
                      errorActive={errorActive}
                      error={meta.error}
                      touched={meta.touched}
                      dirtyFields={dirtyFields}
                      {...input}
                    />
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <CustomInput
                      type="text"
                      className="px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      inputStyle="mb-0 mt-0"
                      placeholder="Email"
                      errorActive={errorActive}
                      error={meta.error}
                      touched={meta.touched}
                      dirtyFields={dirtyFields}
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!z-10": activeInput == input.name })}
                      {...input}
                    />
                  )}
                </Field>
                <Field name="tel">
                  {({ input, meta }) => (
                    <CustomInput
                      type="tel"
                      className="px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      inputStyle="mb-0 mt-0"
                      placeholder="Mobile"
                      errorActive={errorActive}
                      error={meta.error}
                      touched={meta.touched}
                      dirtyFields={dirtyFields}
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!z-10": activeInput == input.name })}
                      {...input}
                    />
                  )}
                </Field>
                <Field name="gender" component="select">
                  {({ input, meta }) => (
                    <>
                      <CustomSSelector
                        input={input}
                        placeholder="Gender"
                        error={meta.error}
                        dirtyFields={dirtyFields}
                        touched={meta.touched}
                        errorActive={errorActive}
                        items={["male", "female"]}
                        inputStyle={classNames("absolute !mb-0 w-full !mt-6 transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!relative": activeInput == input.name, "!z-10": activeInput == input.name })}
                      />
                    </>
                  )}
                </Field>
                <Field name="speciality" component="select">
                  {({ input, meta }) => (
                    <>
                      <CustomSelector
                        input={input}
                        placeholder="select role/s"
                        items={[
                          "Allergist",
                          "Dermatologist",
                          "Infectious disease",
                          "Ophthalmologists"
                        ]}
                        error={meta.error}
                        dirtyFields={dirtyFields}
                        errorActive={errorActive}
                        touched={meta.touched}
                        inputStyle={classNames("absolute w-full !mt-6 transition-all duration-300 opacity-0 -z-10 mt-0 top-0 left-0", { "!opacity-100": activeInput == input.name, "!relative": activeInput == input.name, "!z-10": activeInput == input.name })}
                      />
                    </>
                  )}
                </Field>
              </div>
            </div>

            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <CustomBtn type="submit" disabled={submitting} fit={false} className="mr-4"
                onClick={() => {
                  if (modified) {
                    let inputs = Object.keys(modified)
                    inputs.forEach((key, index) => {
                      if (activeInput === key && errors[key]) {
                        changeErrorActive(key)
                      }
                      if (!errors[key]) {
                        changeActiveInput(inputs[index + 1])
                        changeActiveList([...activeList, key])
                      }
                    })
                  }


                }}>
                {submit ? "submit" : "Next"}
              </CustomBtn>
            </div>
          </form>
        )}
      ></Form>
    </>
  );
};
