import { applyMiddleware, combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userVerifyReducer } from "./reducers/userReducer";

const initialState = {};
const middlewares = [thunk];

const reducer = combineReducers({
  userStart: userLoginReducer,
  userVerify: userVerifyReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;