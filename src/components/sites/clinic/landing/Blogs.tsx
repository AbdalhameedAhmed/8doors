import styles from "./blogs.module.css"

import BlogImg1 from "assets/blog-01.jpg"
import BlogImg2 from "assets/blog-02.jpg"
import BlogImg3 from "assets/blog-03.jpg"
import BlogImg4 from "assets/blog-04.jpg"
import BlogIcon1 from "assets/doctor-thumb-01.jpg"
import BlogIcon2 from "assets/doctor-thumb-02.jpg"
import BlogIcon3 from "assets/doctor-thumb-03.jpg"
import BlogIcon4 from "assets/doctor-thumb-04.jpg"

type blogTypes = {
  direction?:"ltr" | "rtl"
}
export default function Blogs({direction="ltr"}:blogTypes) {



  return (
    <section className={`section ${styles.sectionBlogs} `} style={{direction:direction}}>
      <div className="container-fluid">

        <div className={`${styles.sectionHeader} text-center`} data-aos="fade-up">
          <h2>Blogs and News</h2>
          <p className={`${styles.subTitle}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-md-6 col-lg-3 col-sm-12">

            <div className={`${styles.blog} ${styles.gridBlog}`}>
              <div className={`${styles.blogImage}`}>
                <a href="blog-details.html"><img className="img-fluid transition duration-300 hover:scale-105" src={BlogImg1.src} alt="Post Image" /></a>
              </div>
              <div className={`${styles.blogContent}`}>
                <ul className={`${styles.entryMeta} ${styles.metaItem}`}>
                  <li>
                    <div className={`${styles.postAuthor}`}>
                      <a href="doctor-profile.html" className="hover:text-[#20c0f3]"><img src={BlogIcon1.src} alt="Post Author" /> <span>Dr. Ruby Perrin</span></a>
                    </div>
                  </li>
                  <li><i className="far fa-clock"></i> 4 Dec 2019</li>
                </ul>
                <h3 className={`${styles.blogTitle}`}><a href="blog-details.html">Doccure – Making your clinic painless visit?</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">

            <div className={`${styles.blog} ${styles.gridBlog}`}>
              <div className={`${styles.blogImage}`}>
                <a href="blog-details.html"><img className="img-fluid transition duration-300 hover:scale-105" src={BlogImg2.src} alt="Post Image" /></a>
              </div>
              <div className={`${styles.blogContent}`}>
                <ul className={`${styles.entryMeta} ${styles.metaItem}`}>
                  <li>
                    <div className={`${styles.postAuthor}`}>
                      <a href="doctor-profile.html" className="hover:text-[#20c0f3]"><img src={BlogIcon2.src} alt="Post Author" /> <span>Dr. Darren Elder</span></a>
                    </div>
                  </li>
                  <li><i className="far fa-clock"></i> 3 Dec 2019</li>
                </ul>
                <h3 className={`${styles.blogTitle}`}><a href="blog-details.html">What are the benefits of Online Doctor Booking?</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">

            <div className={`${styles.blog} ${styles.gridBlog}`}>
              <div className={`${styles.blogImage}`}>
                <a href="blog-details.html"><img className="img-fluid transition duration-300 hover:scale-105" src={BlogImg3.src} alt="Post Image" /></a>
              </div>
              <div className={`${styles.blogContent}`}>
                <ul className={`${styles.entryMeta} ${styles.metaItem}`}>
                  <li>
                    <div className={`${styles.postAuthor}`}>
                      <a href="doctor-profile.html" className="hover:text-[#20c0f3]"><img src={BlogIcon3.src} alt="Post Author" /> <span>Dr. Deborah Angel</span></a>
                    </div>
                  </li>
                  <li><i className="far fa-clock"></i> 3 Dec 2019</li>
                </ul>
                <h3 className={`${styles.blogTitle}`}><a href="blog-details.html">Benefits of consulting with an Online Doctor</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

          </div>
          <div className="col-md-6 col-lg-3 col-sm-12">

            <div className={`${styles.blog} ${styles.gridBlog}`}>
              <div className={`${styles.blogImage}`}>
                <a href="blog-details.html"><img className="img-fluid transition duration-300 hover:scale-105" src={BlogImg4.src} alt="Post Image" /></a>
              </div>
              <div className={`${styles.blogContent}`}>
                <ul className={`${styles.entryMeta} ${styles.metaItem}`}>
                  <li>
                    <div className={`${styles.postAuthor}`}>
                      <a href="doctor-profile.html" className="hover:text-[#20c0f3]"><img src={BlogIcon4.src} alt="Post Author" /> <span>Dr. Sofia Brient</span></a>
                    </div>
                  </li>
                  <li><i className="far fa-clock"></i> 2 Dec 2019</li>
                </ul>
                <h3 className={`${styles.blogTitle}`}><a href="blog-details.html">5 Great reasons to use an Online Doctor</a></h3>
                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>

          </div>
        </div>
        <div className={`${styles.viewAll} text-center`} data-aos="fade-up">
          <a href="blog-list.html" className={`${styles.btn} btn-primary inline-block`}>View All</a>
        </div>
      </div>
    </section>
  )
}