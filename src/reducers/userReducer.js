import { USER_START, USER_LOGOUT, USER_VERIFY, USER_SIGNUP } from "../constants/userConstant";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_START:
      return { userInfo: { email: action.email, ...action.payload } };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_VERIFY:
      return { userDetails: { email: action.email, ...action.payload } };

    default:
      return state;
  }
};

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return { userDetails: { email: action.email, ...action.payload } };

    default:
      return state;
  }
};
