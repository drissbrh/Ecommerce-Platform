import React, { useEffect } from "react";
import "./HomeScreen.css";
import { useDispatch, useSelector } from "react-redux";

//components
import SneakerItem from "../components/SneakerItem";

//Actions
import Paginate from "../components/Paginate";
import { AllSneakers } from "../redux/actions/sneakerActions";
import { useParams } from "react-router-dom";

const HomeScreen = () => {
  const pageNumber = useParams().pageNumber;

  const dispatch = useDispatch();

  const sneakersList = useSelector((state) => state.sneakersList);
  const { sneakers, error, loading, page, pages } = sneakersList;

  useEffect(() => {
    dispatch(AllSneakers(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">All Sneakers</h2>
      <div className="homescreen__products">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {sneakers.map((product) => (
              <SneakerItem
                key={product._id}
                productId={product._id}
                name={product.name}
                brand={product.brand}
                year={product.year}
                colorway={product.colorway}
                retailPrice={product.retailPrice}
                media={product.media}
              />
            ))}
          </>
        )}
      </div>
      {<Paginate pages={pages} page={page} />}
    </div>
  );
};

export default HomeScreen;
