import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { GiTireIronCross } from "react-icons/gi";
import style from "./Cart.module.css";
import { addToCart, removeFromCart , removeItemsfromCart } from "../../Features/ShowModel/showModel";
import { useDispatch } from "react-redux";

const CartItems = (props) => {
  const dispatch = useDispatch();
  const { name, price, id } = props;
  const incHandler = () => {
    dispatch(addToCart({ price, id, name }));
  };
  const decHandler = () => {
    dispatch(removeFromCart({ id, price }));
  };
  const removeItemFromCartHandler = () => {
    dispatch(removeItemsfromCart({ id, price }));
  }
  return (
    <>
      <li className={style.list__items} key={props.id}>
        <div className={style.image}>
          <img src={props.image} alt="product" />
        </div>
        <div className={style.name}>
          <h3>{props.name}</h3>
        </div>
        <div className={style.price}>
          <h3>₹ {props.totalPrice}</h3>
        </div>
        <div className={style.quantity}>
          <div className={style.center}>
            <BiLeftArrow className={style.decArrow} onClick={decHandler} />
            <input type="text" value={props.quantity} readOnly />
            <BiRightArrow className={style.incArrow} onClick={incHandler} />
          </div>
        </div>
        <GiTireIronCross className={style.multiply} onClick={removeItemFromCartHandler} />
      </li>
    </>
  );
};

export default CartItems;
