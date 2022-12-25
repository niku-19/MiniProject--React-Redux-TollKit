import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";
import style from "./Cart.module.css";
import { AiFillDelete } from "react-icons/ai";
import { hideCartModel } from "../../Features/ShowModel/showModel";
import CartItems from "../Cart/CartItems";
import { useDispatch, useSelector } from "react-redux";
import emptyCartImage from "../../assets/emptyCart.png";

const Backdrop = () => {
  const disptach = useDispatch();
  const hideCartModelHandler = () => {
    disptach(hideCartModel());
  };
  return <div className={style.backdrop} onClick={hideCartModelHandler} />;
};

const ModalOverlay = () => {
  const [haveItemInItems,setHaveItemInItems] = useState(false)
  const totalCartPrice = useSelector((state) => state.cartModel.totalCartPrice);
  const CardData = useSelector((state) => state.cartModel.items);
  const disptach = useDispatch();
  const hideCartModelHandler = () => {
    disptach(hideCartModel());
  };

  useEffect(() => {
    fetch("https://add-project-a1e5c-default-rtdb.firebaseio.com/cart.json" , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: CardData,
        totalCartPrice: totalCartPrice,
      }),
    }).then((res) => {
      if (res.ok) {
        console.log("Data is stored");
        }
        });
        }, [CardData, totalCartPrice]);

  useEffect(() => {
    if (CardData.length > 0) {
      setHaveItemInItems(true)
    } else {
      setHaveItemInItems(false)
    }
  },[CardData])

  return (
    <>
      <div className="container">
        <div className={style.card}>
          <div className={style.modal}>
            <h1>Cart Items</h1>
            <ul>
              <li className={style.list__items}>
                <div className={style.image}>
                  <h3>Items</h3>
                </div>
                <div className={style.name}>
                  <h3>Product Name</h3>
                </div>
                <div className={style.price}>
                  <h3>totalPrice</h3>
                </div>
                <div className={style.quantity}>
                  <h3>Quantity</h3>
                </div>
                <AiFillDelete className={style.multiply} />
              </li>
              {CardData.map((items, index) => {
                return (
                  <div key={index}>
                    <CartItems
                      name={items.name}
                      image={items.image}
                      totalPrice={items.totalPrice}
                      price={items.price}
                      quantity={items.quantity}
                      id={items.id}
                    />
                  </div>
                );
              })}
            </ul>
            {haveItemInItems === false ? (
              <>
                <div className={style.emptyCart}>
                  <h3>Cart is Empty</h3>
                  <img src={emptyCartImage} alt="emptyCart" />
                </div>
              </>
            ) : (
              <div className={style.order__sections}>
                <div className={style.totalAmount}>
                  <h3>Total Amount : ₹ {totalCartPrice}</h3>
                </div>
                <div className={style.buttons}>
                  <button onClick={hideCartModelHandler}>cancel</button>
                  <button>Order</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const CartModel = () => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default CartModel;
