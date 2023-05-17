import React from 'react'
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Input.sass'
const Input = () => {
  return (
     <form className='Input-form'>
        <input type='text' placeholder='Search..' />
        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
     </form>
  )
}

export default Input