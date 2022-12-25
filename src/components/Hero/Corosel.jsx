import React, { useEffect, useState } from "react";
import ImageData from "../../Data/ImageData";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import style from "./Corosel.module.css";

const Corosel = () => {
  const [current, setCurrent] = useState(0);
  const length = ImageData.length;

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

    setTimeout(nextSlideHandler, 2000);


  return (
    <>
      <div className={` container `}>
        <div className={style.corosel}>
          <FaArrowAltCircleLeft
            className={style.leftArrow}
            onClick={prevSlideHandler}
          />
          <FaArrowAltCircleRight
            className={style.rightArrow}
            onClick={nextSlideHandler}
          />
          {ImageData.map((item, index) => {
            return (
              <div
                className={
                  index === current
                    ? `${style.slides} ${style.active} `
                    : `${style.slides}`
                }
                key={index}
              >
                {index === current && (
                  <img
                    src={item.img}
                    alt="corosel"
                    className={
                      index === current
                        ? `${style.corosel__image} ${style.active} `
                        : `${style.corosel__image}`
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Corosel;
