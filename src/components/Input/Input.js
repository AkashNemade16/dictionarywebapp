import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../UserContext/UserContext";
import { fetchData } from "../../Api/Axios";
import "./Input.sass";
const Input = () => {
  const { setUserInput, setApiData, theme, setError } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [errorBorder,setErrorBorder] = useState(false);

  const onInputChange = (event) => {
    setInput(event.target.value);
    setUserInput(event.target.value);
    setErrorBorder(false)
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setErrorBorder(true)
    getResponse();
  };

  const getResponse = async () => {
    const [response,err] = await fetchData({ input });
    setError(err)
    setApiData(response);
  };

  

  return (
    <div>
      <form className={`form ${theme} ${input==="" && errorBorder ? 'error':null}`}>
      <input
        className={theme}
        id='input-text'
        type="text"
        placeholder="Search for any word .."
        onChange={onInputChange}
        value={input}
      />
      <button onClick={onSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
    {input==="" && errorBorder?<div className="errorMessage">
    Whoops, can’t be empty…
    </div>:null}
    </div>
    
  );
};

export default Input;
