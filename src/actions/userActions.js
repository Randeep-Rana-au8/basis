import axios from "axios";
import {
  USER_START,
  USER_LOGOUT,
  USER_MESSAGE,
  USER_VERIFY,
  USER__VERIFY_MESSAGE,
} from "../constants/userConstant";

export const start = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("https://hiring.getbasis.co/candidate/users/email", {
      email: email,
    });
    console.log(res);
    console.log("i am here");
    dispatch({
      type: USER_START,
      payload: res?.data?.results,
      message: res?.data?.results?.success && "Success!",
      email: email,
    });

    localStorage.setItem("userStart", JSON.stringify(res?.data?.results));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER_MESSAGE,
      payload: {},
      email: email,
      //   message: "Failed, Please Try Again!",
      message:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const verify = (email, token, code) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.put("https://hiring.getbasis.co/candidate/users/email/verify", {
      email: email,
      token: `${token}`,
      verificationCode: `${code}`,
    });
    console.log(res);
    console.log("i am here");
    dispatch({
      type: USER_VERIFY,
      payload: res?.data?.results,
      message: res?.data?.results?.success && "Success!",
      email: email,
    });

    localStorage.setItem("userInfo", JSON.stringify(res?.data?.results));
  } catch (error) {
    console.log(error);
    dispatch({
      type: USER__VERIFY_MESSAGE,
      payload: {},
      email: email,
      //   message: "Failed, Please Try Again!",
      message:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};
