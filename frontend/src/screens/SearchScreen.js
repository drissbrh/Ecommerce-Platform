import React, { useEffect, useState } from "react";
import { AllSneakers } from "../redux/actions/sneakerActions";
import { useParams } from "react-router-dom";
import "./SearchScreen.css";
import { useDispatch, useSelector } from "react-redux";
import SneakerItem from "../components/SneakerItem";
import SneakerItemNew from "../components/SneakerItemNew";
import Paginate from "../components/Paginate";

const SearchScreen = () => {
  const [filterType, setFilterType] = useState("name");
  const [search, setSearch] = useState("");

  const { Page } = useParams();
  const pageNumber = Page;
  const dispatch = useDispatch();

  const sneakersList = useSelector((state) => state.sneakersList);
  const { sneakers, error, loading, page, pages } = sneakersList;

  useEffect(() => {
    dispatch(AllSneakers(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div className="searchscreen">
      <div className="sidebar">
        <label>Search By</label>
        <select
          value={filterType}
          className="filter__type"
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value={"name"}>Name</option>
          <option value={"title"}>Title</option>
        </select>
        <input
          type="text"
          value={search}
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="sneakers__results">
        {loading ? (
          <div className="loading__search">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            {sneakers &&
              sneakers.map((product) => (
                <SneakerItemNew
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
    </div>
  );
};

export default SearchScreen;
