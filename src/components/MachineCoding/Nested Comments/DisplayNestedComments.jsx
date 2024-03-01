import React, { useState } from 'react'
import { useNode } from './useNode'
import { NestedComments } from './NestedComments'

let comments = {
  id:1,
  items:[]
}

//github of nested comments repo
//https://github.dev/xplodivity/infinite-nested-comments

export const DisplayNestedComments = () => {
  const[commentData, setCommentData] = useState(comments)

  let {insertNode} = useNode()

  let handleInsertNode = (commentId, input) =>{
    let finalStructure = insertNode(commentData, commentId, input)
    setCommentData(finalStructure)
  }


  return (
    <div>
      <h4>DisplayNestedComments</h4>
      <NestedComments
        handleInsertNode = {handleInsertNode}
        comment= {commentData}
       />
    </div>
  )
}
