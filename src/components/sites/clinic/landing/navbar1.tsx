
import styles from "./hero.module.css"
import Bars from "assets/bars.svg"
import classNames from "classnames"

export default function Navbar() {




  return (

    <header className="header">
      <nav className={`navbar navbar-expand-lg ${styles.headerNav}`}>
        <div className="navbar-header">
          <a id="mobile_btn" className={`${styles.mobileBtn}`} >
            <span className={`bar-icon-one ${styles.barIcon}`}>
              <Bars classNames="w-[16px] h-[16px]" />
            </span>
          </a>
          <a href="index.html" className="navbar-brand logo">
            {/* <img src="assets/img/logo.png" className="img-fluid" alt="Logo"/> */}
            <p className={classNames("text-logo text-4xl mb-3 font-bold transition-all duration-300 mr-8")}>8doors</p>

          </a>
        </div>
        <div className={`${styles.mainMenuWrapper}`}>
          <div className={`${styles.menuHeader}`}>
            <a href="index.html" className="menu-logo">
              {/* <img src="assets/img/logo.png" className="img-fluid" alt="Logo"/> */}
            </a>
            <a id="menu_close" className="menu-close" >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className={`${styles.mainNav}`}>
            <li className="has-submenu active">
              <a href="">Home <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="index-two.html">Home 2</a></li>
                <li><a href="index-three.html">Home 3</a></li>
                <li><a href="index-four.html">Home 4</a></li>
                <li><a href="index-five.html">Home 5</a></li>
                <li><a href="index-six.html">Home 6</a></li>
                <li><a href="index-seven.html">Home 7</a></li>
                <li><a href="index-eight.html">Home 8</a></li>
                <li><a href="index-nine.html">Home 9</a></li>
                <li><a href="index-ten.html">Home 10</a></li>
                <li><a href="index-leven.html">Home 11</a></li>
                <li><a href="index-twelve.html">Home 12</a></li>
                <li><a href="index-thirteen.html">Home 13</a></li>
                <li><a href="index-fourteen.html">Home 14</a></li>
                <li><a href="index-fifteen.html">Home 15</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="">Doctors <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                <li><a href="appointments.html">Appointments</a></li>
                <li><a href="schedule-timings.html">Schedule Timing</a></li>
                <li><a href="my-patients.html">Patients List</a></li>
                <li><a href="patient-profile.html">Patients Profile</a></li>
                <li><a href="chat-doctor.html">Chat</a></li>
                <li><a href="invoices.html">Invoices</a></li>
                <li><a href="doctor-profile-settings.html">Profile Settings</a></li>
                <li><a href="reviews.html">Reviews</a></li>
                <li><a href="doctor-register.html">Doctor Register</a></li>
                <li className="has-submenu">
                  <a href="doctor-blog.html">Blog</a>
                  <ul className="submenu">
                    <li><a href="doctor-blog.html">Blog</a></li>
                    <li><a href="blog-details.html">Blog view</a></li>
                    <li><a href="doctor-add-blog.html">Add Blog</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="">Patients <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li className="has-submenu">
                  <a href="#">Doctors</a>
                  <ul className="submenu">
                    <li><a href="map-grid.html">Map Grid</a></li>
                    <li><a href="map-list.html">Map List</a></li>
                    <li><a href="map-list-1.html">Map List 1</a></li>
                  </ul>
                </li>
                <li><a href="search.html">Search Doctor</a></li>
                <li><a href="doctor-profile.html">Doctor Profile</a></li>
                <li><a href="booking.html">Booking</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="booking-success.html">Booking Success</a></li>
                <li><a href="patient-dashboard.html">Patient Dashboard</a></li>
                <li><a href="favourites.html">Favourites</a></li>
                <li><a href="chat.html">Chat</a></li>
                <li><a href="profile-settings.html">Profile Settings</a></li>
                <li><a href="change-password.html">Change Password</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="">Pharmacy <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="pharmacy-index.html">Pharmacy</a></li>
                <li><a href="pharmacy-details.html">Pharmacy Details</a></li>
                <li><a href="pharmacy-search.html">Pharmacy Search</a></li>
                <li><a href="product-all.html">Product</a></li>
                <li><a href="product-description.html">Product Description</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="product-checkout.html">Product Checkout</a></li>
                <li><a href="payment-success.html">Payment Success</a></li>
                <li><a href="pharmacy-register.html">Pharmacy Register</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="">Pages <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="voice-call.html">Voice Call</a></li>
                <li><a href="video-call.html">Video Call</a></li>
                <li><a href="search.html">Search Doctors</a></li>
                <li><a href="calendar.html">Calendar</a></li>
                <li><a href="onboarding-email.html">Doctor Onboarding</a></li>
                <li><a href="patient-email.html">Patient Onboarding</a></li>
                <li><a href="components.html">Components</a></li>
                <li className="has-submenu">
                  <a href="invoices.html">Invoices</a>
                  <ul className="submenu">
                    <li><a href="invoices.html">Invoices</a></li>
                    <li><a href="invoice-view.html">Invoice View</a></li>
                  </ul>
                </li>
                <li><a href="blank-page.html">Starter Page</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact-us.html">Contact Us</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="forgot-password.html">Forgot Password</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="">Blog <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="blog-list.html">Blog List</a></li>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#" target="_blank">Admin <i className="fas fa-chevron-down"></i></a>
              <ul className="submenu">
                <li><a href="admin/index.html" target="_blank">Admin</a></li>
                <li><a href="pharmacy/index.html" target="_blank">Pharmacy Admin</a></li>
              </ul>
            </li>
            <li className="login-link">
              <a href="login.html">Login / Signup</a>
            </li>
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital"></i>
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header"> +1 315 369 5943</p>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link header-login btn-one-light" href="login.html">login / Signup </a>
          </li>
        </ul>
      </nav>
    </header>


  )
}