import { useEffect,useState,useContext } from "react";
import useAxios from "../../Api/Axios";
import './DictionaryPage.sass'
import {UserContext} from "../../UserContext/UserContext";
const DictionaryPage = () => {
    const input = 'hello'
    const {userInput} = useContext(UserContext)
    const {response,loading, error} = useAxios({userInput})
    const [data,setData]=  useState([])
    console.log(userInput)
    useEffect(()=>{
        setData(response)
    },[response])
   console.log(response)
    return (
        <div className="dictionary-page">
           
        </div>
    )
}

export default DictionaryPage