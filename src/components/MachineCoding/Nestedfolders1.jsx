import React, { useState } from 'react'

export const Nestedfolders1 = ({explorer}) => {
  const[isComplete, setIsComplete] = useState(false)

if(explorer.isFolder)
  { 
    return (
    <div key={explorer.id}>
    <span onClick={()=>setIsComplete(!isComplete)} key={explorer.name}>📁 {explorer.name}</span>
      <br />
      <div key={explorer.name} style={{display: isComplete ? "block" : "none", marginLeft: "40px"}}>
      {explorer.items.map((item)=> <Nestedfolders1 explorer={item} />)}
      </div>
    </div>
  )}
  else{
    return <div>
    <span>🗃️{explorer.name}</span>
    </div>
  }
}
