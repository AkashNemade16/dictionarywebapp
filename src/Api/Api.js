import React from 'react';
import  axios  from 'axios';


const Api = () => {
    axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
    console.log(err)
    })
}

export default Api;


