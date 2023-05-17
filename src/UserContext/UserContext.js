import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState(null);
  const [theme, setTheme] = useState(null);

  const value = { userInput, setUserInput, theme, setTheme };

  return(
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
};

export default UserContextProvider