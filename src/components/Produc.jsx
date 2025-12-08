import React from 'react'

const Produc = ({product, addToCart}) => {
      const {id, name, profession, country} = product;

      

  return (
    <div className='border m-2 p-4'>
      <h2>{id}</h2>
      <h2>{name}</h2>
      <h2>{profession}</h2>
      <h2>{country}</h2>
      <button onClick={() => addToCart(product)} className='bg-green-500 p-2 rounded'>Add to Cart</button>
    </div>
  )
}

export default Produc