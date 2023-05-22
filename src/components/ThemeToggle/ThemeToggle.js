import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn, faMoon} from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../UserContext/UserContext';
import './ThemeToggle.sass'
const ThemeToggle = () => {
    const {theme,setTheme} = useContext(UserContext)
    const toggleButton = theme==='light' ? faToggleOff : faToggleOn
    const changeTheme = () => {
        setTheme((curr)=>(curr === 'light'?'dark':'light'));
    }
  return (
    <div className='themeToggle' id={theme}>
        <button onClick={changeTheme}>
        <FontAwesomeIcon className='iconToggle' icon={toggleButton}/>
       
        </button>
        <FontAwesomeIcon className='faMoon --fa-border-color:white' icon={faMoon}/>
   
    </div>
  )
}

export default ThemeToggle