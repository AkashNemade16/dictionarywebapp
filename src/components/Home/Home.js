import React, { useEffect, useState } from "react";
import DictionaryPage from "../DictionayPage/DictionaryPage";
import UserContextProvider from "../../UserContext/UserContext";
import Input from "../Input/Input";
import "./Home.sass";
const Home = () => {
  return (
    <div className="Home">
      <UserContextProvider>
        <Input />
        <DictionaryPage />
      </UserContextProvider>
    </div>
  );
};

export default Home;
