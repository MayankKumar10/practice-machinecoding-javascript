import React, { useEffect, useRef, useState } from 'react'

export const Stopwatch = () => {
  const[time, setTime] = useState(0);
  const[input, setInput] = useState(0)
  const[display, setDisplay] = useState("00hrs:00mins:00sec")
  const currentRef = useRef();
  
  const start = () =>{
    currentRef.current = setInterval(()=>{
      setTime((prev)=>prev + 1)
    },1000)
  }

  const stop = () =>{
    clearInterval(currentRef.current)
  }

  const reset = () =>{
    clearInterval(currentRef.current)
    setTime(0)
  }

  const onSubmit = () =>{
    setTime((prev)=> prev + Number(input))
    setInput(0)
  }

  const changeTime = () =>{
    let hrs = Math.floor(time / 3600)
    let mins = Math.floor(time / 60)
    let sec = time % 60

    setDisplay(`${hrs}hrs: ${mins}mins: ${sec}sec`)
  }

  const onChangeInput = (e) =>{
    let {value} = e.target
    let filter = value.replace(/[^0-9]/g, "")
    setInput(Number(filter))
  }
  

  useEffect(()=>{
   changeTime() 
  },[time])

  return (
    <div>
    <h4>Stopwatch</h4>
    <p>{display}</p>
    <input type="text" value={input} onChange={onChangeInput} />
    <button onClick={onSubmit}>submit</button>
    <button onClick={start}>start</button>
    <button onClick={stop}>stop</button>
    <button onClick={reset}>reset</button>
    </div>
    
  )
}
