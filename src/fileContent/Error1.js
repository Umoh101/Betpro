import React from 'react'

const Error1 = () => {
  return (
    <div role="alert" style={{
      height : "100vh",
      width  : "100vw",
      display: "flex",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "rgb(62, 61, 61, 0.7)"
    }}>

      <p 
      style={{
        color : "goldenrod", 
        fontSize : "30px" , 
        fontFamily : "cursive"
        }}> Oop's Page Not Found !   </p>

    </div>
  )
}

export default Error1
