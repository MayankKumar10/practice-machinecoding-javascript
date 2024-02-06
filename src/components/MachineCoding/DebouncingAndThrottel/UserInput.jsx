import React, { useState } from 'react'
import { useDebounce } from './useDebounce'
import { useThrottel } from './useThrottel'

export const UserInput = () => {
  const[input, setInput] = useState('')

  const onChangeFunc = (e) =>{
    const { value } = e.target
   
    setInput(value);
  }

  const useDebounceFunc = useDebounce(input, 300)
  const useThrottelFunc = useThrottel(input, 300)


  console.log("debouncing", useDebounceFunc)
  console.log("throttel", useThrottelFunc)

  return (
    <div>
      <h4>UserInput</h4>
      <input type="text" value={input} onChange={onChangeFunc} />
      <h5>Debounce: {useDebounceFunc}</h5>
      <h5>Throttel: {useThrottelFunc}</h5>
    </div>
  )
}
