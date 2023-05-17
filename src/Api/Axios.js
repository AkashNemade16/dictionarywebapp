import { useState,useEffect } from 'react';
import  axios  from 'axios';

axios.defaults.baseURL = `https://api.dictionaryapi.dev/api/v2/entries/en/`
const useAxios = ({input}) => {
    const [response,setResponse] = useState('null');
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState('')

    const fetchData = () => {
        axios.get(input)
        .then((res)=>{
            setResponse(res)
        })
        .catch((err)=>{
            setError(err)
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    useEffect(()=>{
        fetchData();
    },[input]);

    return {response,error,loading}
}

export default useAxios


  


