import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addValue, decrement, increment, reset } from '../../app/counterSlice'

export const ReduxCounter = () => {
  const[userInput, setUserInput] = useState("")
  const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch()
  const[state, setState] = useState(0)

  const onChange = (e) =>{
    const {value} = e.target
    const filterValue = value.replace(/[^0-9]/g, "")
    setUserInput(filterValue)
  }

  const onReset = () =>{
    dispatch(reset())
    setUserInput("")
  }

  const onAddValue = () =>{

    dispatch(addValue(Number(userInput)))
    setUserInput("")
  }
  
  let onChangeState = () =>{
    setState((prev)=>prev+1)
    setState(state+1)
    setState(state+1)
    setState((prev)=>prev+1)

    console.log("onChangeState",state)
  }

  return (
    <div>
      <h4>ReduxCounter</h4>
      <div>
      <p>{count}</p>
      <input type="text" value={userInput} onChange={onChange} />
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onAddValue}>AddValue</button>  
      <button onClick={onChangeState}>State</button>
      </div>
    </div>
  )
}
