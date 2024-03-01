import React from 'react'

export const LetVarAndConst = () => {
  
  var name = "name ex1"

  if(true){
    let name = "name2 ex1"
    console.log(name)
  }

  console.log(name)

  // let name1 = "name1 ex2"

  // if(true){
  //   var name1 = "name2 ex"
  // }
  // console.log(name1)

  //it gave error because variable declare with let and const cannot re-declare in another function or block scope


  for(var i=0; i < 5; i++){
    setTimeout(()=>{
      console.log(i)
    }, i*1000)
  } // 5 times 5

  for(var i=0; i < 5; i++){
    setTimeout((i)=>{
      console.log(i)
    }, i*1000)
  } //undefined print 5 times

  for(var i=0; i < 5; i++){
    setTimeout(function(i){
      console.log(i)
    }, i*1000)
  } //undefined print 5 times

  for(var i=0; i <= 5; i++){
    setTimeout(function(i){
      console.log(i)
    }, i*1000, i) //in setTimeout after passing delay we pass i so it will create some 
    //function scope so every time i belongs to another value
  } //it will print 1 to 5  after 1 sec delay

  for(var i=0; i <= 5; i++){
    setTimeout((i)=>{
      console.log(i)
    }, i*1000, i) //in setTimeout after passing delay we pass i so it will create some 
    //function scope so every time i belongs to another value
  } //it will print 1 to 5  after 1 sec delay

  let index
  for(var i=0;i<5; i++){
      index = i
      setTimeout(()=>{
          console.log(index)
      }
      ,1000)
  }
  //4 5 times


  // ""==false (true)
  // false == [[[""]]] (true)
  // false == [](true)
  // true == [ ](false)
  // false ==[[[,]]](true)
  // false ==[[[]]](true)
  // "" == [[[]]](true)
  // 0 == [[[]]](true)
  // -0 == [[[]]](true)
  // null == undefined (true)
  //"abc" > "ab" (true)
  //"111" > "110" (true)
  


  return (
    <div>
      <h4>Let Var And Const</h4>
    </div>
  )
}
