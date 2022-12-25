import React from "react";
import ProductData from "../../Data/ProductData";
import Card from "./Card";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="gridBox">
          {ProductData.map((itmes,index) => {
            return <Card name={itmes.name}  price={itmes.price} id={itmes.id} image={itmes.image} key={index}  />;
          }) }
        </div>
      </div>
    </>
  );
};

export default Product;
