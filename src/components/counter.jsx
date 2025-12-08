import React, { useState } from 'react'

const Counter = () => {
      const [count, setCount] = useState(0);
      const [text, setText] = useState("");
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count}</h1>
      <button className='bg-green-300 p-2 rounded    ' onClick={()=>setCount(count + 1)}>Click me</button><br /><br />
      <input className='border-2 border-black' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <h1 className='text-2xl text-red-500'>{text}</h1>
    </div>
  )
}

export default Counter