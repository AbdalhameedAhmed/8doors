import { country } from "./lookupTypes/country";

export type singleSelectorTypes = {
  placeholder: string;
  options:{
    id: number;
    value: string|number;
    title:string;
    [key: string]: any;
  }[];
  input?: any;
  inputStyle?: string;
  menuStyle?: string;
  dirtyFields?: any;
  error?: string | number | any;
  touched?: string | number | any;
  containerStyle?: string;
  errorActive?: boolean;
  onActiveLi?:(id:number)=>void
  floatMenu?:boolean
};
