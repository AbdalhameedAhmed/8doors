import React from 'react';
import { Form, Field } from "react-final-form";
import Link from "next/link";

import { formValdate } from "./formValidate"

import FloatingInput from 'components/shared/floatingInput/FloatingPassword';
import SecuritySvg from "assets/securityVector.png"
import LeftIcon from "assets/left-arrow.svg"


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
                    <h3>Reset Password</h3>
                  </div>
                  <Form
                    onSubmit={onSubmit}
                    validate={(values): Record<string, string> => formValdate(values)}
                    render={({ handleSubmit, submitting }) => (
                      <form onSubmit={handleSubmit}>
                        <Field name="password">
                          {({ input, meta }) => (
                            <FloatingInput
                              placeholder="New password"
                              inputStyle="focus:border-floating-border"
                              errorActive={error}
                              error={meta.error}
                              {...input}
                            />
                          )}
                        </Field>
                        <Field name="confirm">
                          {({ input, meta }) => (
                            <FloatingInput
                              placeholder="Confirm new password"
                              inputStyle="focus:border-floating-border"
                              errorActive={error}
                              error={meta.error}
                              {...input}
                            />
                          )}
                        </Field>
                        <BtnWithLoader showSpinner={loadingState} title='Reset Password' onClick={() => { activeError(true) }} disabled={submitting} />

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

