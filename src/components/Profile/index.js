import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
  DisplayImage,
} from "./ProfileElements";

export const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [img, setImg] = useState("");

  const history = useHistory();

  const userVerify = useSelector((state) => state.userVerify);
  const userSignup = useSelector((state) => state.userSignup);

  useEffect(() => {
    if (!userVerify?.userDetails) {
      history.push("/");
    }
    if (userVerify?.userDetails) {
      setName(userVerify?.userDetails?.user?.firstName);
      setEmail(userVerify?.userDetails?.user?.email);
      setNumber(userVerify?.userDetails?.user?.phoneNumber);
      setImg(userVerify?.userDetails?.user?.avatar);
    }

    if (userSignup?.userDetails) {
      setName(userSignup?.userDetails?.user?.firstName);
      setEmail(userSignup?.userDetails?.user?.email);
      setNumber(userSignup?.userDetails?.user?.phoneNumber);
      setImg(userSignup?.userDetails?.user?.avatar);
    }
  }, [userVerify, userSignup]);

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
            <FormButton type="submit">LOGOUT</FormButton>
            {/* <Text>
              Already have a account?{" "}
              <Link to="/signin" style={{ color: "#01bf71" }}>
                Login here
              </Link>
            </Text> */}
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};
