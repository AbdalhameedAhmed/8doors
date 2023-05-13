

import styles from "./onBoarding.module.css"

import LeftPanel from "./LeftPanel"
import RightPanel from "./RightPanel"

type onBoardingTypes = {
  boardingList: { itemTitle: string, itemSubtitle: string }[];
}

export default function onBoarding({boardingList}:onBoardingTypes) {



  return (
    <div className={`${styles.onBoardWrapper}`}>

      <LeftPanel />

     <RightPanel boardingList={boardingList}/>
     
    </div>
  )
}