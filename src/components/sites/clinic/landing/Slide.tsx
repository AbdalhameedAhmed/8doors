import React, { useEffect } from "react"
import Specialities1 from "assets/specialities-01.png"
import Specialities2 from "assets/specialities-02.png"
import Specialities3 from "assets/specialities-03.png"
import Specialities4 from "assets/specialities-04.png"
import Specialities5 from "assets/specialities-05.png"
import styles from "./slide.module.css"
import classNames from "classnames"




type slideTypes = {
  title?: string;
  subTitle?: string;
  sectionStyle?: string
  fullSpace?: boolean
  direction: "rtl" | "ltr"
}
export default function Slide({ title, subTitle, sectionStyle, fullSpace = false, direction }: slideTypes) {
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
              <div className={`${styles.slickTrack} transition-all duration-500`} style={{ opacity: "1", width: "25000px", transform: `translate3d(${translateRange}px, 0px, 0px)`, direction: direction }}><div className={`${styles.slickSlide} slick-cloned`} data-slick-index="-1" id="" aria-hidden="true" tabIndex={-1}>
                <div>
                  <div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                    <div className={`${styles.speicalityImg}`}>
                      <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i></span>
                    </div>
                    <p>Dentist</p>
                  </div>
                </div>
              </div>
                <div className={`${styles.slickSlide}`} data-slick-index="0" aria-hidden="true" role="tabpanel" id="slick-slide00" tabIndex={-1} aria-describedby="slickSlide-control00">
                  <div>
                    <div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                      <div className={`${styles.speicalityImg}`}>
                        <img src={Specialities1.src} className="img-fluid" alt="Speciality" />
                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.slickSlide} slick-current slick-active`} data-slick-index="1" aria-hidden="false" role="tabpanel" id="slick-slide01" aria-describedby="slickSlide-control01">
                  <div>
                    <div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                      <div className={`${styles.speicalityImg}`}>
                        <img src={Specialities2.src} className="img-fluid" alt="Speciality" />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i></span>
                      </div>
                      <p>Neurology</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.slickSlide}`} data-slick-index="2" aria-hidden="true" role="tabpanel" id="slick-slide02" aria-describedby="slickSlide-control02" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities3.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide}`} data-slick-index="3" aria-hidden="true" role="tabpanel" id="slick-slide03" aria-describedby="slickSlide-control03" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities4.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide}`} data-slick-index="4" aria-hidden="true" role="tabpanel" id="slick-slide04" aria-describedby="slickSlide-control04" tabIndex={-1}><div>
                  <div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                    <div className={`${styles.speicalityImg}`}>
                      <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    </div>
                    <p>Dentist</p>
                  </div>
                </div>
                </div>
                <div className={`${styles.slickSlide} slick-cloned`} data-slick-index="5" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities1.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Urology</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide} slick-cloned`} data-slick-index="6" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities2.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Neurology</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide} slick-cloned`} data-slick-index="7" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities3.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide} slick-cloned`} data-slick-index="8" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities4.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                </div>
                </div>
                <div className={`${styles.slickSlide} slick-cloned`} data-slick-index="9" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.speicalityItem} text-center`} style={{ width: "100%", display: "inline-block" }}>
                  <div className={`${styles.speicalityImg}`}>
                    <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Dentist</p>
                </div>
                </div>
                </div>
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