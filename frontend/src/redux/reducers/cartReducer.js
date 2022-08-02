import {
  ADD_TO_CART,
  CART_CLEAR_ITEMS,
  CART_SAVE_PAYMENT_METHOD,
  CART_SAVE_SHIPPING_ADDRESS,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

const CART_INITIALE_STATE = {
  cartItems: [],
};

export const cartReducer = (state = CART_INITIALE_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      const exisItem = state.cartItems.find((x) => x.product === item.product);

      if (exisItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === exisItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
