import React, {useState} from 'react';
import './TextForm.css';

export default function TextForm(props) {

  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  }

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper Case", "Success");
  }
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lower Case", "Success");
  }

  const handleCopy = () => {
    console.log("copy button working ?")
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "Success");
  }

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "Success");
  }

  const handleClear = () => {
    setText("");
    props.showAlert("TextArea Cleared", "Success");
  }

  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2 className='my-5'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="10"></textarea>
      </div>

        <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleUpperCase}>Convert to Upper Case</button>
        <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleLowerCase}>Convert to Lower Case</button>
        <button type="button" className="btn btn-success mx-2 my-3" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-2 my-3" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
        <button type="button" className="btn btn-danger mx-2 my-3" onClick={handleClear}>Delete All</button>
      
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary </h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h4>Text Preview</h4>
        <p>{text.length > 0 ? text:"Nothing to Preview"} </p>
      </div>
    </div>
  )
}
