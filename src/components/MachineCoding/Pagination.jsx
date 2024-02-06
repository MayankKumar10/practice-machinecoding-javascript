import React, { useEffect, useState } from 'react'

export const Pagination = () => {
  const [datas, setDatas] = useState(null)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10)


  
  let URL = "https://jsonplaceholder.typicode.com/posts"

  useEffect(()=>{
    let fetchData = async() =>{
      let res = await fetch(URL);
      let result = await res.json()
      setDatas(result)
    }

    fetchData()

  },[])



  const changeOption = (e) =>{
    let { value } = e.target;
    setLimit(value)
  }

  const allOptions = [10, 15, 20, 30, 40, 50].map((option)=>(
    <option key={option} value={option}>{option}</option>
  ))


  return (
    <div>
      <h4>Pagination</h4>
      <div>
        <select name="" onChange={changeOption}>
        {allOptions}
        </select>
          
      </div>

      {datas?.length > 0 &&(
        datas.slice(page * limit - limit, page * limit).map((data)=>(
          <div key={data.id}>
            <p>{data.id}</p>
            <p>{data.title}</p>
          </div>
        ))
      )}

      <div className='pagination-container'>
          <span onClick={()=> page < 1 ? setPage((prev)=>prev - 1) : "" }>◀️</span>
          {datas?.length > 0 && [...Array(Math.ceil(datas?.length / limit))].map((_,i)=>(
            <span key={i} onClick={()=>setPage(i+1)}>{i+1}</span>
          ))}
          <span onClick={()=> page < page.length - 1 ? setPage((prev)=>prev + 1) : "" }>▶️</span>
      </div>
    </div>
  )
}
