import React from 'react'
import Time from './Time'
import DateComponent from './Date'

const Topbar = () => {
  return (
    <div className="bg-blue-500 text-white p-1 flex justify-around">
       <Time />
    <DateComponent /> 
    </div>
  )
}

export default Topbar