import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const sneakersList = useSelector((state) => state.sneakersList);
  const { sneakers, error, loading, page, pages } = sneakersList;
  const [sliderArray, setSliderArray] = useState([]);

  const nextSlide = () => {
    if (slideIndex !== sneakers.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sneakers.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sneakers.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };
  useEffect(() => {
    if (sneakers) {
      setSliderArray(sneakers.slice(0, 6));
    }
  }, [sneakers]);

  return (
    <div className="container-slider">
      {sneakers.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <img src={obj.media} />

            <p>{obj.name}</p>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      {/* <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Slider;
