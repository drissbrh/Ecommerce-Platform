import React, { useEffect } from "react";
import "./HomeScreen.css";
import { useDispatch, useSelector } from "react-redux";

//components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import Paginate from "../components/Paginate";

const HomeScreen = ({ match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);

  const { products, error, loading, page, pages } = getProducts;

  useEffect(() => {
    dispatch(listProducts(pageNumber));
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
            {products.map((product) => (
              <Product
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
            <Paginate pages={pages} page={page} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
