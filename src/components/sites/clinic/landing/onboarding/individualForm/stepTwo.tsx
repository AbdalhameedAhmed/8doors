import React,{Dispatch, SetStateAction } from "react"


import CameraImg from "assets/patientOnBoarding/up-cam.png"
import CameraIcon from "assets/patientOnBoarding/camera-solid.svg"
import UploadIcon from "assets/patientOnBoarding/upload-solid.svg"

import styles from "./forms.module.css"


type stepTwoTypes = {
  activeItem:number
  changeActiveItem:Dispatch<SetStateAction<number>>
}

export default function StepTwo({changeActiveItem,activeItem}:stepTwoTypes) {
  const [activeImg,changeActiveImg] = React.useState(CameraImg.src)

  const handelChangeForm = ()=>{
    changeActiveItem(activeItem+1)
  }


  return (
    <div className={`${styles.onboardingContentBox}`}>
      <div className={`${styles.onboardingTitle}`}>
        <h2>Upload Profile Picture</h2>
        <h6>Add a profile photo</h6>
      </div>
      <div className="onboarding-content passcode-wrap mail-box">
        <div className={`${styles.onboardingContents}`}>
          <div className="row">
            <div className="col-lg-12">
              <div className={`${styles.formGroup} ${styles.onboardingContents}`}>
                <div className={`${styles.uploadPic} ${styles.patientPhotoUpload}`}>
                  <img src={activeImg} alt="img" id="blah" />
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className={`${styles.uploadPatientPic}`}>
                <div className={`${styles.uploadPatientBtn}`}>
                  <a className={`${styles.picUploadBtn}`}><UploadIcon/>Upload images</a>
                  <input type="file" id="imgInp" onChange={(ev)=>{changeActiveImg(ev.target.value)}}/>
                </div>
                <div>
                  <a className={`${styles.picUploadBtn}`}><CameraIcon/>Take a photo</a>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              {/* <div className="uploads-report">
                <a href="#" className="text-success"><i className="fas fa-check-double me-2"></i>Uploaded Successfully</a>
                <a href="#" className="text-danger"><i className="far fa-times-circle me-2"></i>Upload Failed</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className={`${styles.onboardingBtn} ${styles.PersonalizeBtn}`}>
          <button onClick={handelChangeForm}>Continue</button>
        </div>
      </div>
    </div>
  )
}