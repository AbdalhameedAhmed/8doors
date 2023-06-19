import Slide from "../slideSection/Slide"
import feature from "assets/feature.png"
import Specialities1 from "assets/specialities-01.png"
import Specialities2 from "assets/specialities-02.png"
import Specialities3 from "assets/specialities-03.png"
import Specialities4 from "assets/specialities-04.png"
import Specialities5 from "assets/specialities-05.png"

import styles from "./availabeFeatures.module.css"

type availabeFeaturesTypes = {
  direction: "rtl" | "ltr"
}
export default function AvailabeFeatures({ direction }: availabeFeaturesTypes) {
  const slideTitle = "Availabe Features in Our Clinic"
  const slideSubTitle = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  const sliderItems = [
    { imgSrc: Specialities5.src, title: "Dentist" },
    { imgSrc: Specialities1.src, title: "Urology" },
    { imgSrc: Specialities2.src, title: "Neurology" },
    { imgSrc: Specialities3.src, title: "Orthopedic" },
    { imgSrc: Specialities4.src, title: "Cardiologist" },
    { imgSrc: Specialities5.src, title: "Dentist" },
    { imgSrc: Specialities1.src, title: "Urology" },
    { imgSrc: Specialities2.src, title: "Neurology" },
    { imgSrc: Specialities3.src, title: "Orthopedic" },
    { imgSrc: Specialities4.src, title: "Cardiologist" },
    { imgSrc: Specialities5.src, title: "Dentist" },
  ]

  return (
    <>
      <section className={`section ${styles.sectionFeatures} `}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 features-img aos aos-init aos-animate" data-aos="fade-up">
              <img src={feature.src} className="img-fluid" alt="Feature" />
            </div>
            <div className="col-md-7">
              <Slide title={slideTitle} direction={direction} subTitle={slideSubTitle} items={sliderItems} sectionStyle="p-0" fullSpace={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}