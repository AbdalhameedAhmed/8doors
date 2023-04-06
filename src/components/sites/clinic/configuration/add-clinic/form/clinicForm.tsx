import React from "react"
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import { formValdate } from "../formValidate"

type props = {
  openModal: Function
}
export default function ClinicForm ({ openModal }: props){
  const [submit, isSubmitTime] = React.useState(false)
  const [activeList, changeActiveList] = React.useState<Array<string>>([])
  const [activeInput, changeActiveInput] = React.useState("clinicName")
  const [errorActive, changeErrorActive] = React.useState("")

  const onSubmit = async (values: FormData) => {
    window.alert(values);
    openModal()
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
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("clinicName") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("address") })}></div>
        <div className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive("phone") })}></div>
      </div>

      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          return formValdate(values, isSubmitTime)
        }}
        render={({ handleSubmit, dirtyFields, modified, submitting, errors }: any) => (
          <form onSubmit={handleSubmit}>
            <div className="px-6 flex-auto  max-h-96 min-h-[150px] overflow-auto ">
              <div className={classNames("relative min-h-inherit overflow-hidden flex items-center py-5")}>

              <Field name="clinicName">
                  {({ input, meta }) => (
                    <CustomInput
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-100 mt-0 top-1/2 left-0 -translate-y-1/2", { "!opacity-0": activeInput !== input.name, "!-translate-y-full": activeInput !== input.name })}
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
                <Field name="address">
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
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 mt-0 top-1/2  left-0 translate-y-full", { "!opacity-100": activeInput == input.name, "!-translate-y-1/2": activeInput == input.name ,"!-translate-y-full":isFieldActive(input.name)})}
                      {...input}
                    />
                  )}
                </Field>
                <Field name="phone">
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
                      containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 mt-0 top-1/2  left-0 translate-y-full", { "!opacity-100": activeInput == input.name, "!-translate-y-1/2": activeInput == input.name ,"!-translate-y-full":isFieldActive(input.name)})}
                      {...input}
                    />
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
}