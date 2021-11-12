import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 70px;

  @media screen and (max-width: 795px) {
    font-size: 50px;
  }

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 30px;

  @media screen and (max-width: 795px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 0 5px 5px 0;
  margin-left: 5px;
  cursor: pointer;

  :hover {
    background-color: green;
    color: white;
  }
`;

export const Input = styled.input`
  width: "200px";
  height: 28px;
  border: none;
  background-color: lightgray;
  padding-left: 10px;
  border-radius: 5px 0px 0 5px;
`;
