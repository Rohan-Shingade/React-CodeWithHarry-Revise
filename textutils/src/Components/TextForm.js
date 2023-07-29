import React, {useState} from 'react';
import './TextForm.css';

export default function TextForm(props) {

  const [text, setText] = useState("Enter your text here");

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowerCase = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
  }

  return (
    <div className='container'>
      <h2 className='my-5'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>

        <button type="button" className="btn btn-primary my-3" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary my-3" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary my-3">Copy Text</button>
        <button type="button" className="btn btn-primary my-3">Remove Spaces</button>
        <button type="button" className="btn btn-primary my-3">Delete All</button>
      
      <div className="container">
        <h3>Your Text Preview: </h3>
        <p>{text}</p>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
      </div>
    </div>
  )
}
