import React, { useState } from 'react'

export const Todos = () => {
  const[todoData, setTodoData] = useState([])
  const[todoText, setTodoText] = useState('')

  const onSubmit = () =>{
    setTodoData([...todoData, {id: Date.now(), text: todoText}])
    setTodoText('')
  }

  const onRemove = (id) =>{
    const filterData = todoData.filter((todo)=>todo.id !== id)
    setTodoData(filterData)
  }

  const onEdit = (id) =>{
    const findData = todoData.find((todo)=> todo.id === id)
    setTodoText(findData.text)
    onRemove(id)
  }


  return (
    <div>
      <h4>Todos</h4>
      <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
      {todoData.length > 0 && todoData.map((todo)=>(
        <div key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={()=>onEdit(todo.id)}>Edit</button>
          <button onClick={()=>onRemove(todo.id)}>Remove</button>
        </div>
      ))}
    </div>

  )
}
