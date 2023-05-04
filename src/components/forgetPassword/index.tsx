import React from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Field } from "react-final-form";
import Link from "next/link";

import FloatingInput from 'components/shared/floatingInput/FloatingInput';
import { CustomInput } from 'components/shared';
import Lock from "assets/lock-security-open-svgrepo-com.svg"
import LeftIcon from "assets/left-arrow.svg"


function Index() {
  const { t } = useTranslation('common');
  const [error, activeError] = React.useState(false)


  const onSubmit = () => {
    console.log("done");

  }
  return (
    <div className={`self-start w-full px-[64px] xs:!w-[448px] xs:px-0 sm:!w-[448px] sm:px-0 md:!w-[448px] md:px-0`}>
      <div className="flex flex-col items-center justify-center relative">
        <Lock className="w-[100px] h-[100px] mb-[40px]" />
        <p className="text-primary text-[1.5rem] font-[700]">Forgot your password?</p>
        <p className="text-custom mt-4 px-8 text-center text-gray mb-[40px]">Please enter the email address associated with your account and We will email you a link to reset your password.</p>
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
                    placeholder={"Email"}
                    error={meta.error}
                    errorActive={error}
                    type="text"
                    {...input}
                  />


                </>
              )}
            </Field>
            <button

              type="submit"
              disabled={submitting}
              className="inline-block w-full mt-6 rounded-lg py-3 px-[22px] bg-[#212B36] dark:bg-white text-white dark:text-black"
              onClick={() => { activeError(true) }}
            >
              {t("signin.login")}
            </button>
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
  );
}

export default Index;
