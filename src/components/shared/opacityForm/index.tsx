import React, { Dispatch, SetStateAction } from "react"
import { Form, Field } from "react-final-form";
import classNames from "classnames"
import { CustomInput } from "components/shared/customInput";
import CustomBtn from "components/shared/button/CustomBtn";
import SingleSelector from "components/shared/customSingleSelector"
import MultipleSelector from "components/shared/customMultipleSelector"

export type inputInfo = {
  name:string;
  placeholder:string;
  type:"text"|"email"|"tel"|"password"|"number"|"singleSelector"|"multipleSelector"
  options?:string[]
}
type props = {
  inputsData:inputInfo[];
  formValidate:(values:FormData,isSubmitTime:Dispatch<SetStateAction<boolean>>)=>string[];
  formSubmit:(values: FormData)=>void
  inputContainerStyle?:string
  fitSubmitBtn?:boolean
  submitBtnContainer?:string
  submitBtnStyle?:string
  inputStyle?:string
}

export default function ClinicForm ({inputsData,formValidate,formSubmit,inputContainerStyle,inputStyle,fitSubmitBtn=false ,submitBtnContainer,submitBtnStyle}: props){

  const [submit, isSubmitTime] = React.useState<boolean>(false)
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

  return (
    <>
      <div className="flex justify-center mt-8 gap-4 items-center">
        {inputsData.map((inputInfo,index)=>(
          <div key={index} className={classNames("w-[30px] h-[6px] bg-layout-secondary", { "!bg-green-500": isFieldActive(inputInfo.name) })}></div>
        ))}
      </div>

      <Form
        onSubmit={formSubmit}
        validate={(values) => {
          return formValidate(values, isSubmitTime)
        }}
        render={({ handleSubmit, dirtyFields, modified, submitting, errors }: any) => (
          <form onSubmit={handleSubmit}>
            <div className={`px-6 flex-auto  max-h-96 min-h-[150px] overflow-auto ${inputContainerStyle}`}>
              <div className={classNames("relative min-h-inherit overflow-hidden flex items-center py-5")}>

              {
                inputsData.map((inputInfo,index)=>{
                 if((inputInfo.type!=="singleSelector")&&(inputInfo.type!=="multipleSelector")){
                 return (
                  <Field name={inputInfo.name} key={index}>
                  {({ input, meta }) => (
                    <CustomInput
                    type={inputInfo.type}
                    className={classNames(
                        `px-3 py-2 border shadow-sm border-slate-300 placeholder-slate-400 bg-secondary focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 ${inputStyle}`
                      ,{"!border-red-500":(errorActive===input.name&&meta.error),"focus:!border-red-500":(errorActive===input.name&&meta.error),"focus:!ring-red-500":(errorActive===input.name&&meta.error)})}
                      placeholder={inputInfo.placeholder}
                      errorActive={errorActive}
                      error={meta.error}
                      touched={meta.touched}
                      dirtyFields={dirtyFields}
                    containerStyle={classNames("absolute w-full transition-all duration-300 opacity-0 mt-0 top-1/2 left-0 translate-y-[200px]", { "!-translate-y-1/2": activeInput == input.name,"!opacity-100": activeInput == input.name,"!opacity-0": activeInput !== input.name, "!-translate-y-[200px]": isFieldActive(input.name) })}
                      {...input}
                    />
                  )}
                </Field>
                 )  
                 }else if (inputInfo.type==="singleSelector"){
                   return(
                    <Field name={inputInfo.name} component="select" key={index}>
                    {({ input, meta }) => (
                        <SingleSelector
                        input={input}
                        placeholder={inputInfo.placeholder}
                        error={meta.error}
                        dirtyFields={dirtyFields}
                        touched={meta.touched}
                        errorActive={errorActive}
                        containerStyle={classNames("absolute top-1/2 left-0 transition-all duration-300 translate-y-[200px] w-full",{"!translate-y-0": activeInput == input.name,"!relative": activeInput == input.name ,"!-translate-y-[200px]":isFieldActive(input.name),"!absolute":isFieldActive(input.name)})}
                        options={inputInfo.options!}
                        menuStyle={classNames({"hidden":!(activeInput == input.name)})}
                        inputStyle={classNames("w-full transition-all opacity-0 duration-300", {"!opacity-100": activeInput == input.name} )}
                      />
                    )}
                  </Field>
                   )
                 } else if(inputInfo.type==="multipleSelector"){
                   return (
                    <Field name={inputInfo.name} component="select" key={index}>
                  {({ input, meta }) => (
                      <MultipleSelector
                        input={input}
                        placeholder={inputInfo.placeholder}
                        options={inputInfo.options!}
                        error={meta.error}
                        dirtyFields={dirtyFields}
                        errorActive={errorActive}
                        touched={meta.touched}
                        containerStyle={classNames("absolute top-1/2 left-0 transition-all duration-300 translate-y-[200px] w-full",{"!translate-y-0": activeInput == input.name,"!relative": activeInput == input.name ,"!-translate-y-[200px]":isFieldActive(input.name),"!absolute":isFieldActive(input.name)})}
                        menuStyle={classNames({"hidden":!(activeInput == input.name)})}
                        inputStyle={classNames("w-full transition-all duration-300", {"!opacity-100": activeInput == input.name} )}
                      />
                  )}
                </Field>
                   )
                 }
                })
              }
              </div>
            </div>

            <div className={`flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ${submitBtnContainer}`}>
              <CustomBtn type="submit" disabled={submitting} fit={fitSubmitBtn} className={`mr-4 ${submitBtnStyle}`}
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