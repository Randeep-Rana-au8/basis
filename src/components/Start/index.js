import React from "react";
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
const Start = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">getBasis</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Welcome😊</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" placeholder="Please Enter Your Email" required />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Start;
