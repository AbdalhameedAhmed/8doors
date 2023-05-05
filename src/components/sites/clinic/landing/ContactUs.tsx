import styles from "./contactUs.module.css"
import doctor from "assets/news-img.png"

export default function ContactUs() {


  return (
    <section className={`${styles.newsLetterBg}`}>
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
                    <input type="text" className={`${styles.formControl} me-2`} placeholder="Enter Your Email Address" />
                    <button type="submit" className={`${styles.btn}`}>Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 aos aos-init aos-animate" data-aos="fade-up">
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