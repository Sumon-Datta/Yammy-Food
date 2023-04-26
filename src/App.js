// import React, { useEffect } from 'react';
import { useContext } from "react";
import Home from "./components/Home/Home"
import { LightContext } from "./Context/LightContext";
import "./App.css"



const App = () => {

  const { light, setLight } = useContext(LightContext);
  console.log(light)
  
  return (
    <>
    
    <div className={
      light? "body": ""
    } >
      
       
      {/*------------ home -------------------*/}
      <Home></Home>
      {/*------------ home -------------------*/}
    </div>
    </>
  );
};

export default App;