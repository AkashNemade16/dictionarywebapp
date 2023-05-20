import React, { useContext } from 'react';
import Home from './components/Home/Home'
import { UserContext } from './UserContext/UserContext';
import './App.sass'
function App() {
  const {theme} =  useContext(UserContext)
  return (
    <div className="App" id={theme}>
           <Home/>
    </div>
  );
}

export default App;
