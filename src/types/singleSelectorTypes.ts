export type singleSelectorTypes = {
  placeholder: string;
  options: string[];
  input?: any;
  inputStyle?: string;
  menuStyle?: string;
  dirtyFields?: any;
  error?: string | number | any;
  touched?: string | number | any;
  containerStyle?: string;
  errorActive?: boolean;
  onActiveLi?:(id:string)=>void
  floatMenu?:boolean
};
