import SearchICon from "assets/search.svg"

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
    

    </>
  )
}