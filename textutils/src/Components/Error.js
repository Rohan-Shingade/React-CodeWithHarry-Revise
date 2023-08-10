import React from 'react'

export default function Error() {
  let errorBox = {
    padding: '10px',
    margin: '20px',
    textAlign:'center',
    fontSize: '25px'
  }
  return (
    <div style={errorBox}>
      <h1> Sorry 😥 Page Not Found </h1>
    </div>
  )
}
