import * as actionTypes from "../constants/productConstants";
import axios from "axios";

export const getProducts =
  (pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.GET_PRODUCT_REQUEST,
      });

      const { data } = await axios.get(
        `/api/sneakers?pageNumber=${pageNumber}`
      );

      dispatch({
        type: actionTypes.GET_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.GET_PRODUCT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/sneakers/${id}`);

    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_DETAILS_RESET,
  });
};
