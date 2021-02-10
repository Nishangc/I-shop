import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookies from "js-cookie";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  productDetailsReducer,
  productListReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productUpdateReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userDeleteReducers,
  userDetailsReducer,
  userListReducers,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userUpdateReducers,
} from "./reducers/userReducers";
import {
  myOrderListReducer,
  orderCreateReducer,
  orderDeliverReducer,
  orderDetailsReducer,
  OrderListReducer,
  orderPayReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducers,
  userDelete: userDeleteReducers,
  userUpdate: userUpdateReducers,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderList: OrderListReducer,
  myOrderList: myOrderListReducer,
});

const cartItemsFromCookies = Cookies.get("cartItems")
  ? JSON.parse(Cookies.get("cartItems"))
  : [];

const userInfoFromCookies = Cookies.get("userInfo")
  ? JSON.parse(Cookies.get("userInfo"))
  : null;

const shippingAddressFromCookies = Cookies.get("shippingAddress")
  ? JSON.parse(Cookies.get("shippingAddress"))
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromCookies,
    shippingAddress: shippingAddressFromCookies,
  },
  userLogin: { userInfo: userInfoFromCookies },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
