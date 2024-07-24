import React from 'react'
import { useState } from 'react'

export const DynamicForm = () => {
  const initialState = {
    name: "",
    subjects: [""]
  }
  const [colleges, setColleges] = useState([initialState])
  
  const handleCollegeChange = (index, e) =>{
    const { name, value} = e.target
    const newValue = [...colleges]
    newValue[index][name] = value
    setColleges(newValue)
  }

  const handleSubjectChange = (collegeIndex, subjectIndex, e) =>{
    const {value} = e.target
    let newValue = [...colleges]
    newValue[collegeIndex].subjects[subjectIndex] = value
    setColleges(newValue)
  }
  
  const addCollege = () =>{
    setColleges([...colleges, initialState])
  }

  const addSubjects = (collegeIndex) =>{
    let newValue = [...colleges]
    newValue[collegeIndex].subjects.push("")
    setColleges(newValue)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()

    console.log(colleges)
    setColleges([initialState])
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit} >
        {colleges.map((college, index)=> (
          <div key={index}>
            <label htmlFor="">
              college
              <input 
              type="text" 
              name='name'
              value={college.name}
              onChange={(e)=>handleCollegeChange(index, e)}  
              />
            </label>
            {college.subjects.map((subject, subjectIndex)=>(
              <div>
              <label htmlFor="">
              subject
              <input 
              type="text" 
              value={subject}
              onChange={(e)=>handleSubjectChange(index ,subjectIndex, e)}  
              />
            </label>
            <button onClick={()=>addSubjects(index)}>Add Subject</button>
            </div>
            ))}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
