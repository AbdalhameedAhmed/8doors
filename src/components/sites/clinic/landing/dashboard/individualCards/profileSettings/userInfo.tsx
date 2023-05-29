import styles from "./profileSettings.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import CustomSingleSelector from "components/shared/customSingleSelector"
import { Dispatch, SetStateAction } from "react"



export default function UserInfo() {

  return (
    <div className={`card ${styles.infoCard}`}>
      <div className={`card-body ${styles.infoCardBody}`}>
        <form>
          <div className="row form-row">
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>
                <FloatingInput placeholder="First name" name="firstName" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>
                <FloatingInput placeholder="Last name" name="LastName" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>
            </div>

            <div className="col-12 col-md-6">

              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="Email" name="email" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="Mobile" name="mobile" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className={`${styles.loginOr}`}>
              <span></span>
            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>
                <FloatingInput placeholder="Date of birth" name="date" type={"date"} inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>
                
                <CustomSingleSelector placeholder="Blood Group" options={["A-", "A+", "B-", "B+", "AB-","AB+","O-","O+"]} inputStyle="!p-4 !bg-white !shadow-none !mt-0 !text-[rgba(107,114,128)] h-[58px]"/>

              </div>
            </div>
            <div className={`${styles.loginOr}`}>
              <span></span>
            </div>
            
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="City" name="city" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>
                <FloatingInput placeholder="State" name="state" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />

              </div>

            </div>
            <div className="col-12">
              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="Address" name="address" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="Zip Code" name="zipCode" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>

            </div>
            <div className="col-12 col-md-6">
              <div className={`form-group ${styles.infoGroup}`}>

                <FloatingInput placeholder="Country" name="country" inputStyle="!p-4 !w-full !text-left focus:!bg-white focus:border-floating-border" placeholderStyles="!bg-white peer-focus:!bg-white z-0" />
              </div>
            </div>
          </div>
        </form>
          <div className={`${styles.submitSection} text-right`}>
            <button type="submit" className="btn btn-primary submit-btn">Save Changes</button>
          </div>

      </div>
    </div>
  )
}