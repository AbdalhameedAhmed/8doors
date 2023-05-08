import Slide from "./Slide"
import feature from "assets/feature.png"

import styles from "./availabeFeatures.module.css"

export default function AvailabeFeatures() {
  const slideTitle = "Availabe Features in Our Clinic"
  const slideSubTitle = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."


  return (
    <>
      <section className={`section ${styles.sectionFeatures} `}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 features-img aos aos-init aos-animate" data-aos="fade-up">
              <img src={feature.src} className="img-fluid" alt="Feature" />
            </div>
            <div className="col-md-7">
              <Slide title={slideTitle} subTitle={slideSubTitle} sectionStyle="p-0" fullSpace={true}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}