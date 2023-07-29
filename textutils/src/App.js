
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" contact="Contact Me"/>
      <div className='container'>
        <TextForm heading="TextUtils: Word Counter | Character counter | Remove Spaces"/>
      </div>
    </>
  );
}

export default App;
