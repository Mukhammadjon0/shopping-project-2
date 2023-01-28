import React from 'react'
import './Card.css'
function Card({name,Image,price}) {
  return (
    <div className='card'>
        <img src={Image} alt="product images" />
        <h3>{name}</h3>
        <h4>{price}</h4>
        <button>Buy</button>
    </div>
  )
}

export default Card