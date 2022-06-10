import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import {
  SneakerDetailsReducer,
  SneakersListReducer,
} from "./reducers/sneakerReducer";
import { cartReducer } from "./reducers/cartReducer";

const reducer = combineReducers({
  sneakersList: SneakersListReducer,
  sneakerDetails: SneakerDetailsReducer,
  cart: cartReducer,
});

const middlware = [thunk];

const cartItemsInLocaleStorage = localStorage.getItem("myCart")
  ? JSON.parse(localStorage.getItem("myCart"))
  : [];
const initialState = {
  cart: {
    cartItems: cartItemsInLocaleStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
