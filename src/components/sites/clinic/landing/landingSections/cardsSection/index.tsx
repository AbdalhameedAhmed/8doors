import styles from "./cardsSection.module.css"

import Doctor from "assets/doctor-07.jpg"
import Pharmacy from "assets/img-pharmacy1.jpg"
import Pharmacy2 from "assets/lab-image.jpg"
import CardBody from "./cardBody"

type cardsTypes = {
  direction?: "ltr" | "rtl"
}
export default function CardsSection({ direction = "ltr" }: cardsTypes) {

  const cardsInfo = [
    { imgSrc: Doctor.src, title: "Visit a Doctor", btnTitle: "Book Now" },
    { imgSrc: Pharmacy.src, title: "What are you looking for?", btnTitle: "Find Now" },
    { imgSrc: Pharmacy2.src, title: "Find a Lab", btnTitle: "Coming Soon" },
  ]

  return (
    <section className={`section ${styles.homeTitleSection}`} style={{
      direction: direction
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 m-auto">
            <div className="section-header text-center mb-[40px]" data-aos="fade-up">
              <h2 className="text-[36px] font-[600]"></h2>
            </div>
            <div className="row">

      {
        cardsInfo.map((cardInfo,index)=>{
          return (
            <CardBody cardInfo={cardInfo} key={index}/>
          )
        })
      }      
      
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}