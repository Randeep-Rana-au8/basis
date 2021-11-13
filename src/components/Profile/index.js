import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";

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
  DisplayImage,
} from "./ProfileElements";

export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [id, setId] = useState("");
  const [token, setToken] = useState("");
  const [img, setImg] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const userVerify = useSelector((state) => state.userVerify);
  const userSignup = useSelector((state) => state.userSignup);
  const userStart = useSelector((state) => state.userStart);

  useEffect(() => {
    if (!userVerify?.userDetails) {
      history.push("/");
    }
    if (userVerify?.userDetails?.user) {
      setName(userVerify?.userDetails?.user?.firstName);
      setEmail(userVerify?.userDetails?.user?.email);
      setNumber(userVerify?.userDetails?.user?.phoneNumber);
      setImg(userVerify?.userDetails?.user?.avatar);
      setId(userVerify?.userDetails?.user?._id);
      setToken(userVerify?.userDetails?.user?.token);
    }

    if (userSignup?.userDetails) {
      setName(userSignup?.userDetails?.user?.firstName);
      setEmail(userSignup?.userDetails?.user?.email);
      setNumber(userSignup?.userDetails?.user?.phoneNumber);
      setImg(userSignup?.userDetails?.user?.avatar);
      setId(userSignup?.userDetails?.user?._id);
      setToken(userSignup?.userDetails?.user?.token);
    }
  }, [userVerify, userSignup]);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout(id, token));
  };

  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Welcome to your profile</FormH1>
            <DisplayImage src={img} />
            <FormLabel htmlFor="for">Name</FormLabel>
            <FormInput type="name" value={name} readOnly placeholder="Enter Your Name" required />
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              value={email}
              readOnly
              placeholder="Enter Your Email"
              required
            />
            <FormLabel htmlFor="for">Phone Number</FormLabel>
            <FormInput
              type="number"
              value={number}
              readOnly
              placeholder="Enter Phone Number"
              required
            />
            <FormButton type="submit" onClick={handleLogout}>
              LOGOUT
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
