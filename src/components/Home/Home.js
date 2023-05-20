import React from "react";
import DictionaryPage from "../DictionayPage/DictionaryPage";
import Input from "../Input/Input";
import Header from "../Header/Header";
import "./Home.sass";
const Home = () => {
  
  return (
    <div className="Home">
        <Header/>
        <Input />
        <DictionaryPage />
    </div>
  );
};

export default Home;
