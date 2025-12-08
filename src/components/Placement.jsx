import React from 'react'
import Show from './Show';

const Placement = ({cart}) => {
      
  return (
    <div className='border m-2 p-4'>
      {cart.map(item => 
      <Show key={item.id}
      data={item}
      ></Show>)}
    </div>
  )
}

export default Placement