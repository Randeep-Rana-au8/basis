import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signup, verify } from "../../actions/userActions";

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
  RadioInput,
  RadioContainer,
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
  }, [userStart, userVerify]);

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [refer, setRefer] = useState("");
  const userVerify = useSelector((state) => state.userVerify);
  const userStart = useSelector((state) => state.userStart);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userVerify?.userDetails) {
      history.push("/start");
    }

    if (userVerify?.userDetails) {
      // setName(userVerify?.userDetails?.user?.firstName);
      setEmail(userVerify?.userDetails?.email);
    }
  }, [userVerify]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, name, agree, userStart?.userInfo?.token, refer));
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Create A New Account</FormH1>
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput value={name} onChange={handleNameChange} type="name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" value={email} readOnly required />
            <FormLabel htmlFor="for">ReferredCodeKey</FormLabel>
            <FormInput
              type="text"
              value={refer}
              onChange={(e) => setRefer(e.target.value)}
              placeholder="optional"
            />
            <RadioContainer>
              <RadioInput required value={agree} onClick={() => setAgree(!agree)} type="checkbox" />
              <FormLabel style={{ margin: "3px" }} htmlFor="for">
                Agree To Privacy Policy
              </FormLabel>
            </RadioContainer>
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
