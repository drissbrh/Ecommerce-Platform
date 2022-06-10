import React, { useEffect } from "react";
import "./HomeScreenNew.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AllSneakers } from "../redux/actions/sneakerActions";

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
        {sneakers && sneakers[2] && (
          <>
            <img src={sneakers[2].media} alt="jayid" />
            <div className="infos">
              <p>{sneakers[2].name}</p>
              <section></section>
            </div>
          </>
        )}
      </div>

      <button>Buy Now</button>
    </div>
  );
};

export default HomeScreenNew;
