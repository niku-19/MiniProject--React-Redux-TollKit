import React from "react";
import style from "./Nav.module.css";
import { GiShoppingBag } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { showCartModel } from "../../Features/ShowModel/showModel";
import { logOut } from "../../Features/ShowLogin/LoginTrue";

const Nav = () => {
  const showLogOut = useSelector((state) => state.showLoggedIn.sucess);
  const totalCartItemQuantity =  useSelector((state) => state.cartModel.totalQuantity)
  const dispatch =  useDispatch();
  const onShowModelHandler = () => {
    dispatch(showCartModel());
  }
  const onLogOutHandler = () => {
    const logoutAlert =  confirm("Are you sure you want to logout?");
    if(logoutAlert === true){
      dispatch(logOut());
    }
  }
  return (
    <>
      <nav>
        <div className={style.left_side}>
          <div className={style.brand_name}>
            <h1>Top Gear</h1>
          </div>
        </div>
       {showLogOut && <div className={style.right_side}>
          <div className={style.list}>
            <ul>
              <li>Home</li>
              <li>product</li>
            </ul>
          </div>
          <div className={style.cart}>
            <GiShoppingBag onClick={onShowModelHandler}/>
            <h1>{totalCartItemQuantity}</h1>
          </div>
          <div className="style">
            <button onClick={onLogOutHandler} >Logout</button>
          </div>
        </div>}
      </nav>
    </>
  );
};

export default Nav;
