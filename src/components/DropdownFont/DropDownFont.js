import React,{useContext, useState} from 'react'
import { UserContext } from '../../UserContext/UserContext';
import './DropDownFont.sass'

export const DropDownFont = () => {
    const {font,setFont} = useContext(UserContext);

    const handleChange = (e) => {
       setFont(e.target.value)
    }
  return (
    <div className='dropdown'>
       <select className={`select ${font}`} value={font} onChange={handleChange}>
            <option  value='Iconsolata'>Iconsolota</option>
            <option  value='Inter'>Inter</option>
            <option  value='Lora'>lora</option>
       </select>
    </div>
  )
}
