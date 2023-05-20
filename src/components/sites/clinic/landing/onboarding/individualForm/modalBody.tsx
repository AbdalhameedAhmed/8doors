import SuccessImage from "assets/patientOnBoarding/success-tick.svg"
import styles from "./forms.module.css"

type modalBodyTypes = {
    handelFormBtn?:()=>void
}
export default function ModalBody({handelFormBtn=()=>{}}:modalBodyTypes) {


    return (
        <div className="modal-content id-pop-content rounded-[10px] max-w-[600px]">
            <div className={`modal-header ${styles.modHeader} id-pop-header justify-content-center`}>
                <SuccessImage />
            </div>
            <div className={`modal-body id-pop-body ${styles.modBody} text-black  text-center`}>
                <h2>Your account has been Created</h2>
                <p>Please enter other Details to complete your Profile</p>
            </div>
            <div className={`modal-footer id-pop-footer ${styles.modFooter} text-center`}>
                <div className={`${styles.onboardingBtn}`}>
                    <button onClick={()=>{handelFormBtn()}}>Continue</button>
                </div>
            </div>
        </div>
    )
}