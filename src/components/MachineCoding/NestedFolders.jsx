import React, { useState } from 'react'

const NestedFolders = ({explorer}) => {
  const[isClicked, setIsClicked] = useState(false)


  if(explorer.isFolder){
    return (
      <>
      <span onClick={()=>setIsClicked(!isClicked)} style={{cursor: 'pointer'}}>{explorer.name}
        <br/>
      </span>
      <div style={{display: isClicked ? "block" : "none", paddingLeft: "80px"}}> 
      {explorer.items.map((item)=> (
        <NestedFolders key={item.name} explorer={item} />
      ))}
      </div>
      </>
    )
  } else {
    return ( <span key={explorer.name} style={{cursor: 'pointer'}}>{explorer.name}
    <br/>
    </span> )
  }
 
}

export default NestedFolders