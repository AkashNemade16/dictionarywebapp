import React from "react";
import DictionaryPage from "../DictionayPage/DictionaryPage";
import UserContextProvider from "../../UserContext/UserContext";
import Input from "../Input/Input";
import Header from "../Header/Header";
import "./Home.sass";
const Home = () => {
  return (
    <div className="Home">
      <UserContextProvider>
        <Header/>
        <Input />
        <DictionaryPage />
      </UserContextProvider>
    </div>
  );
};

export default Home;
