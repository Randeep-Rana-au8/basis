import React, { useState } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";
import Home from "../components/Home";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
    </>
  );
};

export default HomePage;
