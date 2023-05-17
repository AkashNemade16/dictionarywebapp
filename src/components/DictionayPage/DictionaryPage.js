import { useEffect,useState } from "react";
import useAxios from "../../Api/Axios";
import './DictionaryPage.sass'

const DictionaryPage = () => {
    const input = 'hello'
    const {response,loading, error} = useAxios({input})
    const [data,setData]=  useState([])
    console.log(data)
    useEffect(()=>{
        setData(response)
    },[response])

    return (
        <div className="dictionary-page">
           
        </div>
    )
}

export default DictionaryPage