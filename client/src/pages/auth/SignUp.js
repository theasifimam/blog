import React, { useEffect, useState } from "react";
import "../../styles/Signup.css";
import Slider from "../../components/UI/Slider";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../utils/schema";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../../redux/slice/auth/signupSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const { signup } = useSelector((state) => state);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    redirectFlag && signup.success && navigate("/verify-otp");
  }, [signup.success]);

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    useFormik({
      initialValues: {
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
        role: "user",
      },
      validationSchema: signupSchema,
      onSubmit(values, action) {
        dispatch(signupAction(values));
        setRedirectFlag(true);
      },
    });
  return (
    <>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Join Us Now!</h1>
          {/* firstName */}
          <div className="half input-field">
            <label htmlFor="fname">
              First Name<span>*</span>
            </label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              tabIndex="0"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <div className="error-msg">{errors.fname}</div>
            ) : null}
          </div>

          {/* lastName */}
          <div className="half input-field">
            <label htmlFor="lname">
              Last Name<span>*</span>
            </label>
            <input
              type="text"
              name="lname"
              id="lname"
              tabIndex="1"
              placeholder="Last Name"
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <div className="error-msg">{errors.lname}</div>
            ) : null}
          </div>
          {/* mobileNumber */}
          {/* <div className="input-field full">
            <label htmlFor="mnumber">Mobile Number</label>
            <input
              type="text"
              name="mnumber"
              id="mnumber"
              placeholder="Mobile Number"
              tabIndex="3"
              value={values.mnumber}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div> */}

          {/* Email */}
          <div className="input-field full">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              tabIndex="4"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <div className="error-msg">{errors.email}</div>
            ) : null}
          </div>

          {/* dob */}
          {/* <div className="input-field full">
            <label htmlFor="dob">
              Date of Birth<span>*</span>
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              placeholder="Date of Birth"
              tabIndex="5"
              value={values.dob}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div> */}

          {/* gender */}
          {/* <div className="input-field full">
            <label htmlFor="dob">
              Gender<span>*</span>
            </label>
            <select
              name="gender"
              id="gender"
              tabIndex="6"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="male">Male</option>
              <option value="femala">Female</option>
              <option value="other">Other</option>
            </select>
          </div> */}

          <div className="input-field full">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              tabIndex="7"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <div className="error-msg">{errors.password}</div>
            ) : null}
          </div>

          <div className="input-field full">
            <label htmlFor="cpassword">
              Confirm Password<span>*</span>
            </label>
            <input
              type="text"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              tabIndex="8"
              value={values.cpassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.cpassword && touched.cpassword ? (
              <div className="error-msg">{errors.cpassword}</div>
            ) : null}
          </div>

          <button type="submit" className="primary-btn" tabIndex="9">
            Sign Up
          </button>
          <span className="bottom-text">
            Already, Signed Up?{" "}
            <Link tabIndex="10" to="/login">
              Log in Now!
            </Link>
          </span>
        </form>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default SignUp;
