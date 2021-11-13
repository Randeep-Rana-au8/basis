import axios from "axios";
import {
  USER_START,
  USER_LOGOUT,
  USER_MESSAGE,
  USER_VERIFY,
  USER__VERIFY_MESSAGE,
  USER_SIGNUP,
  USER__SIGNUP_MESSAGE,
} from "../constants/userConstant";

export const start = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post("https://hiring.getbasis.co/candidate/users/email", {
      email,
    });
    dispatch({
      type: USER_START,
      payload: res?.data?.results,
      message: res?.data?.results?.success && "Success!",
      email,
    });

    localStorage.setItem(
      "userStart",
      JSON.stringify({ userInfo: { email, ...res?.data?.results } })
    );
  } catch (error) {
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

    dispatch({
      type: USER_VERIFY,
      payload: res?.data?.results,
      message: res?.data?.results?.success && "Success!",
      email: email,
    });

    localStorage.setItem(
      "userVerify",
      JSON.stringify({ userDetails: { email, ...res?.data?.results } })
    );
  } catch (error) {
    dispatch({
      type: USER__VERIFY_MESSAGE,
      payload: {},

      message:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const signup =
  (email, firstName, privacyPolicy, token, refer, setMsg) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      setMsg("");

      if (refer) {
        const result = await axios.get(
          `https://hiring.getbasis.co/candidate/users/referral/${refer}`
        );

        if (result?.data?.success) {
          const res = await axios.post("https://hiring.getbasis.co/candidate/users", {
            firstName: firstName,
            email: email,
            referredCodeKey: refer,
            agreeToPrivacyPolicy: privacyPolicy,
            token: token,
            source: "WEB_APP",
          });

          dispatch({
            type: USER_SIGNUP,
            payload: res?.data?.results,
            message: res?.data?.results?.success && "Success!",
            email: email,
          });

          localStorage.setItem(
            "userSignup",
            JSON.stringify({ userDetails: { email, ...res?.data?.results } })
          );
        } else {
          setMsg(result?.data?.message);
        }
      } else {
        const res = await axios.post("https://hiring.getbasis.co/candidate/users", {
          firstName: firstName,
          email: email,
          referredCodeKey: refer,
          agreeToPrivacyPolicy: privacyPolicy,
          token: token,
          source: "WEB_APP",
        });

        dispatch({
          type: USER_SIGNUP,
          payload: res?.data?.results,
          message: res?.data?.results?.success && "Success!",
          email: email,
        });

        localStorage.setItem(
          "userSignup",
          JSON.stringify({ userDetails: { email, ...res?.data?.results } })
        );
      }
    } catch (error) {
      dispatch({
        type: USER__SIGNUP_MESSAGE,
        payload: {},
        email,
        message:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const logout = (id, token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${id},${token}` },
  };

  const res = await axios.delete(
    `https://hiring.getbasis.co/candidate/users/logout/${id}`,

    config
  );

  dispatch({ type: USER_LOGOUT });
  localStorage.removeItem("userInfo");
  localStorage.removeItem("userVerify");
  localStorage.removeItem("userSignup");
  localStorage.removeItem("userStart");
};
