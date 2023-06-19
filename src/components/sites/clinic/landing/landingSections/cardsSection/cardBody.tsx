import { cardInfoTypes } from "types/landingTypes/cardsSectionTypes"
import styles from "./cardsSection.module.css"

export default function CardBody({ cardInfo }: cardInfoTypes) {


  return (
    <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
      <div className={`card ${styles.card} group p-0 text-center ${styles.doctorBookCard}`}>
        <img src={cardInfo.imgSrc} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
        <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1} bg-[rgba(13,13,13,0.33)]"`}>
          <div className={styles.tileCardContent1Div}>
            <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
              textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
            }}>{cardInfo.title}</h3>
            <a className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light w-auto`}>{cardInfo.btnTitle}</a>
          </div>
        </div>
      </div>
    </div>
  )
}