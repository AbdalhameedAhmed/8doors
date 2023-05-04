import classNames from "classnames";
import Facebook from "assets/facebook-176-svgrepo-com.svg"
import Twitter from "assets/twitter.svg"
import LinkedIn from "assets/linkedin-in.svg"
import Instagram from "assets/square-instagram.svg"
import DoubleRightArrow from "assets/angles-right-solid.svg"
export default function Footer() {


  return (
    <footer className="footer text-white">

      <div className="footer-top aos aos-init aos-animate" data-aos="fade-up">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6">

              <div className="footer-widget footer-about">
                <div className="footer-logo">
                  <p className={classNames("text-logo text-4xl font-bold transition-all duration-300 inline-block")}>8doors</p>
                </div>
                <div className="footer-about-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <div className="social-icon">
                    <ul>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-facebook-f"></i> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-twitter"></i> </a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#" target="_blank"><i className="fab fa-dribbble"></i> </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-3 col-md-6">

              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Patients</h2>
                <ul>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />
                    <a href="search.html" className="!p-0 before:!hidden hover:ml-2">
                      Search for Doctors</a></li>
                  <li className="flex items-center justify-start">

                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />
                    <a href="login.html" className="!p-0 before:!hidden hover:ml-2">
                      Login</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />
                    <a href="register.html" className="!p-0 before:!hidden hover:ml-2">
                      Register</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />
                    <a href="booking.html" className="!p-0 before:!hidden hover:ml-2">
                      Booking</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />
                    <a href="patient-dashboard.html" className="!p-0 before:!hidden hover:ml-2">

                      Patient Dashboard</a></li>
                </ul>
              </div>

            </div>
            <div className="col-lg-3 col-md-6">

              <div className="footer-widget footer-menu">
                <h2 className="footer-title">For Doctors</h2>
                <ul>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />

                    <a href="appointments.html" className="!p-0 before:!hidden hover:ml-2">Appointments</a></li>

                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />

                    <a href="chat.html" className="!p-0 before:!hidden hover:ml-2">Chat</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />

                    <a href="login.html" className="!p-0 before:!hidden hover:ml-2">Login</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />

                    <a href="doctor-register.html" className="!p-0 before:!hidden hover:ml-2">Register</a></li>
                  <li className="flex items-center justify-start">
                    <DoubleRightArrow className="w-[15px] mr-2 fill-white" />

                    <a href="doctor-dashboard.html" className="!p-0 before:!hidden hover:ml-2">Doctor Dashboard</a></li>
                </ul>
              </div>

            </div>
            <div className="col-lg-3 col-md-6">

              <div className="footer-widget footer-contact">
                <h2 className="footer-title">Contact Us</h2>
                <div className="footer-contact-info">
                  <div className="footer-address">
                    <span><i className="fas fa-map-marker-alt"></i></span>
                    <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                  </div>
                  <p>
                    <i className="fas fa-phone-alt"></i>
                    +1 315 369 5943
                  </p>
                  <p className="mb-0">
                    <i className="fas fa-envelope"></i>
                    doccure@example.com
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="container-fluid">

          <div className="copyright">
            <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="copyright-text">
                  <p className="mb-0">© 2022 Doccure. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">

                <div className="copyright-menu">
                  <ul className="policy-menu">
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