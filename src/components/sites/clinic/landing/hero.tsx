import SearchICon from "assets/search.svg"
import Location from "assets/location-dot-solid.svg"

import styles from "./hero.module.css"
import classNames from "classnames"

type heroTypes = {
  direction?:"ltr" | "rtl" 
}
export default function Hero({direction="ltr"}:heroTypes) {

  return (
    <>
      <section className={`section section-search ${styles.sectionSearch}`} style={{
        direction:direction
      }}>
        <div className={`container-fluid ${styles.containerFluid}`}>
          <div className={`banner-wrapper ${styles.bannerWrapper}`}>
            <div className="banner-header text-center aos aos-init aos-animate" data-aos="fade-up">
              <h1 className="text-[40px] font-[600] mb-2">Search Doctor, Make an Appointment</h1>
              <p>Discover the best doctors, clinic &amp; hospital the city nearest to you.</p>
            </div>

            <div className={`search-box aos aos-init aos-animate ${styles.searchBox} `} data-aos="fade-up">
              <form action="https://doccure.dreamguystech.com/html/template/search.html" className="justify-center">
                <div className={`form-group relative search-location ${styles.searchLocation}`}>
                  <Location className="w-[20px] h-[20px]  absolute top-[23px] left-[10px] -translate-y-1/2 [&_path]:fill-[#ccc] inline" />
                  <input type="text" className={`form-control ${styles.formControl}`} placeholder="Search Location" />
                  <span className="form-text">Based on your Location</span>
                </div>
                <div className={`form-group relative search-info ${styles.searchInfo}`}>
                  <SearchICon className="w-[20px] h-[20px]  absolute top-[23px] left-[10px] -translate-y-1/2 [&_path]:fill-[#ccc] inline" />
                  <input type="text" className={`form-control ${styles.formControl}`} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" />
                  <span className="form-text">Ex : Dental or Sugar Check up etc</span>
                </div>
                <button type="submit" className={classNames(`btn btn-primary search-btn mt-0 ${styles.searchBtn} ${styles.btnPrimary}`,{"mr-3":direction==="rtl"})}>
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