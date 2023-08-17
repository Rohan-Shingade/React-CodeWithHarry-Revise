import React from 'react'
import "./Contact.css"

export default function Contact(props) {
  let mystyle = {
      color:'#fff',
      border: '0.5px solid #fff',
      padding:'20px',
      fontSize: '20px',
      borderRadius: "10px",
      
  }
  let mystyle2 = {
      color:'#000',
      border: '0.5px solid black',
      padding:'20px',
      fontSize: '20px',
      borderRadius: "10px",
  }
  return (
      <div className="container my-2">
          <div className="container">
                  <h2 className="text-center mb-4" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
                  <div className="info">
                      <p style={props.mode==='dark'?mystyle:mystyle2}>
                      Created by : Rohan Shingade<br/><br/>
                      Email Address : shingaderohan96@gmail.com<br/><br/>
                      GitHub link : https://github.com/Rohan-Shingade/React-CodeWithHarry-Revise/tree/main/textutils
                      </p>
                  </div>
          </div>
      </div>
  )
}
