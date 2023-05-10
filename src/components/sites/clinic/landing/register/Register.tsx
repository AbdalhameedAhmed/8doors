import React from "react"
import styles from "./register.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import Doctor from "assets/addDoctor.jpg"
import Pharmacist from "assets/addPharmacist.jpg"
import Patient from "assets/addPatient.jpg"

export default function Register() {
    let [activeImage, changeActiveImage] = React.useState(Patient.src)

    let handelChangeImage = (imageSrc: string) => {
        changeActiveImage(imageSrc)
    }


    return (
        <>
            <div className={`${styles.content} relative `} style={{
                minHeight: "414.5px"
            }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">

                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img src={activeImage} className="img-fluid" alt="Login Banner" />
                                    </div>
                                    <div className={`col-md-12 col-lg-6 ${styles.loginRight}`}>
                                        <div className={`${styles.loginHeader}`}>
                                            <h3>Register</h3>
                                        </div>

                                        <form action="https://doccure.dreamguystech.com/html/template/onboarding-email.html">
                                            <div className={`${styles.formGroup} ${styles.formFocus} `}>
                                                <FloatingInput placeholder="Name" name="name" inputStyle="!p-2" placeholderStyles="bg-white z-0" />
                                            </div>
                                            <div className={`${styles.formGroup} ${styles.formFocus}`}>
                                                <FloatingInput placeholder="Mobile Number" name="mobile" inputStyle="!p-2" placeholderStyles="bg-white z-0" />

                                            </div>
                                            <div className={`${styles.formGroup} ${styles.formFocus} `}>
                                                <FloatingInput placeholder="Your Email Address" name="email" inputStyle="!p-2" placeholderStyles="bg-white z-0" />
                                            </div>
                                            <div className="flex flex-wrap gap-x-4 gap-x-2 mb-[1.25rem]">
                                                <div className="flex items-center">
                                                    <input id="default-radio-2" type="radio" value="" onChange={() => { handelChangeImage(Patient.src) }} name="default-radio" defaultChecked className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Patient</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="default-radio-1" type="radio" value="" onChange={() => { handelChangeImage(Doctor.src) }} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Doctor</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input id="default-radio-3" type="radio" value="" onChange={() => { handelChangeImage(Pharmacist.src) }} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="default-radio-3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">pharmacist</label>
                                                </div>

                                            </div>
                                            <div className="text-end">
                                                <a className={`${styles.forgotLink} hover:text-[#09dca4]`} href="login.html">Already have an account?</a>
                                            </div>
                                            <button className={`btn btn-primary w-100 btn-lg ${styles.loginBtn} ${styles.loginBtnPrimary} hover:bg-[#10DEFD] hover:border-[#10DEFD]`} type="submit">Signup</button>
                                            <div className={`${styles.loginOr}`}>
                                                <span></span>
                                                <span>or</span>
                                            </div>
                                            <div className="row form-row social-login">
                                                <div className="col-6">
                                                    <a href="#" className={`btn ${styles.btnFacebook} w-100 hover:text-white`}><i className="fab fa-facebook-f me-1"></i> Login</a>
                                                </div>
                                                <div className="col-6">
                                                    <a href="#" className={`btn ${styles.btnGoogle} w-100 hover:text-white`}><i className="fab fa-google me-1"></i> Login</a>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}