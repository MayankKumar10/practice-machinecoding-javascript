import React, { useState } from 'react'

export const NestedComments = ({
  handleInsertNode,
  comment
}) => {
const[input, setInput] = useState("")
const[replyComment, setReplyComment] = useState(false)
const[expand, setExpand] = useState(false)


let addComment = () =>{
  setExpand(true)
  handleInsertNode(comment.id, input)
  setReplyComment(false)
  setInput("")
}

let handleNewComment = () =>{
  setExpand(!expand)
  setReplyComment(true)
}

  return (
    <div>
      {comment.id===1 ? (
        <>
          <input 
          type="text"
          value={input}
          autoFocus
          onChange={(e)=>setInput(e.target.value)}
           />
          <button onClick={addComment}>Comment</button>
        </>
      ): (<>
        <span>{comment.name}</span>
        <div>
          <button onClick={handleNewComment}>Reply</button>
          <button onClick={""}>Edit</button>
          <button onClick={""}>Delete</button>
        </div>
      </>)}

      { <div style={{display: expand ? "block" : "none", paddingLeft: 40}}>
        {replyComment && 
        <div>
          <span> 
            <input 
            type="text" 
            onChange={(e)=>setInput(e.target.value)}
            />
          </span>
          <div>
            <button onClick={addComment}>Reply</button>
            <button onClick={()=>{
              setReplyComment(false)
              if(!comment.items.length)  setExpand(false)
            }}>Cancel</button>
          </div>
        </div>}

        {comment.items.map((cmnt)=>{
        return <NestedComments 
          key={cmnt}
          handleInsertNode={handleInsertNode}
          comment={cmnt}
        />
      })}
      </div> }


    </div>
  )
}
