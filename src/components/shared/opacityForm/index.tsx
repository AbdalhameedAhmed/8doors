import React from "react"
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import SingleSelector from "components/shared/customSingleSelector"
import MultipleSelector from "components/shared/customMultipleSelector"
import { opacityFormData } from "types/opacityFormTypes"

export default function OpacityForm(props: opacityFormData) {

  const { inputsData, formValidate, formSubmit, inputContainerStyle, inputStyle, fitSubmitBtn = false, submitBtnContainer, submitBtnStyle, trackerContainerStyle } = props

  const [submit, isSubmitTime] = React.useState<boolean>(false)
  const [activeFieldIndex, changeActiveIndex] = React.useState(0)
  const [activeList, changeActiveList] = React.useState<Array<string>>([])
  const [activeInput, changeActiveInput] = React.useState(inputsData[0].name)
  const [errorActive, changeErrorActive] = React.useState("")

  const isFieldActive = (name: string) => {
    let isActive = activeList.find((active) => active === name)
    if (isActive) {
      return true
    } else {
      return false
    }
  }

  const submitBtnFunction = (errors) => {
    if (activeFieldIndex == inputsData.length - 1) {
      isSubmitTime(true)
    }
    if (errors[inputsData[activeFieldIndex].name]) {
      changeErrorActive(inputsData[activeFieldIndex].name)
    } else if (activeFieldIndex !== inputsData.length - 1) {
      changeActiveInput(inputsData[activeFieldIndex + 1].name)
      changeActiveList([...activeList, inputsData[activeFieldIndex].name])
      changeActiveIndex(activeFieldIndex + 1)
    }
  }

  const preventForm = (values, formSubmit) => {
    return submit && formSubmit(values)
  }

  return (
    <>
      <div className={classNames("flex justify-center mt-8 gap-4 items-center flx-wrap", trackerContainerStyle)}>
        {inputsData.map((inputInfo, index) => (
          <div key={index} className={classNames("xs:w-[20px] w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": inputInfo.value || isFieldActive(inputInfo.name) })}></div>
        ))}
      </div>

      <Form
        onSubmit={(values) => { preventForm(values, formSubmit) }}
        validate={(values) => {
          return formValidate(values)
        }}
        render={(data) => (
          <form onSubmit={data.handleSubmit}>
            <div className={`p-6 xs:px-4 flex-auto  max-h-96 min-h-[200px] overflow-auto ${inputContainerStyle}`}>
              <div className={classNames("relative min-h-inherit overflow-hidden flex items-center")}>
                {
                  inputsData.map((inputInfo, index) => {
                    if ((inputInfo.type !== "singleSelector") && (inputInfo.type !== "multipleSelector")) {
                      return (
                        <Field name={inputInfo.name} key={index} initialValue={inputInfo.value}>
                          {({ input, meta }) => (
                            <CustomInput
                              type={inputInfo.type}
                              className={classNames(
                                `px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputStyle}`
                                , { "!border-red-500": (errorActive === input.name && meta.error), "focus:!border-red-500": (errorActive === input.name && meta.error), "focus:!ring-red-500": (errorActive === input.name && meta.error) })}
                              placeholder={inputInfo.placeholder}
                              errorActive={errorActive}
                              error={meta.error}
                              touched={meta.touched}
                              containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 mt-0 top-1/2 left-0 translate-y-[200px]", { "!-translate-y-1/2": activeInput == input.name, "!opacity-100": activeInput == input.name, "!opacity-0": activeInput !== input.name, "!-translate-y-[200px]": isFieldActive(input.name) })}
                              {...input}
                            />
                          )}
                        </Field>
                      )
                    } else if (inputInfo.type === "singleSelector") {
                      return (
                        <Field name={inputInfo.name} component="select" key={index}>
                          {({ input, meta }) => (
                            <SingleSelector
                              input={input}
                              placeholder={inputInfo.placeholder}
                              error={meta.error}
                              dirtyFields={data.dirtyFields}
                              touched={meta.touched}
                              errorActive={errorActive}
                              containerStyle={classNames("absolute top-1/2 left-0 transition-all duration-300 translate-y-[200px] w-full", { "!translate-y-0": activeInput == input.name, "!relative": activeInput == input.name, "!-translate-y-[200px]": isFieldActive(input.name), "!absolute": isFieldActive(input.name) })}
                              options={inputInfo.options!}
                              menuStyle={classNames({ "hidden": !(activeInput == input.name) })}
                              inputStyle={classNames("w-full transition-all opacity-0 duration-300", { "!opacity-100": activeInput == input.name })}
                            />
                          )}
                        </Field>
                      )
                    } else if (inputInfo.type === "multipleSelector") {
                      return (
                        <Field name={inputInfo.name} component="select" key={index}>
                          {({ input, meta }) => (
                            <MultipleSelector
                              input={input}
                              placeholder={inputInfo.placeholder}
                              options={inputInfo.options!}
                              error={meta.error}
                              dirtyFields={data.dirtyFields}
                              errorActive={errorActive}
                              touched={meta.touched}
                              containerStyle={classNames("absolute top-1/2 left-0 transition-all duration-300 translate-y-[200px] w-full", { "!translate-y-0": activeInput == input.name, "!relative": activeInput == input.name, "!-translate-y-[200px]": isFieldActive(input.name), "!absolute": isFieldActive(input.name) })}
                              menuStyle={classNames({ "hidden": !(activeInput == input.name) })}
                              inputStyle={classNames("w-full transition-all duration-300", { "!opacity-100": activeInput == input.name })}
                            />
                          )}
                        </Field>
                      )
                    }
                  })
                }
              </div>
            </div>

            <div className={`flex items-center justify-end p-6 xs:p-4 border-t border-solid border-slate-200 rounded-b ${submitBtnContainer}`}>
              <CustomBtn type="submit" disabled={data.submitting} fit={fitSubmitBtn} className={`mr-[7px] ${submitBtnStyle}`}
                onClick={() => {
                  submitBtnFunction(data.errors)
                }}>
                {activeFieldIndex == inputsData.length - 1 ? "submit" : "Next"}
              </CustomBtn>
            </div>
          </form>
        )}
      ></Form>
    </>
  );
}