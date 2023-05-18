import { useEffect,useState,useContext } from "react";

import './DictionaryPage.sass'
import {UserContext} from "../../UserContext/UserContext";
const DictionaryPage = () => {
    const {userInput,apiData} = useContext(UserContext)
    console.log(userInput)
    console.log(apiData)
   
    return (
        <div className="dictionary-page">
           
        </div>
    )
}

export default DictionaryPage