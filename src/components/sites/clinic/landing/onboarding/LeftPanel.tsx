import React from "react"
import styles from "./onBoarding.module.css"
import SideImg from "assets/doctorOnBoarding/onb-slide-img.png"
import Image from "next/image"
import { useEffect } from "react";
type LeftPanelTypes = {
  direction: "ltr" | "rtl"
}
export default function LeftPanel({ direction }: LeftPanelTypes) {
  const [preScrollNum, changePreScrollNum] = React.useState<null | number>(null)
  const [span, activeSpan] = React.useState(0)
  function scrollLeft() {
    const scrollSection = document.querySelector("#sideScroll");

    if ((scrollSection as HTMLElement).scrollLeft > 500 || (scrollSection as HTMLElement).scrollLeft < -500) {
      scrollSection!.scrollLeft = 0;
      changePreScrollNum(null)
      activeSpan(0)

    } else {
      direction === "ltr" ? scrollSection!.scrollLeft += 300 : scrollSection!.scrollLeft -= 300;
      activeSpan(span + 1)
    }
    changePreScrollNum((scrollSection as HTMLElement).scrollLeft)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollLeft()
    }, 5000)

    return () => clearInterval(intervalId);

  }, [preScrollNum, direction])


  return (
    <div className={`${styles.leftPanel} !overflow-hidden !flex`}>
      <div className="text-center">
        <a href="index.html">
          <p className="text-logo text-4xl font-bold transition-all pb-2 duration-300">8doors</p>
        </a>
      </div>
      <div className={`${styles.onboardImg}`}>
        <img src="/onb-slide-img.png" width={500} height={650} alt="left side image" />
      </div>
      <div>

        <div className="text-center overflow-x-hidden flex !snap-x max-w-[250px]snap-mandatory scroll-smooth transition-all duration-500 mb-4" id="sideScroll">

          <div className="shrink-0 !snap-center max-w-full">

            <h1 className="text-white text-[21px] font-[600] mb-2">Welcome to 8doors</h1>
            <p className="text-white text-[13px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="shrink-0 !snap-center max-w-full">

            <h1 className="text-white text-[21px] font-[600] mb-2">Welcome to 8doors</h1>
            <p className="text-white text-[13px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="shrink-0 !snap-center max-w-full">

            <h1 className="text-white text-[21px] font-[600] mb-2">Welcome to 8doors</h1>
            <p className="text-white text-[13px] font-[400]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

        </div>
        <div className={`${styles.owlDots}`}><button role="button" className={`${styles.owlDot} ${span === 0 && styles.active}`}><span></span></button><button role="button" className={`${styles.owlDot} ${span === 1 && styles.active}`}><span></span></button><button role="button" className={`${styles.owlDot} ${span === 2 && styles.active}`}><span></span></button></div>
      </div>
    </div>
  )
}