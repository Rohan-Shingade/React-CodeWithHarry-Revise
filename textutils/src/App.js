
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" contact="Contact Me"/>
      <div className='container'>
        <TextForm heading="TextUtils: Word Counter | Character counter | Remove Spaces"/>
        <About heading="About TextUtils"/>
      </div>
    </>
  );
}

export default App;
