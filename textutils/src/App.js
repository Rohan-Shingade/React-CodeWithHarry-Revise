
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

function App() {
  const[mode, setMode] = useState ('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      showAlert("Dark Mode Enabled","Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled","Success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" contact="Contact Me" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextForm showAlert={showAlert} heading="TextUtils: Word Counter | Character counter | Remove Spaces" mode={mode}/>
        <About heading="About TextUtils"/>
      </div>
    </>
  );
}

export default App;
