import React from "react";
import style from "./SingUp.module.css";
import LoginImage from "../../assets/L2.jpg";
import { useFormik } from "formik";
import { SignUpSchema } from "../../schema";
import { useDispatch, useSelector } from "react-redux";
import { singUpUsers } from "../../Features/login/LoginSlice.jsx";
const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_Password: "",
};

const SignUp = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.singUpUsers.loading);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: SignUpSchema,
      onSubmit: (values, action) => {
        dispatch(
          singUpUsers({
            name: values.name,
            email: values.email,
            password: values.password,
            token : `${values.name} ${values.password}`
          })
        );
        action.resetForm();
      },
    });
  return (
    <>
      <section>
        <div className={`container ${style.container} `}>
          <h2>Sign UP</h2>
          <p>
            Already Have Account ?
            <span onClick={props.onSingUpClick}> Login </span> Now!
          </p>
          <div className={`${style.login__container}`}>
            <div className={style.login__form}>
              <form action="adding_user" onSubmit={handleSubmit}>
                <label htmlFor="Name">Name :-</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
                <label htmlFor="Email">Email :-</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter Correct Email"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
                <label htmlFor="Password">Password :-</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Correct password"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
                <label htmlFor="Confirm_Password">Confirm Password :-</label>
                <input
                  type="password"
                  name="confirm_Password"
                  id="confirm_Password"
                  placeholder="Confirm Your Password"
                  autoComplete="off"
                  autoCapitalize="off"
                  value={values.confirm_Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_Password && touched.confirm_Password ? (
                  <p>{errors.confirm_Password}</p>
                ) : null}
                <div className={style.login__btn}>
                  <button className="btn" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <div className="login__image">
              <img src={LoginImage} alt="this is login image" />
            </div>
          </div>
          <div className={style.userRegister}>
            {isLoading ? <p>User Registered Successfully ✔️</p> : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
