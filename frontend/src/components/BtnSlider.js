import React from "react";
import "./BtnSlider.css";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {direction === "next" ? (
        <i className="fa-solid fa-arrow-right-long"></i>
      ) : (
        <i className="fa-solid fa-arrow-left"></i>
      )}
    </button>
  );
};
export default BtnSlider;
