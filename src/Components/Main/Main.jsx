import React from 'react'
import './Main.css'
import {products} from '../Products/Products'
import Card from '../Card/Card'
function Main() {
  return (
    <div className='products'>
      {products.map(item=>(
        <Card key={item.id} {...item}/>
      ))}
    </div>
  )
}

export default Main