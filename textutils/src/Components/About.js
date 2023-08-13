import React from 'react';
import "./About.css";

export default function About(props) {

  // const [myStyle, setMyStyle] = useState (
  //   {
  //     color : "black",
  //     backgroundColor: "white"
  //   })

  let myStyle = {
    color: props.mode ==='dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'#555':'white', 
}

  // const [btnText, setBtnText] = useState ('Enable Dark Mode');

  // const toggleStyle = () => {
  //   if(myStyle.color === 'white') {
  //     setMyStyle({
  //       color:"black",
  //       backgroundColor:'white',
  //     })
  //     setBtnText("Enable Dark Mode")
  //   } else {
  //     setMyStyle({
  //       color :"white",
  //       backgroundColor:'black',
  //       border: '1px solid white'

  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  // }

  return (
    
      <div className='container my-5' >
        <h2 className='text-center my-4'  style={{color: props.mode === 'dark' ? 'white' : 'black'}} > {props.heading} </h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" style={myStyle} type="button"  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About TextUtils App
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                <strong>This app was created with the main purpose of manipualtion of text.</strong> This app can convert you text into Upper Case and Lower Case. It can also clear extra spaces or indentation from you text. Don't forget to visit Specifics Section for more info about app. 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Specifics About app
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This app uses some basic or beginner level concepts like Props and State. Later we have used alert in this app, this alert we have is used form bootstrap (feel free to visit <strong> getbootstrap.com </strong> for more info). 
                We have created our app in a way that user can switch app mode in Light and Dark mode both (one at a time)
                Later we have used Router concept in our app to change the components at same place without reloading the page which will help us save some bandwidth while using this app.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible & Free to use
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={myStyle}>
                This react web app has made in such way that it will work in almost all modern browsers & will be visible to all screen sizes. This app is completly free to use. No charges will be taken to use this app.
              </div>
              <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h3> Enjoy your stay🙂</h3>
              </button>
            </div>
          </div>
        </div>

        {/* <div className="container my-3">
          <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
        </div> */}
      </div>
    
  )
}
