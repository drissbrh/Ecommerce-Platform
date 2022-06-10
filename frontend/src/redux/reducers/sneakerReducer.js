import {
  SNEAKER_DETAILS_FAIL,
  SNEAKER_DETAILS_REQUEST,
  SNEAKER_DETAILS_RESET,
  SNEAKER_DETAILS_SUCCESS,
  SNEAKER_LIST_FAIL,
  SNEAKER_LIST_REQUEST,
  SNEAKER_LIST_SUCCESS,
} from "../constants/sneakerConstants";

export const SneakersListReducer = (state = { sneakers: [] }, action) => {
  switch (action.type) {
    case SNEAKER_LIST_REQUEST:
      return {
        loading: true,
        sneakers: [],
      };
    case SNEAKER_LIST_SUCCESS:
      return {
        loading: false,
        sneakers: action.payload.sneakers,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case SNEAKER_LIST_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const SneakerDetailsReducer = (state = { sneaker: {} }, action) => {
  switch (action.type) {
    case SNEAKER_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case SNEAKER_DETAILS_SUCCESS:
      return {
        sneaker: action.payload,
        loading: false,
      };
    case SNEAKER_DETAILS_FAIL:
      return {
        error: action.payload,
        loading: false,
      };
    case SNEAKER_DETAILS_RESET:
      return {
        sneaker: {},
      };
    default:
      return state;
  }
};
