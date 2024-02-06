import React, { useEffect, useState } from 'react'

export const useDebounce = (initialValue, delay=500 ) => {
  const[debounce, setDebounce] = useState(initialValue)

    useEffect(()=>{
      let timer = setInterval(()=>{
        setDebounce(initialValue)
      },delay)

      return()=> clearInterval(timer)

    },[initialValue, delay])

  return debounce
}
