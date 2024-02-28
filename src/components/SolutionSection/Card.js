import React from 'react'
import CardImage from './CardImage'

function Card() {

  return (
    <div>
      <CardImage url=" " />
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
      
    </div>
  )
}

export default Card
