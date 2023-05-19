

import styles from "./onBoarding.module.css"

import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"
import { Dispatch, SetStateAction } from "react"

type onBoardingTypes = {
  boardingList: { itemTitle: string, itemSubtitle: string, formComponent: React.ReactNode | React.ReactNode[] }[];
  activeItem: number
  changeActiveItem: Dispatch<SetStateAction<number>>;
  nestedActiveForm: number
  changeNestedActiveForm: Dispatch<SetStateAction<number>>
  direction: "ltr" | "rtl"
}

export default function onBoarding({ boardingList, activeItem = 0, changeActiveItem, nestedActiveForm, changeNestedActiveForm, direction }: onBoardingTypes) {



  return (
    <div className={`${styles.onBoardWrapper}`}>

      <LeftPanel />

      <RightPanel direction={direction} boardingList={boardingList} activeItem={activeItem} nestedActiveForm={nestedActiveForm} changeActiveItem={changeActiveItem} changeNestedActiveForm={changeNestedActiveForm} />

    </div>
  )
}