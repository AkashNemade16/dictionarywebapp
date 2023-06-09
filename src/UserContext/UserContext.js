import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState(null);
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("Iconsolata");
  const [error,setError] = useState(null)
  const value = {
    userInput,
    setUserInput,
    theme,
    setTheme,
    apiData,
    setApiData,
    font,
    setFont,
    error,
    setError
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
