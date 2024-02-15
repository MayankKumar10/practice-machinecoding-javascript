import React from 'react'

export const ThisKeyword = () => {

  //https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

  // //this is normaly pointed to window object

  // function ex1(){
  //   console.log("object belongs",this)
  //   console.log("object belongs",this?.value)
  //   //this is refer here to where this function is called
  // } 

  // ex1() // function is called in window object so this belong to window object

  // let obj = {
  //   value: "Mayank",
  //   ex1
  // }

  // let obj1 = {
  //   name: "Mayank 1",
  //   ex2: function(){
  //     console.log(this)
  //     console.log(this.name)
  //   }
  // }

  // console.log("obj called", obj.ex1())
  // console.log("obj called 1", obj1.ex2()) //obj called is undefined but before that it prints obj and Mayank 1
  //obj1.ex2() // ex2 is reffering to which obj is called it or you can see left side what this is calling.  


  //Arrow function don't have its this scope , it will inherit this from its nearest regular function for this scope.


//   let obj2 = {
//     firstName: "Mayank 2",
//     lastName: "Kumar 2",
//     hobbies:['piano', "guitar"],
//     ex1: function(){
//       this.hobbies.forEach(function(hobbie){
//         console.log(this.firstName) 
//         console.log(hobbie) 
//       },this) 
//     //normal function inside forEach act as callback
//     //and callback function called from window object
//     //so to resolve this forEach has second parameter 
//     //{} after we called callback function where we defined this
//     // callback function will refer to this of the function
//     },
//     ex2: function(){
//       this.hobbies.forEach((hobbie)=>{
//         console.log(this.lastName) 
//         console.log(hobbie) 
//       })
//       //Arrow function find this inside normal function
//       //in normal function this is refer to obj
//       //so don't have to pass another parameter 
//     }
//   }

// console.log(obj2.ex1())
// console.log(obj2.ex2())

// function Constructor(name){
//   this.name = name;
//   console.log(this)
// }

// let construct1 = new Constructor("Mayank 1")
// let construct2 = new Constructor("Mayank 2")

// console.log({
//   construct1,
//   construct2,  
// })


// var value = "Outer"
// function Constructor(){
//   this.value = "Inner";

//   this.func1 = function(){
//     console.log("func 1", this.value) //inner
//     function main(){
//       // console.log(this.value) //undefined //function inside function pointing to window object this value not defined there
//       console.log("func 1 main",this) // undefined
//     }
//     main() //same
//   }

//   this.func2 = ()=>{
//     console.log("func 2", this.value) //inner
//     const main = () =>{
//       console.log("func 2 main",this.value) //inner
//       // return this.value // if we return this.value as well as main function then we get this.value
//     }
//   //  return main()
//     main()
//   }

//   this.func3 = function(){
//     console.log("func 3", this.value) //inner
//       const main = () =>{
//       console.log("func 3 main",this.value) //inner
//       // return this.value // if we return this.value as well as main function then we get this.value
//     }
//   //  return main()
//     main()
//   }

//   this.func4 = () =>{
//     console.log("func 4", this.value) //inner
//     function main(){
//       console.log("func 4 main",this) // undefined function pointing to window object
//     }
//     main() //undefined
//   }
// }

// const obj = new Constructor()

// console.log("obj1 func1", obj.func1()) //undefined because we didn't return anything from main function 
// console.log("obj1 func2", obj.func2()) //undefined because we didn't return anything from main function
// console.log("obj1 func3", obj.func3()) //undefined because we didn't return anything from main function
// console.log("obj1 func4", obj.func4()) //undefined because we didn't return anything from main function


var value = "outer"
let obj2 = {
  value: "inner",

  func1: function(){
    console.log("func1",this.value) //inner
  },

  func2: function(){
    console.log("func 2", this.value) //inner
     function innerFunc2 (){
      console.log("inner func2",this)
      // console.log("inner func2",this.value) //undefined window object
    }
   return innerFunc2()
  },

  func3: function(){
    console.log("func 3", this.value) //inner
     const innerFunc3 = () =>{
      console.log("inner func3",this.value) // inner
     }
     return innerFunc3()
  },

  func4: () => {
    console.log("func 4", this) //undefined
    const innerFunc4 = () =>{
     console.log("inner func 4",this) // undefined
    }
    return innerFunc4()
  },

}

console.log("obj 2 func 1", obj2.func1())
console.log("obj 2 func 2", obj2.func2())
console.log("obj 2 func 3", obj2.func3())
console.log("obj 2 func 4", obj2.func4())


function Pet(type, legs) {
  this.type = type;
  this.legs = legs;

  this.logInfo = function() {
    console.log(this === myCat); // => true
    console.log(`The ${this.type} has ${this.legs} legs`);
  };

  this.logInfo1 = () =>{
    console.log(this === myCat);
    console.log(`The ${this.type} has ${this.legs} legs`)
  }
}

const myCat = new Pet('Cat', 4);

setTimeout(myCat.logInfo1, 1000)

// Create a bound function
const boundLogInfo = myCat.logInfo.bind(myCat);
// logs "The Cat has 4 legs"
setTimeout(boundLogInfo, 1000);

  return (
    <div>thisKeyword</div>
  )
}
