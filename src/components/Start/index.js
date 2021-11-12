import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
} from "./StartElements";
import axios from "axios";
import { start } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const Start = ({ history }) => {
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [message, setMessage] = useState("");
  //   const history = useHistory();
  const dispatch = useDispatch();
  const userStart = useSelector((state) => state.userStart);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userStart);
    console.log("I am not here");
    dispatch(start(email));

    // setMessage("");
    // const res = await axios.post("https://hiring.getbasis.co/candidate/users/email", {
    //   email: e.target.email.value,
    // });
    // console.log(res);
    // if (res?.data?.success === true) {
    //   setMessage("Success!");
    // } else {
    //   setMessage("Failed Please Try Again!");
    // }
    // setData(res?.data?.results?.token);
  };

  useEffect(() => {
    console.log(userStart);
    setMessage("");
    if (userStart?.userInfo?.email) {
      setMessage("Success!");
      setEmail(userStart?.userInfo?.email);
      setTimeout(() => {
        history.push("/signin");
      }, 1000);
    }
  }, [data, userStart]);

  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#" onSubmit={handleSubmit}>
            <FormH1>Welcome😊</FormH1>
            <h4 style={{ textAlign: "center" }}>{message}</h4>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              placeholder="Please Enter Your Email"
              onChange={handleChange}
              value={email}
              required
            />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Start;
