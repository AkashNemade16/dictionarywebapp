import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';
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
        
    </div>
  )
}

export default ThemeToggle