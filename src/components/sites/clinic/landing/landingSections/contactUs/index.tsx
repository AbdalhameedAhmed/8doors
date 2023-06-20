import styles from "./contactUs.module.css"
import doctor from "assets/news-img.png"
import classNames from "classnames"

type contactTypes = {
  direction?:"ltr" | "rtl"
} 
export default function ContactUs({direction="ltr"}:contactTypes) {


  return (
    <section className={`${styles.newsLetterBg}`} style={{
      direction:direction
    }}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.newsBg}`}>
          <div className="row">
            <div className={`col-lg-8 col-md-12 ${styles.newsLeft}`} data-aos="fade-up">
              <div>
                <h2>Grab Our Newsletter</h2>
                <p>To receive latest offers and discounts from the shop.</p>
              </div>
              <div>
                <form>
                  <div className={`${styles.formGroup}`}>
                    <input type="text" className={classNames(`${styles.formControl} mr-2`,{"ml-2":direction==="rtl"})} placeholder="Enter Your Email Address" />
                    <button type="submit" className={`${styles.btn}`}>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className={`col-lg-4 col-md-12 aos ${styles.newsImgContainer} `} data-aos="fade-up">
              <div className={`${styles.newsImg}`}>
                <img src={doctor.src} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}