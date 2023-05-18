import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [apiData,setApiData] = useState([])
  const [theme, setTheme] = useState(null);

  const value = { userInput, setUserInput, theme, setTheme, apiData, setApiData };

  return(
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
};

export default UserContextProvider