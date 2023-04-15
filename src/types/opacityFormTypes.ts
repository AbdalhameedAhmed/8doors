export type inputInfo = {
  name: string;
  placeholder: string;
  value:string;
  type: "text" | "email" | "tel" | "password" | "number" | "singleSelector" | "multipleSelector"
  options?: string[]
}
export type opacityFormData = {
  inputsData: inputInfo[];
  formValidate: (values: FormData) => string[];
  formSubmit: (values: FormData) => void
  inputContainerStyle?: string
  fitSubmitBtn?: boolean
  submitBtnContainer?: string
  submitBtnStyle?: string
  inputStyle?: string
  trackerContainerStyle?:string
}
