import styles from "./cardsSection.module.css"

import Doctor from "assets/doctor-07.jpg"
import Pharmacy from "assets/img-pharmacy1.jpg"
import Pharmacy2 from "assets/lab-image.jpg"

type cardsTypes = {
  direction?: "ltr" | "rtl"
}
export default function CardsSection({ direction = "ltr" }: cardsTypes) {


  return (
    <section className={`section ${styles.homeTitleSection}`} style={{
      direction: direction
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 m-auto">
            <div className="section-header text-center mb-[40px]" data-aos="fade-up">
              <h2 className="text-[36px] font-[600]">What are you looking for?</h2>
            </div>
            <div className="row">
              <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
                <div className={`card ${styles.card} group p-0 text-center ${styles.doctorBookCard}`}>
                  <img src={Doctor.src} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
                  <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1} bg-[rgba(13,13,13,0.33)]"`}>
                    <div className={styles.tileCardContent1Div}>
                      <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
                        textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
                      }}>Visit a Doctor</h3>
                      <a className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light w-auto`}>Book Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
                <div className={`card ${styles.card} group p-0 text-center doctor-book-card ${styles.doctorBookCard}`}>
                  <img src={Pharmacy.src} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
                  <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1} bg-[rgba(13,13,13,0.33)]  `}>
                    <div className={styles.tileCardContent1Div}>
                      <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
                        textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
                      }}>Find a Pharmacy</h3>
                      <a className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light w-auto`} >Find Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
                <div className={`card ${styles.card} p-0 group text-center doctor-book-card ${styles.doctorBookCard}`}>
                  <img src={Pharmacy2.src} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
                  <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1} bg-[rgba(13,13,13,0.33)]`}>
                    <div className={styles.tileCardContent1Div}>
                      <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
                        textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
                      }}>Find a Lab</h3>
                      <a className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light w-auto`}>Coming Soon</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}