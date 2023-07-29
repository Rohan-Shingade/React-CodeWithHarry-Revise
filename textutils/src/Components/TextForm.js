import React, {useState} from 'react'

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
    <div>
      <h2 className='my-5'>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>

      <div className='buttons-area'>
        <button type="button" className="btn btn-primary mx-3 my-4" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-3 my-4" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-3 my-4">Copy Text</button>
        <button type="button" className="btn btn-primary mx-3 my-4">Remove Spaces</button>
        <button type="button" className="btn btn-primary mx-3 my-4">Delete All</button>
      </div>
    </div>
  )
}
