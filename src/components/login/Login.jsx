import style from "./Login.module.css";
import LoginImage from "../../assets/L2.jpg";
import { Auth } from "../../Features/LoginAuth/LoginAuthSlice";
import { loginTrue } from "../../Features/ShowLogin/LoginTrue";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const usersList = [];
const allowAcces = 0;

const Login = (props) => {
  const users = useSelector((state) => state.userLoginAuth.users);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Auth());
  }, []);

  for (const key in users) {
    usersList.push({
      email: users[key].email,
      password: users[key].password,
    });
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickAuthHandler = (e) => {
    e.preventDefault();
    usersList.map((users) => {
      if (users.email === email && users.password === password) {
          dispatch(loginTrue());
      }
    });
  };

  return (
    <>
      {/* {!isUserAuth && ( */}
        <section>
          <div className={`container ${style.container} `}>
            <h2>Login</h2>
            <p>
              Don't Have Account Yet ?
              <span onClick={props.onLoginClick}> Sign Up </span> Now!
            </p>
            <div className={`${style.login__container}`}>
              <div className="login__image">
                <img src={LoginImage} alt="this is login image" />
              </div>
              <div className={style.login__form}>
                <form action="adding_user" onSubmit={onClickAuthHandler}>
                  <label htmlFor="Email">Email :-</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter Correct Email"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={handleChangeEmail}
                  />
                  <label htmlFor="Password">Password :-</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Correct password"
                    autoComplete="off"
                    autoCapitalize="off"
                    onChange={handleChangePassword}
                    // onBlur={handleBlur}
                  />
                  <div className={style.login__btn}>
                    <button className="btn" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      {/* )} */}
    </>
  );
};

export default Login;
