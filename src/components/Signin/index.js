import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { verify } from "../../actions/userActions";

import {
  Container,
  Icon,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Text,
} from "./SigninElements";

const SignIn = () => {
  const [value, setValue] = useState("");
  const [OTP, setOTP] = useState(112233);
  const userStart = useSelector((state) => state.userStart);
  const userVerify = useSelector((state) => state.userVerify);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(userStart?.userInfo?.email);
  }, [userStart]);

  const handleOTP = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value, userStart?.userInfo?.token, OTP);
    dispatch(verify(value, userStart?.userInfo?.token, OTP));
  };

  useEffect(() => {
    if (!userStart?.userInfo?.email) {
      history.push("/start");
    }

    if (userVerify?.userDetails) {
      if (userVerify?.userDetails?.isLogin) {
        history.push("/profile");
      } else {
        history.push("/register");
      }
    }
  }, [userStart]);

  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" value={value} readOnly required />
            <FormLabel htmlFor="for">Verification Code</FormLabel>
            <FormInput type="number" value={OTP} onChange={handleOTP} required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              New user?{" "}
              <Link to="/register" style={{ color: "#01bf71" }}>
                Register Here
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Create A New Account</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>
              Already have a account?{" "}
              <Link to="/signin" style={{ color: "#01bf71" }}>
                Login here
              </Link>
            </Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
