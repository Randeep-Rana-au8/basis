import React from "react";
import { HomeContainer, Input, Button, Title, Description } from "./HomeElements";

const index = () => {
  return (
    <HomeContainer>
      <div>
        <Title style={{ color: "black" }}>Welcome To getBasis👋</Title>
        <Description>India's financial services destination for women!👩🏼‍🤝‍👩🏼</Description>
      </div>
      {/* <div>
        <div>
          <h3>Explore More with Us</h3>
        </div>
        <div>
          <Input placeholder="Enter your email" />
          <Button>Submit</Button>
        </div>
      </div> */}
    </HomeContainer>
  );
};

export default index;
