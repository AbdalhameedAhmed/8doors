import React, { FormEvent } from "react"
import { useRouter } from "next/router"
import styles from "./register.module.css"
import FloatingInput from "components/shared/floatingInput/FloatingInput"
import Doctor from "assets/addDoctor.jpg"
import Pharmacist from "assets/addPharmacist.jpg"
import Patient from "assets/registerPatient.jpg"
import { addUserInfo } from "redux/slices/landing/userRegisterInfo"
import { useDispatch } from "react-redux"
import useCustomToast from "hooks/useCustomToast"

export default function Register() {
    let [activeImage, changeActiveImage] = React.useState(Patient.src)

    let handelChangeImage = (imageSrc: string) => {
        changeActiveImage(imageSrc)
        customToast("info", "Test me please", false)
    }
    const customToast = useCustomToast()
    const dispatch = useDispatch()
    const router = useRouter()

    const submitForm = (formInfo: FormEvent<HTMLFormElement>) => {

        const target = formInfo.target as HTMLFormElement;
        const name = (target[0] as HTMLInputElement).value;
        const mobile = (target[1] as HTMLInputElement).value;
        const email = (target[2] as HTMLInputElement).value;

        formInfo.preventDefault()
        dispatch(addUserInfo({ name, mobile, email }));
        router.push("/otp")

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

                                        <form onSubmit={(eve) => { submitForm(eve) }}>
                                            <div className={`${styles.formGroup} ${styles.formFocus} `}>
                                                <FloatingInput placeholder="Name" name="name" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:!border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0" />
                                            </div>
                                            <div className={`${styles.formGroup} ${styles.formFocus}`}>
                                                <FloatingInput placeholder="Mobile Number" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:!border-floating-border" name="mobile" placeholderStyles="!bg-[#F5F6FA] z-0" />

                                            </div>
                                            <div className={`${styles.formGroup} ${styles.formFocus} `}>
                                                <FloatingInput placeholder="Your Email Address" name="email" inputStyle="!p-4 !w-full !text-left focus:!bg-white !bg-[#F5F6FA] focus:!border-floating-border" placeholderStyles="!bg-[#F5F6FA] z-0" />
                                            </div>
                                            <div className={`row ${styles.selectRegisterType}`}>
                                                <div className={`col-4 ${styles.registerOption}`}>

                                                    <input id="default-radio-4" type="radio" value="" onChange={() => { handelChangeImage(Patient.src) }} name="default-radio" defaultChecked className="hidden peer" />
                                                    <label htmlFor="default-radio-4"><span>Patient</span></label>

                                                </div>
                                                <div className={`col-4 ${styles.registerOption}`}>

                                                    <input id="default-radio-6" type="radio" value="" onChange={() => { handelChangeImage(Doctor.src) }} name="default-radio" className="hidden peer" />
                                                    <label htmlFor="default-radio-6"><span> Doctor </span></label>

                                                </div>
                                                <div className={`col-4 ${styles.registerOption}`}>
                                                    <input id="default-radio-5" type="radio" value="" onChange={() => { handelChangeImage(Pharmacist.src) }} name="default-radio" className="hidden peer" />
                                                    <label htmlFor="default-radio-5" className=""><span>Pharmacist</span></label>
                                                </div>
                                            </div>
                                            <div className="text-end">
                                                <a className={`${styles.forgotLink} hover:text-[#09dca4]`} href="login.html">Already have an account?</a>
                                            </div>
                                            <button className={`btn btn-primary w-100 btn-lg ${styles.loginBtn} ${styles.loginBtnPrimary} hover:bg-[#10DEFD] hover:border-[#10DEFD]`} type="submit">Signup</button>
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