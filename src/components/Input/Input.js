import React, { useState, useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../UserContext/UserContext";
import { fetchData } from "../../Api/Axios";
import "./Input.sass";
const Input = () => {
  const {  setUserInput, setApiData, theme } =
    useContext(UserContext);
  const [input, setInput] = useState("");
  
  const onInputChange = (event) => {
    setInput(event.target.value);
    setUserInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getResponse();
  };

  const getResponse = async () => {
    const response = await fetchData({ input });
    setApiData(response);
  };

  const handleKeyBackspace = (event) => {
    if (event.key === "Backspace") {
      console.log("Backspace is pressed");
    }
  };

  return (
    <form className="Input-form">
      <input
        className={theme}
        id="input-text"
        type="text"
        placeholder="Search for any word .."
        onChange={onInputChange}
        value={input}
        onKeyDown={handleKeyBackspace}
      />
      <button onClick={onSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default Input;
