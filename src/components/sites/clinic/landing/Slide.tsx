import React from "react"
import Specialities1 from "assets/specialities-01.png"
import Specialities2 from "assets/specialities-02.png"
import Specialities3 from "assets/specialities-03.png"
import Specialities4 from "assets/specialities-04.png"
import Specialities5 from "assets/specialities-05.png"
import styles from "./hero.module.css"
import classNames from "classnames"





export default function Slide() {
  let [translateRange,changeTranslateRange] = React.useState(-194)
  let [activeBtn, changeActiveBtn] = React.useState(1)

  const handelSlider = (index:number,range:number) => {
      changeActiveBtn(index)
      changeTranslateRange(range)
  }



  return (
    <section className={`section py-[80px]`}>
      <div className={`container-fluid `}>
        <div className="section-header text-center aos aos-init aos-animate" data-aos="fade-up">
          <h2 className="text-[40px] font-[600] mb-2">Clinic and Specialities</h2>
          <p className="sub-title text-[#393939] mt-[15px] mx-auto leading-[1.42] max-w-[600px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-9 aos aos-init aos-animate" data-aos="fade-up">

            <div className="specialities-slider slider slick-initialized slick-slider slick-dotted"><div className="slick-list draggable">
              <div className="slick-track transition-all duration-500" style={{ opacity: "1", width: "25000px", transform: `translate3d(${translateRange}px, 0px, 0px)` }}><div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabIndex={-1}>
                <div>
                  <div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                    <div className="speicality-img">
                      <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i></span>
                    </div>
                    <p>Dentist</p>
                  </div>
                </div>
              </div>
                <div className="slick-slide" data-slick-index="0" aria-hidden="true" role="tabpanel" id="slick-slide00" tabIndex={-1} aria-describedby="slick-slide-control00">
                  <div>
                    <div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                      <div className="speicality-img">
                        <img src={Specialities1.src} className="img-fluid" alt="Speciality" />
                        <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                      </div>
                      <p>Urology</p>
                    </div>
                  </div>
                </div>
                <div className="slick-slide slick-current slick-active" data-slick-index="1" aria-hidden="false" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01">
                  <div>
                    <div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                      <div className="speicality-img">
                        <img src={Specialities2.src} className="img-fluid" alt="Speciality" />
                        <span>
                          <i className="fa fa-circle" aria-hidden="true"></i></span>
                      </div>
                      <p>Neurology</p>
                    </div>
                  </div>
                </div>
                <div className="slick-slide" data-slick-index="2" aria-hidden="true" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities3.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                </div>
                </div>
                <div className="slick-slide" data-slick-index="3" aria-hidden="true" role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities4.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                </div>
                </div>
                <div className="slick-slide" data-slick-index="4" aria-hidden="true" role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04" tabIndex={-1}><div>
                  <div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                    <div className="speicality-img">
                      <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                      <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    </div>
                    <p>Dentist</p>
                  </div>
                </div>
                </div>
                <div className="slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities1.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Urology</p>
                </div>
                </div>
                </div>
                <div className="slick-slide slick-cloned" data-slick-index="6" id="" aria-hidden="true" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities2.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Neurology</p>
                </div>
                </div>
                </div>
                <div className="slick-slide slick-cloned" data-slick-index="7" id="" aria-hidden="true" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities3.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Orthopedic</p>
                </div>
                </div>
                </div>
                <div className="slick-slide slick-cloned" data-slick-index="8" id="" aria-hidden="true" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities4.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Cardiologist</p>
                </div>
                </div>
                </div>
                <div className="slick-slide slick-cloned" data-slick-index="9" id="" aria-hidden="true" tabIndex={-1}><div><div className="speicality-item text-center" style={{ width: "100%", display: "inline-block" }}>
                  <div className="speicality-img">
                    <img src={Specialities5.src} className="img-fluid" alt="Speciality" />
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                  </div>
                  <p>Dentist</p>
                </div>
                </div>
                </div>
              </div>
            </div>
              <ul className="slick-dots !mt-[40px]" role="tablist">
                <li className="" role="presentation">
                  <button onClick={()=>{handelSlider(1,-194)}} className={classNames({"!bg-[#0de0fe]":activeBtn===1})} type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00"  aria-label="1 of 5" tabIndex={-1}>1
                  </button>
                </li>
                <li role="presentation" className="slick-active">
                  <button onClick={()=>{handelSlider(2,-388)}} className={classNames({"!bg-[#0de0fe]":activeBtn===2})} type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 5" tabIndex={0} aria-selected="true">2</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={()=>{handelSlider(3,-582)}} className={classNames({"!bg-[#0de0fe]":activeBtn===3})} type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 5" tabIndex={-1}>3</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={()=>{handelSlider(4,-776)}} className={classNames({"!bg-[#0de0fe]":activeBtn===4})} type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 5" tabIndex={-1}>4</button>
                </li>
                <li role="presentation" className="">
                  <button onClick={()=>{handelSlider(5,-970)}} className={classNames({"!bg-[#0de0fe]":activeBtn===5})} type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 5" tabIndex={-1}>5</button>
                </li></ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}