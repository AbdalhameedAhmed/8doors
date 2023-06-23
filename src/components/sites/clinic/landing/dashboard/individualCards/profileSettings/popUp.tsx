import React, { useRef, useEffect, useState } from "react"
import classNames from "classnames"
import { Dispatch, SetStateAction } from "react"
import { useOnClickOutside } from "usehooks-ts"

type popUpTypes = {
  popUpState: boolean
  openPopup: Dispatch<SetStateAction<boolean>>
  cardInfo: React.ReactNode[]
  activeItemNum: number
  changeActivePopUpCardNum: Dispatch<SetStateAction<number>>
}


export default function PopUp({ popUpState, openPopup, cardInfo, activeItemNum, changeActivePopUpCardNum }: popUpTypes) {

  const popUpCardRef = useRef(null)
  const [cardState, showCard] = useState(false)

  const closePopUp = () => {
    openPopup(false)
    showCard(false)
    changeActivePopUpCardNum(0)
  }
  useOnClickOutside(popUpCardRef, closePopUp)

  useEffect(() => {
    popUpState ? setTimeout(() => {
      popUpCardRef && showCard(true)
    }, 50) : closePopUp()


  }, [popUpState])

  useEffect(() => {
    const slideElement = document.querySelector("#popUpSlider")

    slideElement!.scrollLeft = 300 * ++activeItemNum;


  }, [activeItemNum, popUpState])

  return (
    <div className={classNames("fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.6)] z-10", { "hidden": !popUpState })
    }>
      <div ref={popUpCardRef} id="popUpSlider" className={classNames("absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[40%] bg-white transition-all duration-300 scale-0 overflow-x-hidden flex !snap-x	snap-mandatory transition-all rounded", { "scale-100 duration-500 scroll-smooth": cardState })}>
        {popUpState && cardInfo}
      </div>
    </div >
  )
}