import React from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/ShowModel/showModel";
import CartModel from "../Cart/CartModel";

const Card = (props) => {
  const cartShowModel = useSelector((state) => state.cartModel.showModel);
  const dispatch = useDispatch();
  const { name, price, image, id } = props;
  const onAddToCartHandler = () => {
    dispatch(
      addToCart({
        name,
        price,
        image,
        id,
      })
    );
  };
  return (
    <>
      {cartShowModel && <CartModel name={props.name}  price={props.price} id={props.id} image={props.image} />}
      <div className="product">
        <span className="product__price">₹{props.price}</span>
        <img className="product__image" src={props.image} />
        <h1 className="product__title">{props.name}</h1>
        <hr />
        <button
          className="product__btn btn__product"
          onClick={onAddToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </>
  );
};

export default Card;
