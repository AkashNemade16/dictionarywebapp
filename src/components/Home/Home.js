import React, { useEffect, useState } from "react";
import DictionaryPage from "../DictionayPage/DictionaryPage";
import UserContextProvider from "../../UserContext/UserContext";
import Input from "../Input/Input";
const Home = () => {
  return (
    <div>
    <UserContextProvider>
        <Input />
        <DictionaryPage />
    </UserContextProvider>
    </div>
  );
};

export default Home;
