import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {UserContext} from "../../UserContext/UserContext";
import "./Input.sass";
const Input = () => {
  const {userInput,setUserInput} = useContext(UserContext)
  const [input, setInput] = useState('');
  const onInputChange = (e) => {
    setInput(e.target.value);
    setUserInput(input)
  };
  console.log(userInput)

  return (
    <form className="Input-form">
      <input
        type="text"
        placeholder="Search for any word .."
        onChange={onInputChange}
        value={input}
      />
      <button>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      your input :{input}
    </form>
  );
};

export default Input;
