import { CustomInput } from "components/shared";
import React from "react";
import { Form, Field } from "react-final-form";
import Logo from "../../assets/logo.svg";
import styles from "./style.module.css";
import classNames from "classnames";

function index() {
  const onSubmit = async (values: any) => {
    window.alert("done");
  };
  return (
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className={styles.title}>Forgot Password?</h1>
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
            <button className="mt-8 w-full text-white p-4 bg-sky-500/100 rounded-lg">
              Change password
            </button>
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
