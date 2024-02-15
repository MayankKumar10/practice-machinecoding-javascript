import React, { useEffect, useState } from 'react'

export const TodosWithAPI = () => {
  const[datas, setDatas] = useState(null)

  let URL = "https://jsonplaceholder.typicode.com/todos"

	
  let fetchCall = async() => {
		let res = await fetch(URL)
    let result = await res.json()
      setDatas(result)
    console.log("result", result)
  } 

  useEffect(()=>{
    fetchCall()
  },[])


  console.log("fetchCall", datas)


  return (
    <div>
      <h4>TodosWithAPI</h4>
      {datas && datas?.length >0 && (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>

          <tbody>
            {datas.map((data)=>(
              <tr key={data.id} style={{backgroundColor: data.completed ? "green" : "red" }}>
                <td>{data.id}</td>
                <td>{data.title.substring(0,10)}</td>
                <td>{data.completed ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
