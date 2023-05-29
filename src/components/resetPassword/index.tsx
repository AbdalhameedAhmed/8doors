import React from "react";

import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { formValdate } from "./formValidate";
import FloatingInput from "components/shared/floatingInput/FloatingInput";

import Link from "next/link";

export default function ResetPassword() {
  const [error, activeError] = React.useState(false)

  const onSubmit = async (values: any) => {
    window.alert("done");

  };

  return (
    <>
      <div className={`self-start w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
        <div className="flex flex-col align-start justify-center mb-[40px] relative">
          <p className="text-primary text-[1.5rem] font-[700]">Reset password</p>
          <p className="text-custom mt-4 text-primary">Already have an account?  <Link href="/login" className="cursor-pointer text-theme-primary hover:underline font-[700]"> Sign in</Link></p>
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
                    type="password"
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
                    type="password"
                    errorActive={error}
                    error={meta.error}
                    {...input}
                  />
                )}
              </Field>
              <button
                type="submit"
                disabled={submitting}
                className="inline-block w-full rounded-lg py-3 px-[22px] bg-[#212B36] dark:bg-white text-white dark:text-black"
                onClick={() => { activeError(true) }}
              >
                Create account
              </button>
              <p className="my-2 text-sm text-white text-center flex justify-center">
                <b>Need Help?</b>
              </p>
            </form>
          )}
        ></Form>



      </div>

    </>
  );
}




