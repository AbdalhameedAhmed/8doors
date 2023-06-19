
import styles from "./footer.module.css"
import classNames from "classnames";
import Facebook from "assets/facebook-176-svgrepo-com.svg"
import Twitter from "assets/twitter.svg"
import LinkedIn from "assets/linkedin-in.svg"
import Instagram from "assets/square-instagram.svg"
import Github from "assets/github.svg"
import DoubleRightArrow from "assets/angles-right-solid.svg"
import Location from "assets/location-dot-solid.svg"
import Phone from "assets/phone-solid.svg"
import Mail from "assets/envelope-regular.svg"
import FooterSubMenu from "./footerSubMenu";
type footerTypes = {
  direction?: "ltr" | "rtl"
}
export default function Footer({ direction = "ltr" }: footerTypes) {

  const items1 = [
    { title: "Search for Doctors" },
    { title: "Login" },
    { title: "Register" },
    { title: "Booking" },
    { title: "Patient Dashboard" },
  ]

  const items2 = [
    { title: "Appointments" },
    { title: "Chat" },
    { title: "Login" },
    { title: "Register" },
    { title: "octor Dashboard" },
  ]
  return (
    <footer className={`${styles.footer} text-white`} style={{
      direction
    }}>

      <div className={`${styles.footerTop}`} data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">

              <div className={`${styles.footerWidget} ${styles.footerAbout}`}>
                <div className={`${styles.footerLogo}`}>
                  <p className={classNames("text-logo text-4xl font-bold transition-all duration-300 inline-block")}>8doors</p>
                </div>
                <div className={`${styles.footerAboutContent}`}>
                  <p className="mb-6 w-3/4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <div className={`${styles.socialIcon}`}>
                    <ul>
                      <li className={`${direction === "rtl" && "!ml-[15px]"}`}>
                        <a href="#" target="_blank"><Facebook className="w-[20px] h-[20px] [&_path]:fill-white" /> </a>
                      </li>
                      <li className={`${direction === "rtl" && "!ml-[15px]"}`}>
                        <a href="#" target="_blank"><Twitter className="w-[20px] h-[20px] [&_path]:fill-white" /> </a>
                      </li>
                      <li className={`${direction === "rtl" && "!ml-[15px]"}`}>
                        <a href="#" target="_blank"><LinkedIn className="w-[20px] h-[20px] [&_path]:fill-white" /></a>
                      </li>
                      <li className={`${direction === "rtl" && "!ml-[15px]"}`}>
                        <a href="#" target="_blank"><Instagram className="w-[20px] h-[20px] [&_path]:fill-white" /></a>
                      </li>
                      <li className={`${direction === "rtl" && "!ml-[15px]"}`}>
                        <a href="#" target="_blank"><Github className="w-[20px] h-[20px] [&_path]:fill-white" /> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            
            <FooterSubMenu items={items1} direction={direction} menuTitle="For Patients" />

            <FooterSubMenu items={items2} direction={direction} menuTitle="For Doctors" />

            <div className="col-lg-3 col-md-6">

              <div className={`${styles.footerWidget} footer-contact`}>
                <h2 className={`${styles.footerTitle}`}>Contact Us</h2>
                <div className={`${styles.footerContactInfo}`}>
                  <div className={`${styles.footerAddress} flex items-center gap-2 mb-[15px]`}>
                    <Location className="w-[20px] h-[20px] fill-white" />
                    <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <div className={`${styles.footerAddress} flex items-center gap-2 mb-[15px]`}>
                    <Phone className="w-[15px] h-[15px] fill-white" />
                    <p>
                      +1 315 369 5943
                    </p>
                  </div>
                  <div className={`${styles.footerAddress} flex items-center gap-2 mb-[15px]`}>
                    <Mail className="w-[18px] h-[18px] fill-white" />
                    <p className="mb-0">
                      doccure@example.com
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className={`${styles.footerBottom}`}>
        <div className="container-fluid">

          <div className="copyright py-[30px]">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className={`${styles.copyrightText}`}>
                  <p className="mb-0">© 2022 Doccure. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">

                <div className="copyright-menu">
                  <ul className={`${styles.policyMenu} ${direction === "rtl" && "!text-left"}`}>
                    <li><a href="term-condition.html">Terms and Conditions</a></li>
                    <li><a href="privacy-policy.html">Policy</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  )
}