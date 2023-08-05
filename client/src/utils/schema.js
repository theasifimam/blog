import * as yup from "yup";
import { commonPasswords } from "./data";

export const signupSchema = yup.object().shape({
  fname: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "First name can only contain letters and spaces"),
  lname: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters")
    .matches(/^[a-zA-Z\s]*$/, "Last name can only contain letters and spaces"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "not-fname-or-lname",
      "Password cannot include first or last name",
      function (value) {
        const fname = this.resolve(yup.ref("fname"));
        const lname = this.resolve(yup.ref("lname"));

        if (!value || !fname || !lname) {
          return true;
        }

        const lowerCaseValue = value.toLowerCase();
        const lowerCaseFname = fname.toLowerCase();
        const lowerCaseLname = lname.toLowerCase();

        return (
          lowerCaseValue.indexOf(lowerCaseFname) === -1 &&
          lowerCaseValue.indexOf(lowerCaseLname) === -1
        );
      }
    )
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});
