import React, { useEffect, useState } from "react";
import "../../styles/Signup.css";
import Slider from "../../components/UI/Slider";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTPAction } from "../../redux/slice/auth/verifyOTPSlice";
import { getLoggedInUser } from "../../utils/utils";

const VerifyOTP = () => {
  const dispatch = useDispatch();
  const verifyOTP = useSelector((state) => state.verifyOTP);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();
  const username = getLoggedInUser()?.username;
  useEffect(() => {
    redirectFlag && verifyOTP.success && navigate(`/${username}`);
  }, [verifyOTP.success]);

  const { handleChange, handleBlur, handleSubmit, errors, touched, values } =
    useFormik({
      initialValues: { otpCode: "", username: username },
      onSubmit(values) {
        console.log(values);

        dispatch(verifyOTPAction(values));
        setRedirectFlag(true);
      },
    });
  return (
    <>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Welcome to SocialBlog</h1>
          {/* Email */}
          <div className="input-field full">
            <label htmlFor="otpCode">
              Enter OTP<span>*</span>
            </label>
            <input
              type="text"
              name="otpCode"
              id="otpCode"
              placeholder="OTP"
              tabIndex="1"
              value={values.otpCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <button type="submit" className="primary-btn">
            Verify
          </button>
          <span className="bottom-text">
            Don't have an account? <Link to="/signup">Sign Up Now!</Link>
          </span>
        </form>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default VerifyOTP;
