import React from 'react'

export const ArrayOfObjects = () => {


  let objName = [ {name: "something1"}, {name: "something2"} ]

  let namePrint1 = (obj) => obj.map(({name})=> ({name: name}))

  let namePrint2 = (obj) => obj.reduce((acc, {name})=> acc.concat({name: name}), [])

  let namePrint3 = (obj) => {
    let arr = []
    for(let i=0; i< obj.length ; i++){
      arr.push({name: obj[i].name})
    }

    return arr
  }

  console.log("name Print", namePrint1(objName))
  console.log("name Print", namePrint2(objName))
  console.log("name Print", namePrint3(objName))


  //share and shareholders
  let objShare = [
    {share: "share1", shareholder: "abc1"},
    {share: "share2", shareholder: "abc2"},
    {share: "share3", shareholder: "abc2"},
    {share: "share4", shareholder: "abc1"},
  ]

  let shareFunc = (arr) => arr.reduce((acc, {share, shareholder})=>{

    let index = acc.findIndex((item)=> item.share === share)

    index !== -1 ? acc[index].shareholders.push(shareholder) : acc.push({share, shareholders:[shareholder]})

    return acc
  },[])


  console.log("shareFunc", shareFunc(objShare))

  //filter Books
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    { title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Literary Fiction" },
    // Add more books as needed
];



  return (
    <div>ArrayOfObjects</div>
  )
}
