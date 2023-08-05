import React, { useEffect, useState } from "react";
import "../../styles/Signup.css";
import Slider from "../../components/UI/Slider";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/slice/auth/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);
  const [redirectFlag, setRedirectFlag] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    redirectFlag && login.success && navigate(`/profile/${login?.username}`);
  }, [login.success]);

  const { handleChange, handleBlur, handleSubmit, errors, values } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit(values) {
      dispatch(loginAction(values));
    },
  });
  return (
    <>
      <div className="signup">
        <form onSubmit={handleSubmit}>
          <h1>Welcome Back!</h1>
          {/* Email */}
          <div className="input-field full">
            <label htmlFor="email">
              Email or Username<span>*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email or Username"
              tabIndex="1"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          {/* Password */}
          <div className="input-field full">
            <label htmlFor="password">
              Password<span>*</span>
            </label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              tabIndex="2"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <button type="submit" className="primary-btn">
            Log in
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

export default Login;
