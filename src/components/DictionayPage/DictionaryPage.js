import { useEffect,useState,useContext } from "react";

import './DictionaryPage.sass'
import {UserContext} from "../../UserContext/UserContext";
const DictionaryPage = () => {
    const {userInput,apiData} = useContext(UserContext)
    const [data] = apiData?.data.map((item)=>item.meanings) || []
    const partOfSpeech = data?.map((item)=>item.partOfSpeech)
    console.log(partOfSpeech)
    console.log(data)

    
    return (
        <div className="dictionary-page">
            {data?.map((item)=><div>{item.partOfSpeech}</div>)}
        </div>
    )
}

export default DictionaryPage