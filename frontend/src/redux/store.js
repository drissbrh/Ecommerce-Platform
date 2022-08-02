import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import {
  SneakerDetailsReducer,
  SneakersListReducer,
} from "./reducers/sneakerReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import {
  orderCreateReducer,
  orderDeleteReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
  orderMineListReducer,
  orderPayReducer,
  orderSummaryReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  sneakersList: SneakersListReducer,
  sneakerDetails: SneakerDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMine: orderListMyReducer,
  orderList: orderListReducer,

  orderDeliver: orderDeliverReducer,
});

const middlware = [thunk];

const cartItemsInLocaleStorage = localStorage.getItem("myCart")
  ? JSON.parse(localStorage.getItem("myCart"))
  : [];

const UserInfoInLocaleStorage = localStorage.getItem("UserInfos")
  ? JSON.parse(localStorage.getItem("UserInfos"))
  : null;
const initialState = {
  cart: {
    cartItems: cartItemsInLocaleStorage,
  },
  userLogin: {
    userInfo: UserInfoInLocaleStorage,
  },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
