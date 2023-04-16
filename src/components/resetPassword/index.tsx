import React from "react";

import { Form, Field } from "react-final-form";
import classNames from "classnames";

import { CustomInput } from "components/shared";
import CustomBtn from "components/shared/button/CustomBtn";

import Logo from "../../assets/logo.svg";

function index() {
  const onSubmit = async (values: any) => {

    window.alert("done");

  };

  return (
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className="text-[1.57em] text-white text-center">Forgot Password?</h1>
      <h4 className="text-white text-center">Enter your new password.</h4>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: any = {};
          if (!values.password) {
            errors.password = "This field is required";
          }
          if (!values.confirm) {
            errors.confirm = "This field is required";
          } else if (values.password !== values.confirm) {
            errors.confirm = "Must Match";
          }

          return errors;
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="password">
              {({ input, meta }) => (
                <CustomInput
                  placeholder="Enter New Password"
                  label={""}
                  className={classNames(
                    `signin-signout-input w-full rounded-lg `,
                    { "!border-red-500": meta.error && meta.touched }
                  )}
                  type="password"
                  error={meta.error}
                  touched={meta.touched}
                  {...input}
                />
              )}
            </Field>
            <Field name="confirm">
              {({ input, meta }) => (
                <CustomInput
                  placeholder="Confirm new password"
                  label={""}
                  className={classNames(
                    `signin-signout-input w-full rounded-lg `,
                    { "!border-red-500": meta.error && meta.touched }
                  )}
                  type="password"
                  error={meta.error}
                  touched={meta.touched}
                  {...input}
                />
              )}
            </Field>
            <CustomBtn fit={true} type="submit" className="py-4 mt-8 bg-sky-500/100">
              Change password
            </CustomBtn>
            <p className="my-2 text-sm text-white text-center flex justify-center">
              <b>Need Help?</b>
            </p>
          </form>
        )}
      ></Form>
    </div>
  );
}

export default index;
