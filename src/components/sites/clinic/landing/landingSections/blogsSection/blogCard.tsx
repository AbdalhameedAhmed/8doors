
import { BlogCardTypes } from "types/landingTypes/blogsSectionTypes"
import styles from "./blogs.module.css"


export default function BlogCard({ direction, blogCardInfo }: BlogCardTypes) {




  return (

    <div className="col-md-6 col-lg-3 col-sm-12">

      <div className={`${styles.blog} ${styles.gridBlog}`}>
        <div className={`${styles.blogImage}`}>
          <a href="blog-details.html">
            <img className="img-fluid transition duration-300 hover:scale-105" src={blogCardInfo.mainImgSrc} alt="Post Image" /></a>
        </div>
        <div className={`${styles.blogContent}`}>
          <ul className={`${styles.entryMeta} ${styles.metaItem}`}>
            <li className={`${direction === "rtl" && "!ml-[15px] !mr-0"}`}>
              <div className={`${styles.postAuthor}`}>
                <a href="doctor-profile.html" className="hover:text-[#20c0f3]">
                  <img src={blogCardInfo.doctorImgSrc} alt="Post Author" className={`${direction === "rtl" && "m-0 !ml-[5px]"}`} />
                  <span>{blogCardInfo.doctorName}</span>
                </a>
              </div>
            </li>
            <li>{blogCardInfo.date}</li>
          </ul>
          <h3 className={`${styles.blogTitle}`}><a href="blog-details.html">{blogCardInfo.blogTitle}</a></h3>
          <p className="mb-0">{blogCardInfo.blogSubTitle}</p>
        </div>
      </div>

    </div>
  )
}