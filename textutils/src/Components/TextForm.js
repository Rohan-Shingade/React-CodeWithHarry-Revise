import React, { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to Upper Case", "Success");
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to Lower Case", "Success");
  };

  const handleCopy = () => {
    // console.log("copy button working ?");
    // var text = document.getElementById("myBox");
    // text.select();
    // navigator.clipboard.writeText(text.value);
    navigator.clipboard.writeText(text);
    document.getSelection().removeAllRanges(); // text will not be remain selected after copy
    props.showAlert("Text Copied", "Success");
  };

  const handelExtraSpaces = () => {
    if(text !== '') {
      let newText = text.split(/[ ]+/); //
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "Success");
    } else {
      props.showAlert("There's Nothing Remove Spaces Into TextBox","warning");
    }
    
  };

  const handleClear = () => {
    setText("");
    props.showAlert("TextArea Cleared", "Success");
  };
  // this is for preview text box
  const handleOnChangeAlert = () => {
    alert("Cannot edit in preview");
}

  return (
    <div className="container my-2" style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h2 className="mb-3">{props.heading}</h2>
      <div className="mb-3">
      <label className="mb-3"> Enter Your Text Here: </label>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white", color: props.mode === "dark" ? "white" : "black"}} id="myBox" rows="8"></textarea>
      </div>

      <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleUpperCase}> Convert to Upper Case </button>
      <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handleLowerCase}> Convert to Lower Case </button>
      <button type="button" disabled={text.length === 0} className="btn btn-success mx-2 my-3" onClick={handleCopy}> Copy Text </button>
      <button type="button" disabled={text.length === 0} className="btn btn-primary mx-2 my-3" onClick={handelExtraSpaces}> Remove Extra Spaces </button>
      <button type="button" disabled={text.length === 0} className="btn btn-danger mx-2 my-3" onClick={handleClear}> Delete All </button>

      <h3>Your Text Summary </h3>
      <div className="container" id="textSummery" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <p className="mx-5"> Number of Words: {text.split(/\s+/).filter((element) => {return element.length !== 0}).length}{" "} words </p>
        <p className="mx-5"> Number of Characters: {text.length} characters </p>
        <p className="mx-5"> Reading Time: {0.08 * text.split(" ").filter((element) => { return element.length !== 0}).length}{" "} Minutes to read </p>
      </div>
      <h4>Text Preview</h4>
      {/* <p>{text.length > 0 ? text : "Nothing to Preview"} </p> */}
      <textarea className="form-control mt-3" value={text.length > 0 ? text : "Nothing to Preview"} onChange={handleOnChangeAlert} style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white", color: props.mode === "dark" ? "white" : "black"}} id="myBox" rows="5"></textarea>
        
    </div>
  );
}
