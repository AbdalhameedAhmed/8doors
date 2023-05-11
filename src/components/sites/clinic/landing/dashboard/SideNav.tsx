import React from "react"

import styles from "./dashboard.module.css"

import DoctorImage from "assets/doctor-thumb-02.jpg"
import ColumnsIcon from "assets/doctorDashboard/table-columns-solid.svg"
import CalendarIcon from "assets/calendar-check-solid.svg"
import UserInjuredIcon from "assets/doctorDashboard/user-injured-solid.svg"
import HourGlassIcon from "assets/doctorDashboard/hourglass-start-solid.svg"
import ClockIcon from "assets/doctorDashboard/clock-solid.svg"
import FileIcon from "assets/doctorDashboard/file-invoice-solid.svg"
import FileDollarIcon from "assets/doctorDashboard/file-invoice-dollar-solid.svg"
import StartIcon from "assets/star-solid.svg"
import MessageIcon from "assets/doctorDashboard/comments-solid.svg"
import USerGearIcon from "assets/doctorDashboard/user-gear-solid.svg"
import ShareICon from "assets/doctorDashboard/share-nodes-solid.svg"
import LockIcon from "assets/doctorDashboard/lock-solid.svg"
import Logout from "assets/doctorDashboard/right-from-bracket-solid.svg"
import classNames from "classnames"

export default function SideNav() {

  const [prevScrollPosition, setPrevScrollPosition] = React.useState(0);
  const [scrollDirection, changeScrollDirection] = React.useState("down")



  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      const scrollDirection = currentScrollPosition > prevScrollPosition ? 'down' : 'up';
      setPrevScrollPosition(currentScrollPosition);
      changeScrollDirection(scrollDirection)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);


  return (
    <div className={classNames("col-md-5 col-lg-4 col-xl-3 !sticky top-[1.5rem] transition-all duration-300", { "-top-[2.5rem]": scrollDirection === "down" })} style={{ overflow: "visible", boxSizing: "border-box", minHeight: "1px" }}>
      <div style={{ paddingTop: "0px", paddingBottom: "1px", position: "static", transform: "none", top: " 0px", left: "30px" }}><div className={`${styles.profileSidebar}`}>
        <div className={`${styles.widgetProfile}`}>
          <div className={`${styles.profileInfoWidget}`}>
            <a href="#" className={`${styles.bookingDocImg}`}>
              <img src={DoctorImage.src} alt="User Image" />
            </a>
            <div className={`${styles.profileDetInfo}`}>
              <h3>Dr. Darren Elder</h3>
              <div className={`${styles.patientDetails}`}>
                <h5 className="mb-0">BDS, MDS - Oral &amp; Maxillofacial Surgery</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className={`${styles.dashboardMenu}`}>
            <ul>
              <li className={`${styles.active}`}>
                <a href="doctor-dashboard.html">
                  <ColumnsIcon />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="appointments.html">
                  <CalendarIcon />
                  <span>Appointments</span>
                </a>
              </li>
              <li>
                <a href="my-patients.html">
                  <UserInjuredIcon />
                  <span>My Patients</span>
                </a>
              </li>
              <li>
                <a href="schedule-timings.html">
                  <HourGlassIcon />
                  <span>Schedule Timings</span>
                </a>
              </li>
              <li>
                <a href="available-timings.html">
                  <ClockIcon />
                  <span>Available Timings</span>
                </a>
              </li>
              <li>
                <a href="invoices.html">
                  <FileIcon />
                  <span>Invoices</span>
                </a>
              </li>
              <li>
                <a href="accounts.html">
                  <FileDollarIcon />
                  <span>Accounts</span>
                </a>
              </li>
              <li>
                <a href="reviews.html">
                  <StartIcon />
                  <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="chat-doctor.html">
                  <MessageIcon />
                  <span>Message</span>
                  <small className={`${styles.unreadMsg}`}>23</small>
                </a>
              </li>
              <li>
                <a href="doctor-profile-settings.html">
                  <USerGearIcon />
                  <span>Profile Settings</span>
                </a>
              </li>
              <li>
                <a href="social-media.html">
                  <ShareICon />
                  <span>Social Media</span>
                </a>
              </li>
              <li>
                <a href="doctor-change-password.html">
                  <LockIcon />
                  <span>Change Password</span>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <Logout />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
        <div className="resize-sensor" style={{ position: "absolute", inset: "0px", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
          <div className="resize-sensor-expand" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", transition: "all 0s ease 0s", width: "1378px", height: "958px" }}>
            </div>
          </div>
          <div className="resize-sensor-shrink" style={{ position: "absolute", left: "0", top: "0", right: "0", bottom: "0", overflow: "hidden", zIndex: "-1", visibility: "hidden" }}>
            <div style={{ position: "absolute", left: "0", top: "0", transition: " 0s", width: "200%", height: "200%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}