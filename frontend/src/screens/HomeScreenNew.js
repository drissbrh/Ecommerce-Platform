import React, { useEffect, useState } from "react";
import "./HomeScreenNew.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AllSneakers } from "../redux/actions/sneakerActions";
//import convere from "../assets/seaConverse.jpg";
import { motion } from "framer-motion";
import Slider from "../components/Slider";

const HomeScreenNew = () => {
  const dispatch = useDispatch();
  const [slider, setSlider] = useState([]);
  const { Page } = useParams();
  const pageNumber = Page;
  const sneakersList = useSelector((state) => state.sneakersList);
  const { sneakers, error, loading, page, pages } = sneakersList;

  useEffect(() => {
    dispatch(AllSneakers(pageNumber));
    if (sneakers) {
      setSlider(sneakers.slice(0, 9));
    }
  }, [dispatch, pageNumber]);
  return (
    <div className="homescreennew">
      <div className="homescreennew__inside">
        <Slider />
        <Link to="/search">Discover More</Link>

        <div className="before__footer">
          <h3>Just Arrived</h3>
          <p>Be the first to shop our new arrivals</p>
        </div>
        <footer className="home__footer">
          <h4> &copy;2022 MySneakers Platform</h4>
        </footer>
      </div>
    </div>
  );
};

export default HomeScreenNew;
