import React from "react"

import styles from "./bookOurDoctor.module.css"

import RightIcon from "assets/angle-right-solid.svg"

import { cardsInfo } from "./doctorsInfo"
import CardBody from "./cardBody"



type BookTypes = {
  direction?: "ltr" | "rtl"
}

export default function BookOutDoctor({ direction = "ltr" }: BookTypes) {
  const [slideRange, changeSlideRange] = React.useState(-280)

  function scrollLeft() {
    const scrollSection = document.querySelector("#scroll");


    scrollSection!.scrollLeft -= 300;
  }
  function scrollRight() {
    const scrollSection = document.querySelector("#scroll");


    scrollSection!.scrollLeft += 300;
  }

  const next = (range: number) => {
    if (slideRange !== -3920) {
      changeSlideRange(slideRange + range)
    }
  }
  const previous = (range: number) => {
    if (slideRange !== -280) {
      changeSlideRange(slideRange - range)
    }

  }

  return (
    <section className={`section ${styles.sectionDoctor} py-[80px]`} style={{
      direction: direction
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className={`${styles.sectionHeader}`} data-aos="fade-up">
              <h2 className="text-[40px] font-[600]">Book Our Doctor</h2>
              <p className="">Lorem Ipsum is simply dummy text </p>
            </div>
            <div className={`${styles.aboutContent} mb-[30px]`} data-aos="fade-up">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              <p>web page editors now use Lorem Ipsum as their default model text, and a search for &rsquo;lorem ipsum&rsquo; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
              <a>Read More..</a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className={`${styles.doctorSlider} slider ${styles.slickInitialized} ${styles.slickSlider}`} data-aos="fade-up">
              <button className={`${styles.slickPrev} slick-arrow !flex !justify-center !items-center`} aria-label="Previous" type="button" onClick={() => { scrollLeft() }}><RightIcon className="w-[20px] h-[20px] rotate-180" /></button><div className={`${styles.slickList} draggable`}>
                <div className="overflow-x-hidden flex !snap-x	snap-mandatory scroll-smooth transition-all duration-500" style={{ opacity: "1" }}
                  id="scroll"
                >

                  {cardsInfo.map((cardInfo, index) => {

                    return (
                      <CardBody cardInfo={cardInfo} key={index} />
                    )

                  })

                  }
                </div>
              </div>
              <button className={`${styles.slickNext} slick-arrow right-0 !flex !justify-center !items-center`} aria-label="Next" type="button" onClick={() => { scrollRight() }}><RightIcon className="w-[20px] h-[20px] " /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}