import React, { useEffect } from "react";
import "./HomeScreenNew.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { AllSneakers } from "../redux/actions/sneakerActions";
import convere from "../assets/seaConverse.jpg";
import { motion } from "framer-motion";

const HomeScreenNew = () => {
  const dispatch = useDispatch();
  const { Page } = useParams();
  const pageNumber = Page;
  const sneakersList = useSelector((state) => state.sneakersList);
  const { sneakers, error, loading, page, pages } = sneakersList;

  useEffect(() => {
    dispatch(AllSneakers(pageNumber));
  }, [dispatch]);
  return (
    <div className="homescreennew">
      <div className="sneakerS">
        {sneakers && sneakers[6] && (
          <>
            <motion.div
              className="sneaker__home"
              initial={{ opacity: 0, x: -100, y: 0, scale: 1 }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                opacity: 1,
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={sneakers[6].media} alt="jayid" />
            </motion.div>
            <div className="infos">
              <p>{sneakers[6].name}</p>
            </div>
          </>
        )}
      </div>
      <Link to="/search">Buy Now</Link>

      {/* <div className="before__footer">
        <h3>Just Arrived</h3>
        <p>Be the first to shop our new arrivals</p>
      </div> */}
      <footer className="home__footer"></footer>
    </div>
  );
};

export default HomeScreenNew;
