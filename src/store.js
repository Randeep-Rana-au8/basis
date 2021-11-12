import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userSignupReducer, userVerifyReducer } from "./reducers/userReducer";

const initialState = {
  userVerify: localStorage.getItem("userVerify")
    ? JSON.parse(localStorage.getItem("userVerify"))
    : {},
  userStart: localStorage.getItem("userStart") ? JSON.parse(localStorage.getItem("userStart")) : {},
  userSignup: localStorage.getItem("userSignup")
    ? JSON.parse(localStorage.getItem("userSignup"))
    : {},
};
const middlewares = [thunk];

const reducer = combineReducers({
  userStart: userLoginReducer,
  userVerify: userVerifyReducer,
  userSignup: userSignupReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
