
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  const[mode, setMode] = useState ('light');


  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#333";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" contact="Contact Me" mode={mode} toggleMode={toggleMode}/>
      <div className='container'>
        <TextForm heading="TextUtils: Word Counter | Character counter | Remove Spaces" mode={mode}/>
        <About heading="About TextUtils"/>
      </div>
    </>
  );
}

export default App;
