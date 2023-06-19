export type sliderTypes = {
  title?: string;
  subTitle?: string;
  sectionStyle?: string
  fullSpace?: boolean
  direction: "rtl" | "ltr"
  items:{imgSrc:string;title:string}[]
}