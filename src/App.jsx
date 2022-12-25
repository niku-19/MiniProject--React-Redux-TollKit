import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Corosel from "./components/Hero/Corosel";
import Headers from "./components/header/Header";
import Product from "./components/Product/Product";
import Fotter from "./components/Footer/Fotter";
import { useSelector } from "react-redux";

function App() {
  const showLoggedIn = useSelector((state) => state.showLoggedIn.sucess);
 


  return (
    <>
      <Nav />
      {showLoggedIn ? (
        <>
          <Corosel />
          <Product />
          <Fotter />
        </>
      ) : (
        <Headers />
      )}
    </>
  );
}

export default App;
