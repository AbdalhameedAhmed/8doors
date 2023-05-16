import React, { Dispatch, SetStateAction } from 'react'


import styles from "./onBoarding.module.css"
import useRemoveScroll from "hooks/useRemoveScroll";


type rightPanelTypes = {
  boardingList: { itemTitle: string, itemSubtitle: string,formComponent:React.ReactNode | React.ReactNode[] }[];
  activeItem:number;
  changeActiveItem:Dispatch<SetStateAction<number>>;
  nestedActiveForm:number
  changeNestedActiveForm:Dispatch<SetStateAction<number>>
}

export default function RightPanel({ boardingList,activeItem,changeActiveItem,nestedActiveForm,changeNestedActiveForm }: rightPanelTypes) {
  const [activeList,changeActiveList] = React.useState(0)
  const mainDivRef = React.useRef(null)

  const handelItemClick = (itemIndex:number)=>{
    changeActiveItem(itemIndex)
  }
  useRemoveScroll(mainDivRef)
  React.useEffect(()=>{
    changeActiveList(activeItem)
  },[activeItem])
  

  return (
    <div ref={mainDivRef} className={`${styles.rightPanel}`}>
      <div className="onBoarding container">
        <div className="row">
          <div className="col-lg-12 p-0">
            <div className={`${styles.rightPanelTitle} text-center`}>
              <p className="text-logo text-6xl font-bold transition-all pb-2 duration-300">8doors</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 flex items-center justify-start !max-h-screen">
            <div className={`${styles.onBoardWizard} w-full`}>
              <ul>
                {
                  
                  boardingList?.map((itemInfo, index) => (
                    <li key={index} onClick={()=>{handelItemClick(index)}}>
                      
                        <div className={`${styles.onboardingProgress} ${index<=activeItem&& `${styles.active}` }`}>
                          <span>{index + 1}</span>
                        </div>
                        <div className={`${styles.onboardingList}`}>
                          <h6>{itemInfo.itemTitle}</h6>
                          <p>{itemInfo.itemSubtitle} </p>
                        </div>
                      
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
 
          <div className="col-lg-8 col-md-12">
            {Array.isArray(boardingList[activeItem].formComponent) ? boardingList[activeItem].formComponent[nestedActiveForm]: boardingList[activeList].formComponent?boardingList[activeList].formComponent:<h1>No items found</h1>}
          </div>
        </div>
      </div>
    </div>
  )
}