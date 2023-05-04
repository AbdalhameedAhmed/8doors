import SearchICon from "assets/search.svg"
import Doctor from "assets/doctor-07.jpg"
import Pharmacy from "assets/img-pharmacy1.jpg"
import Pharmacy2 from "assets/lab-image.jpg"
import styles from "./hero.module.css"


export default function Hero() {

  return (
    <>


      <section className={`section section-search ${styles.sectionSearch}`}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <div className={`banner-wrapper ${styles.bannerWrapper}`}>
            <div className="banner-header text-center aos aos-init aos-animate" data-aos="fade-up">
              <h1 className="text-[40px] font-[600] mb-2">Search Doctor, Make an Appointment</h1>
              <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
            </div>

            <div className={`search-box aos aos-init aos-animate ${styles.searchBox} `} data-aos="fade-up">
              <form action="https://doccure.dreamguystech.com/html/template/search.html" className="justify-center">
                <div className={`form-group search-location ${styles.searchLocation}`}>
                  <input type="text" className={`form-control ${styles.formControl}`} placeholder="Search Location" />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className={`form-group search-info ${styles.searchInfo}`}>
                  <input type="text" className={`form-control ${styles.formControl}`} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                  <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                </div>
                <button type="submit" className={`btn btn-primary search-btn mt-0 ${styles.searchBtn} ${styles.btnPrimary}`}>
                  <SearchICon className="w-[20px] h-[20px] my-[8px] [&_path]:fill-white inline" />
                  <span>Search</span></button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <section className={`section ${styles.homeTitleSection}`}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-9 m-auto">
              <div className="section-header text-center mb-[40px]" data-aos="fade-up">
                <h2 className="text-[36px] font-[600]">What are you looking for?</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
                  <div className={`card ${styles.card} group p-0 text-center doctor-book-card ${styles.doctorBookCard}`}>
                    <img src={Doctor.src} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
                    <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1} bg-[rgba(13,13,13,0.33)]"`}>
                      <div className={styles.tileCardContent1Div}>
                        <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
                          textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
                        }}>Visit a Doctor</h3>
                        <a href="search.html" className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light`}>Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3 aos aos-init aos-animate" data-aos="fade-up">
                  <div className={`card ${styles.card} group p-0 text-center doctor-book-card ${styles.doctorBookCard}`}>
                    <img src={Pharmacy.src} alt="" className={`img-fluid ${styles.cardSectionImage} group-hover:!scale-110`} />
                    <div className={`${styles.doctorBookCardContent} ${styles.tileCardContent1 } bg-[rgba(13,13,13,0.33)]  `}>
                      <div className={styles.tileCardContent1Div}>
                        <h3 className={`card-title mb-0 text-[1.5rem]`} style={{
                          textShadow: "2px 4px 3px rgb(0 0 0 / 30%)"
                        }}>Find a Pharmacy</h3>
                        <a href="pharmacy-search.html" className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light`} >Find Now</a>
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
                        <a href="javascript:void(0);" className={`btn ${styles.bookBtn1} px-3 py-2 mt-3 btn-one-light`}>Coming Soon</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}