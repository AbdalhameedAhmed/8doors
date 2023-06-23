
import styles from "./bookOurDoctor.module.css"

import Star from "assets/star-solid.svg"
import { cardInfoTypes } from "types/landingTypes/bookOurDoctorTypes"


export default function CardBody({ cardInfo }: cardInfoTypes) {




  return (
    <div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned`} data-slick-index="-1" id="" aria-hidden="true" tabIndex={-1}>
      <div>
        <div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
          <div className="doc-img">
            <a className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
              <img className="img-fluid" alt="User Image" src={cardInfo.imgSrc} />
            </a>
            <a className={`${styles.favBtn}`} tabIndex={-1}>
              <i className="far fa-bookmark"></i>
            </a>
          </div>
          <div className={`${styles.proContent}`}>
            <h3 className={`${styles.title}`}>
              <a className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>{cardInfo.doctorName}</a>
              <i className="fas fa-check-circle verified"></i>
            </h3>
            <p className={`${styles.speciality}`}>{cardInfo.doctorInfo}</p>
            <div className={`${styles.rating} !flex !items-center`}>

              {
                [...Array(5)].map((_, index) => {
                  return (
                    <Star className={`w-[15px] mr-1 h-[15px] inline ${index <= cardInfo.doctorRate-1 ? " fill-[#f4c150]" : "fill-[#dedfe0]"}`} key={index} />
                  )
                })
              }

              <span className="d-inline-block average-rating">({cardInfo.numberOFVoters})</span>
            </div>
            <ul className={`${styles.availableInfo} !mb-[10px]`}>
              <li>
                {cardInfo.location}
              </li>
              <li>
                {cardInfo.availability}
              </li>
              <li>
                {cardInfo.price}
              </li>
            </ul>
            <div className="row row-sm">
              <div className="col-6">
                <a className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
              </div>
              <div className="col-6">
                <a className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}