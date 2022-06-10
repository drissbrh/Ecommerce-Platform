import axios from "axios";
import {
  SNEAKER_DETAILS_FAIL,
  SNEAKER_DETAILS_REQUEST,
  SNEAKER_DETAILS_RESET,
  SNEAKER_DETAILS_SUCCESS,
  SNEAKER_LIST_FAIL,
  SNEAKER_LIST_REQUEST,
  SNEAKER_LIST_SUCCESS,
} from "../constants/sneakerConstants";

export const AllSneakers =
  (pageNumber = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: SNEAKER_LIST_REQUEST,
      });

      const { data } = await axios.get(
        `/api/sneakers?pageNumber=${pageNumber}`
      );

      dispatch({
        type: SNEAKER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SNEAKER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getSneakerDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SNEAKER_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`/api/sneakers/${id}`);

    dispatch({
      type: SNEAKER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SNEAKER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeSneakerDetails = () => (dispatch) => {
  dispatch({
    type: SNEAKER_DETAILS_RESET,
  });
};
