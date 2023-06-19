import React from 'react';
import { Form, Field } from "react-final-form";
import Link from "next/link";

import FloatingInput from 'components/shared/floatingInput/FloatingInput';
import LeftIcon from "assets/left-arrow.svg"
import SecuritySvg from "assets/securityVector.png"

import styles from "./styles.module.css"
import BtnWithLoader from 'components/shared/button/buttonWithLoader';

export default function ForgetPassword() {
  const [error, activeError] = React.useState(false)
  const [loadingState, changeLoadingState] = React.useState(false)



  const onSubmit = () => {
    console.log("done");

  }
  return (

    <div className={`${styles.content} py-[50px] relative `} style={{
      minHeight: "414.5px"
    }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">

            <div className="">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6 col-lg-5 login-left">
                  <img src={SecuritySvg.src} className="img-fluid" alt="Login Banner" />
                </div>
                <div className={`col-md-12 col-lg-6 ${styles.loginRight}`}>
                  <div className={`${styles.loginHeader}`}>
                    <h3>Forgot password</h3>
                  </div>
                  <Form
                    onSubmit={onSubmit}

                    validate={(values): Record<string, string> => {
                      const errors: Record<string, string> = {};

                      if (!values.username) {
                        errors.username = "This field is required";
                      }
                      if (!values.password) {
                        errors.password = "This field is required";
                      }
                      return errors;
                    }}

                    render={({ handleSubmit, submitting }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name="username">
                          {({ input, meta }) => (
                            <>
                              <FloatingInput
                                label=""
                                placeholder={"Username / Email / Phone number"}
                                error={meta.error}
                                inputStyle="focus:border-floating-border"
                                errorActive={error}
                                type="text"
                                {...input}
                              />


                            </>
                          )}
                        </Field>
                        <BtnWithLoader title='submit' showSpinner={loadingState} onClick={() => { activeError(true) }} disabled={submitting} />

                      </form>
                    )}
                  ></Form>
                  <p className="mt-6 text-sm text-primary flex items-center justify-center mt-6  text-right hover:underline">
                    <Link href="/login">
                      <LeftIcon className="w-[7px] h-[7px] inline-block mb-[2px] mr-[2px]" />
                      Return to sign in
                    </Link>
                  </p>

                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

