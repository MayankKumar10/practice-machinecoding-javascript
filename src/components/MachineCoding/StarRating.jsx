import React, { useState } from 'react'

export const StarRating = () => {
  const[rating, setRating] = useState(0)

  let arr = [1,2,3,4,5]

  return (
    <div>
      <h4>StarRating</h4>
      {arr.length > 0 && arr.map((value)=>(
        <span key={value} onClick={()=>setRating(value)} style={{color: value <= rating ? 'gold' : 'gray', cursor:'pointer',width: '20px', height: '20px', padding: '.5rem', display: 'inline-block' }}>★</span>
      ))}
    </div>
  )
}
