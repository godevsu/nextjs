import React from 'react'

function Card(props) {

  const url = require(props.url);

  return (
    <div>
      <img src= {'url'}  alt=""/>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      
    </div>
  )
}

export default Card
