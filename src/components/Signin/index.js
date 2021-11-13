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
  const [message, setMessage] = useState("");
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
    setMessage("");

    dispatch(verify(value, userStart?.userInfo?.token, OTP));
  };

  useEffect(() => {
    if (!userStart?.userInfo?.email) {
      history.push("/start");
    }

    if (userVerify?.userDetails?.email) {
      if (userVerify?.userDetails?.isLogin) {
        history.push("/profile");
      } else {
        history.push("/register");
      }
    } else {
      setMessage(userVerify?.userDetails?.message);
    }
  }, [userStart, userVerify]);

  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Sign in to your account</FormH1>

            <Text style={{ color: "red" }}>{message}</Text>
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
  const [msg, setMsg] = useState("");
  const userVerify = useSelector((state) => state.userVerify);
  const userStart = useSelector((state) => state.userStart);
  const userSignup = useSelector((state) => state.userSignup);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userVerify?.userDetails) {
      history.push("/start");
    }

    if (userSignup?.userDetails) {
      history.push("/profile");
    }

    if (userVerify?.userDetails) {
      setEmail(userVerify?.userDetails?.email);
    }
  }, [userVerify, userSignup]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(email, name, agree, userStart?.userInfo?.token, refer, setMsg));
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
            <span style={{ color: "red" }}>{msg}</span>
            <RadioContainer>
              <RadioInput required value={agree} onClick={() => setAgree(!agree)} type="checkbox" />
              <FormLabel style={{ margin: "3px" }} htmlFor="for">
                Agree To Privacy Policy
              </FormLabel>
            </RadioContainer>
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignIn;
