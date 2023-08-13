
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import Error from './Components/Error';
import { BrowserRouter as Main, Route, Routes} from 'react-router-dom';

function App() {

  // const [btnText, setBtnText] = useState(btnText);

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


  const[mode, setMode] = useState ('light');
  
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#333";
      // setBtnText("Enable Light Mode");
      showAlert("Dark Mode Enabled","Success");
      document.title = 'TextUtils - Home (Dark Mode)'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // setBtnText("Enable Dark Mode");
      showAlert("Light Mode Enabled","Success");
      document.title = 'TextUtils - Home (Light Mode)'
    }
  }

  return (
    <>
    <Main>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>

      <div className='container'>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUtils: Word Counter | Character counter | Remove Spaces" mode={mode}/>}/>
          <Route exact path="/about" element={<About heading="About TextUtils" mode={mode} />}/>
          <Route path="/*" element={<Error/>}/>
        </Routes>
      </div>
    </Main>

    </>
  );
}

export default App;
