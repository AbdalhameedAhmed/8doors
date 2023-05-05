import React from "react"

import styles from "./bookOurDoctor.module.css"

import RightIcon from "assets/angle-right-solid.svg"
import DoctorImg1 from "assets/doctor-01.jpg"
import DoctorImg2 from "assets/doctor-02.jpg"
import DoctorImg3 from "assets/doctor-03.jpg"
import DoctorImg4 from "assets/doctor-04.jpg"
import DoctorImg5 from "assets/doctor-05.jpg"
import DoctorImg6 from "assets/doctor-06.jpg"
import DoctorImg7 from "assets/doctor-07.jpg"
import DoctorImg8 from "assets/doctor-08.jpg"
import DoctorImg9 from "assets/doctor-09.jpg"
import DoctorImg10 from "assets/doctor-10.jpg"
import DoctorImg11 from "assets/doctor-11.jpg"
import DoctorImg12 from "assets/doctor-12.jpg"
import DoctorImg13 from "assets/doctor-01.jpg"
import DoctorImg14 from "assets/doctor-02.jpg"
import DoctorImg15 from "assets/doctor-03.jpg"
import DoctorImg16 from "assets/doctor-04.jpg"
import Star from "assets/star-solid.svg"





export default function BookOutDoctor() {
  const [slideRange, changeSlideRange] = React.useState(-280)

  function scrollLeft() {
    const scrollSection = document.querySelector("#scroll");
    console.log(scrollSection);

    scrollSection!.scrollLeft -= 300;
  }
  function scrollRight() {
    const scrollSection = document.querySelector("#scroll");
    console.log(scrollSection);

    scrollSection!.scrollLeft += 300;
  }

  const next = (range: number) => {
    if (slideRange !== -3920) {
      changeSlideRange(slideRange + range)
    }
  }
  const previous = (range: number) => {
    if (slideRange !== -280) {
      changeSlideRange(slideRange - range)
    }

  }

  return (
    <section className={`section ${styles.sectionDoctor} py-[80px]`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div className={`${styles.sectionHeader}`} data-aos="fade-up">
              <h2 className="text-[40px] font-[600]">Book Our Doctor</h2>
              <p className="">Lorem Ipsum is simply dummy text </p>
            </div>
            <div className={`${styles.aboutContent} mb-[30px]`} data-aos="fade-up">
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
              <p>web page editors now use Lorem Ipsum as their default model text, and a search for &rsquo;lorem ipsum&rsquo; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes</p>
              <a href="javascript:;">Read More..</a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className={`${styles.doctorSlider} slider ${styles.slickInitialized} ${styles.slickSlider}`} data-aos="fade-up">
              <button className={`${styles.slickPrev} slick-arrow !flex !justify-center !items-center`} aria-label="Previous" type="button" onClick={() => { scrollLeft() }}><RightIcon className="w-[20px] h-[20px] rotate-180" /></button><div className={`${styles.slickList} draggable`}>
                <div className="overflow-x-hidden flex !snap-x	snap-mandatory scroll-smooth transition-all duration-500" style={{ opacity: "1" }}
                  id="scroll"
                >
                  <div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="-1" id="" aria-hidden="true" tabIndex={-1}>
                    <div>
                      <div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                        <div className="doc-img">
                          <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                            <img className="img-fluid" alt="User Image" src={DoctorImg1.src} />
                          </a>
                          <a href="javascript:void(0)" className={`${styles.favBtn}`} tabIndex={-1}>
                            <i className="far fa-bookmark"></i>
                          </a>
                        </div>
                        <div className={`${styles.proContent}`}>
                          <h3 className={`${styles.title}`}>
                            <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Paul Richard</a>
                            <i className="fas fa-check-circle verified"></i>
                          </h3>
                          <p className={`${styles.speciality}`}>MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
                          <div className={`${styles.rating} !flex !items-center`}>
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(49)</span>
                          </div>
                          <ul className={`${styles.availableInfo} !mb-[10px]`}>
                            <li>
                              <i className="fas fa-map-marker-alt"></i> California, USA
                            </li>
                            <li>
                              <i className="far fa-clock"></i> Available on Fri, 22 Mar
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt"></i> $100 - $400
                              <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                            </li>
                          </ul>
                          <div className="row row-sm">
                            <div className="col-6">
                              <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                            </div>
                            <div className="col-6">
                              <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.slickSlide} shrink-0 !snap-center !snap-center`} data-slick-index="0" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg2.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Ruby Perrin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MDS - Periodontology and Oral Implantology, BDS</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300 - $1000
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>

                  <div className={`${styles.slickSlide} shrink-0 !snap-center slick-current !snap-center`} data-slick-index="1" aria-hidden="false">
                    <div>
                      <div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                        <div className="doc-img">
                          <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={0}>
                            <img className="img-fluid" alt="User Image" src={DoctorImg3.src} />
                          </a>
                          <a href="javascript:void(0)" className="fav-btn" tabIndex={0}>
                            <i className="far fa-bookmark"></i>
                          </a>
                        </div>
                        <div className={`${styles.proContent}`}>
                          <h3 className={`${styles.title}`}>
                            <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={0}>Darren Elder</a>
                            <i className="fas fa-check-circle verified"></i>
                          </h3>
                          <p className={`${styles.speciality}`}>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                          <div className={`${styles.rating} !flex !items-center`}>
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                            <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(35)</span>
                          </div>
                          <ul className={`${styles.availableInfo} !mb-[10px]`}>
                            <li>
                              <i className="fas fa-map-marker-alt"></i> Newyork, USA
                            </li>
                            <li>
                              <i className="far fa-clock"></i> Available on Fri, 22 Mar
                            </li>
                            <li>
                              <i className="far fa-money-bill-alt"></i> $50 - $300
                              <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                            </li>
                          </ul>
                          <div className="row row-sm">
                            <div className="col-6">
                              <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={0}>View Profile</a>
                            </div>
                            <div className="col-6">
                              <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={0}>Book Now</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="2" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg4.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Deborah Angel</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - General Medicine, DNB - Cardiology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="3" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg5.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Sofia Brient</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MS - General Surgery, MCh - Urology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(4)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Louisiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $150 - $250
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="4" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg6.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Marvin Campbell</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />
                        <span className="d-inline-block average-rating">(52)</span>

                      </div>
                      <ul>
                        <li>
                          Michigan, USA

                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $700
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="5" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg7.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Katharine Berthold</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />   <span className="d-inline-block average-rating">(52)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $500
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="6" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg8.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Linda Tobin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - General Medicine, DM - Neurology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(43)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $1000
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center`} data-slick-index="7" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg9.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Paul Richard</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(49)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> California, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="8" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg10.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Ruby Perrin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MDS - Periodontology and Oral Implantology, BDS</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Florida, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300 - $1000
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="9" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg11.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Darren Elder</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>BDS, MDS - Oral &amp; Maxillofacial Surgery</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(35)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $300
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="10" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg12.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Deborah Angel</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - General Medicine, DNB - Cardiology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="11" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg13.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Sofia Brient</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MS - General Surgery, MCh - Urology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(4)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Louisiana, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $150 - $250
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="12" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg14.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Marvin Campbell</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - Ophthalmology, DNB - Ophthalmology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(66)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Michigan, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $50 - $700
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="13" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg15.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Katharine Berthold</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MS - Orthopaedics, MBBS, M.Ch - Orthopaedics</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(52)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Texas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $500
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="14" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg16.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Linda Tobin</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - General Medicine, DM - Neurology</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(43)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Kansas, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $1000
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div></div></div><div className={`${styles.slickSlide} shrink-0 !snap-center slick-cloned !snap-center`} data-slick-index="15" id="" aria-hidden="true" tabIndex={-1}><div><div className={`${styles.profileWidget}`} style={{ width: "100%", display: "inline-block" }}>
                    <div className="doc-img">
                      <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>
                        <img className="img-fluid" alt="User Image" src={DoctorImg1.src} />
                      </a>
                      <a href="javascript:void(0)" className="fav-btn" tabIndex={-1}>
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className={`${styles.proContent}`}>
                      <h3 className={`${styles.title}`}>
                        <a href="doctor-profile.html" className="text-[#2E3842] hover:text-[#09dca4]" tabIndex={-1}>Paul Richard</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className={`${styles.speciality}`}>MBBS, MD - Dermatology , Venereology &amp; Lepros</p>
                      <div className={`${styles.rating} !flex !items-center`}>
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#f4c150]" />
                        <Star className="w-[15px] mr-1 h-[15px] inline fill-[#dedfe0]" />                  <span className="d-inline-block average-rating">(49)</span>
                      </div>
                      <ul className={`${styles.availableInfo} !mb-[10px]`}>
                        <li>
                          <i className="fas fa-map-marker-alt"></i> California, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i className="fas fa-info-circle" data-bs-toggle="tooltip" title="" data-bs-original-title="Lorem Ipsum" aria-label="Lorem Ipsum"></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className={`btn ${styles.viewBtn}`} tabIndex={-1}>View Profile</a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className={`btn ${styles.bookBtn}`} tabIndex={-1}>Book Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
              <button className={`${styles.slickNext} slick-arrow right-0 !flex !justify-center !items-center`} aria-label="Next" type="button" onClick={() => { scrollRight() }}><RightIcon className="w-[20px] h-[20px] " /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}