import * as yup from "yup";

// Define the validation schema using yup
export const createUserSchema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password should be at least 6 characters long"),
  cpassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
