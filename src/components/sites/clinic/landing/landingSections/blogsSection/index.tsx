import styles from "./blogs.module.css"

import BlogImg1 from "assets/blog-01.jpg"
import BlogImg2 from "assets/blog-02.jpg"
import BlogImg3 from "assets/blog-03.jpg"
import BlogImg4 from "assets/blog-04.jpg"
import BlogIcon1 from "assets/doctor-thumb-01.jpg"
import BlogIcon2 from "assets/doctor-thumb-02.jpg"
import BlogIcon3 from "assets/doctor-thumb-03.jpg"
import BlogIcon4 from "assets/doctor-thumb-04.jpg"
import BlogCard from "./blogCard"

type blogTypes = {
  direction?: "ltr" | "rtl"
}
export default function Blogs({ direction = "ltr" }: blogTypes) {


  const blogCardsInfo = [

    {
      mainImgSrc: BlogImg1.src,
      doctorImgSrc: BlogIcon1.src,
      doctorName: "Dr. Ruby Perrin",
      blogTitle: "Doccure – Making your clinic painless visit?",
      blogSubTitle: "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
      date: "4 Dec 2019"
    },
    {
      mainImgSrc: BlogImg2.src,
      doctorImgSrc: BlogIcon2.src,
      doctorName: "Dr. Darren Elder",
      blogTitle: "What are the benefits of Online Doctor Booking?",
      blogSubTitle: "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
      date: "3 Dec 2019"
    },
    {
      mainImgSrc: BlogImg3.src,
      doctorImgSrc: BlogIcon3.src,
      doctorName: "Dr. Deborah Angel",
      blogTitle: "Benefits of consulting with an Online Doctor",
      blogSubTitle: "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
      date: "3 Dec 2019"
    },
    {
      mainImgSrc: BlogImg4.src,
      doctorImgSrc: BlogIcon4.src,
      doctorName: "Dr. Sofia Brient",
      blogTitle: "5 Great reasons to use an Online Doctor",
      blogSubTitle: "Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.",
      date: "2 Dec 2019"
    },
  ]
  return (
    <section className={`section ${styles.sectionBlogs} `} style={{ direction: direction }}>
      <div className="container-fluid">

        <div className={`${styles.sectionHeader} text-center`} data-aos="fade-up">
          <h2>Blogs and News</h2>
          <p className={`${styles.subTitle}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="row" data-aos="fade-up">


          {blogCardsInfo.map((blogCardInfo, index) => {
            return (
              <BlogCard direction={direction} blogCardInfo={blogCardInfo} key={index} />
            )
          })}

        </div>
        <div className={`${styles.viewAll} text-center`} data-aos="fade-up">
          <a href="blog-list.html" className={`${styles.btn} btn-primary inline-block`}>View All</a>
        </div>
      </div>
    </section>
  )
}