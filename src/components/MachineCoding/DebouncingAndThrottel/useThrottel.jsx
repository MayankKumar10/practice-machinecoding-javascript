import React, { useEffect, useRef, useState } from 'react'

export const useThrottel = (initialValue, delay=500) => {
  const[throttel, setThrottel] = useState(initialValue)
  const lastDelay = useRef(Date.now())

  useEffect(()=>{
    if(Date.now() >= lastDelay.current + delay){
      lastDelay.current = Date.now()
      setThrottel(initialValue)
    } else {
      let timer = setTimeout(()=>{
        lastDelay.current = Date.now()
        setThrottel(initialValue)
      },delay)

      return ()=> clearTimeout(timer) 
    }
  },[initialValue, delay])

  return throttel

}
