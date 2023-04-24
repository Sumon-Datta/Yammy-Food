import React from "react";
import Header from "../Header/Header";
import MainPart from "../MainPart/MainPart";

const Home = () => {
  return (
    <>
      {/*---------------- Header Part Start -------------------*/}
      <Header
      
      ></Header>
      {/*---------------- Header Part End -------------------*/}
      
      {/*---------------- Menu ------------------*/}
      <MainPart></MainPart>
      {/*---------------- Menu ------------------*/}
    </>
  );
};

export default Home;
