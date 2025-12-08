import React from 'react'

const Show = (item) => {
  return (
    <div>
      <h2>{item.data.id}</h2>
      <h2>{item.data.name}</h2>
      <h2>{item.data.profession}</h2>
      <h2>{item.data.country}</h2>
    </div>
  )
}

export default Show