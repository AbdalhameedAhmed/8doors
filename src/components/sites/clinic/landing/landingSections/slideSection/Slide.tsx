import React, { useEffect } from "react"

import styles from "./slide.module.css"
import classNames from "classnames"
import { sliderTypes } from "types/landingTypes/sliderTypes"
import SliderITem from "./sliderItem"



export default function Slide({ title, subTitle, sectionStyle, fullSpace = false, direction, items }: sliderTypes) {
  let [translateRange, changeTranslateRange] = React.useState(-194)
  let [activeBtn, changeActiveBtn] = React.useState(1)

  useEffect(() => {

    if (direction === "rtl") {
      changeTranslateRange(0)
    }
  }, [direction])

  const handelSlider = (index: number, range: number) => {
    if (direction == "rtl") {
      changeTranslateRange(-range)
    } else {
      changeTranslateRange(range)
    }
    changeActiveBtn(index)
  }



  return (
    <section className={`section py-[80px] ${sectionStyle}`}>
      <div className={`container-fluid `}>
        <div className={`${styles.sectionHeader} text-center`} data-aos="fade-up" style={{
          direction: direction
        }}>
          <h2 className="text-[40px] font-[600] mb-2">{title}</h2>
          <p className="text-[#393939] mt-[15px] mx-auto leading-[1.42] max-w-[600px]">{subTitle}</p>
        </div>
        <div className={`${!fullSpace && "row justify-content-center"}`}>
          <div className={`${!fullSpace && "col-md-9"}`} data-aos="fade-up">

            <div className={`${styles.specialitiesSlider} slider ${styles.slickInitialized} ${styles.slickSlider}`}><div className={`${styles.slickList} draggable`}>
              <div className={`${styles.slickTrack} transition-all duration-500`} style={{ opacity: "1", width: "25000px", transform: `translate3d(${translateRange}px, 0px, 0px)`, direction: direction }}>

                {items.map((itemInfo,index) => {
                  return (
                    <SliderITem itemInfo={itemInfo} key={index} />
                  )
                })}

              </div>
            </div>
              <ul className={`${styles.slickDots} !mt-[40px]`} role="tablist" style={{
                direction: direction
              }}>
                <li className="" role="presentation">
                  <button onClick={() => { handelSlider(1, -194) }} className={classNames({ "!bg-[#0de0fe]": activeBtn === 1 })} type="button" role="tab" id="slickSlide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabIndex={-1}>1
                  </button>
                </li>
                <li role="presentation" className="slick-active">
                  <button onClick={() => { handelSlider(2, -388) }} className={classNames({ "!bg-[#0de0fe]": activeBtn === 2 })} type="button" role="tab" id="slickSlide-control01" aria-controls="slick-slide01" aria-label="2 of 5" tabIndex={0} aria-selected="true">2</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={() => { handelSlider(3, -582) }} className={classNames({ "!bg-[#0de0fe]": activeBtn === 3 })} type="button" role="tab" id="slickSlide-control02" aria-controls="slick-slide02" aria-label="3 of 5" tabIndex={-1}>3</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={() => { handelSlider(4, -776) }} className={classNames({ "!bg-[#0de0fe]": activeBtn === 4 })} type="button" role="tab" id="slickSlide-control03" aria-controls="slick-slide03" aria-label="4 of 5" tabIndex={-1}>4</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={() => { handelSlider(5, -970) }} className={classNames({ "!bg-[#0de0fe]": activeBtn === 5 })} type="button" role="tab" id="slickSlide-control04" aria-controls="slick-slide04" aria-label="5 of 5" tabIndex={-1}>5</button>
                </li></ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}