import React from 'react'

export const Closures = () => {

  //https://dmitripavlutin.com/javascript-closures-interview-questions/


  //output test practice
 //https://www.codeguage.com/courses/js/functions-function-methods-quiz

  function createIncrement() {
    let count = 0;
    function increment() { 
      console.log(`increment${count}`);
        count++;
      
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment();  //count will incremented by 3
  log(); //log will return 0

  function createStack() {
    return {
      items: [],
      push(item) {
        this.items.push(item);
      },
      pop() {
        return this.items.pop();
      }
    };
  }
  
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  
  console.log(stack.items) // => [10]
  stack.items = [10, 100, 1000];
  console.log("items", stack.items)

  stack.push(1)
  stack.push(2)
  stack.push(3)
  
  console.log("items", stack.items)

  //Refactor the above stack implementation, using the concept of closure, such that there is no way to access items array outside of createStack() function scope


  function createStack() {
    const items = [];
    return {
      push(item) {
        items.push(item);
      },
      pop() {
        return items.pop();
      }
    };
  }
  
  const stack1 = createStack();
  stack1.push(10);
  stack1.push(5);
  stack1.pop(); // => 5
  
  // stack1.items;  //undefined

  let multiply = (value1, value2) =>{
   return value2 !== undefined ? value1 * value2 : function(value2){ return value1 * value2  }
  }

  console.log("multiply", multiply(2, 3))
  let double = multiply(2)
  console.log("double", double(10))


  // let find = (index) =>{
  //   let a = []
  //   for(let i=0; i<100000; i++){
  //     a[i] = i * i
  //   }

  //   return a[index]
  // }

  // this will lag the function every time we try to run it

  let find = (index) =>{
    let a = []
    for(let i=0; i<100000; i++){
      a[i] = i * i
    }

    return function(index){
      console.log(a[index])
    }
  }

let closure = find() 
console.time(6)
closure(6)
console.timeEnd(6)

console.time(50)
closure(50)
console.timeEnd(50)


function counterFunc(){
  let counter = 0

  let add = (val) =>{
    counter += val
  }

  let log = () =>{
    console.log("counter", counter)
  }

  return {
    add, log
  }
}

let callCounter = counterFunc()
callCounter.add(10)
callCounter.add(15)

console.log("callCounter", callCounter.log())


//modules pattern

let Module = (function(){
  function privateMethod(){
    console.log("private")
  }

  return {
    publicMethod: function(){
      console.log("public")
    }
  };
})()

Module.publicMethod()  // show public
Module.privateMethod() // showing error 


 function Memoize(fun, context){
  const res ={}
  return function (...args) {
    let argsCache = JSON.stringify(args)
    if(!res[argsCache]){
      res[argsCache] = fun.call(context || this, ...args)
    }
    return res[argsCache]
  }
}

let lengthyProd = (num1, num2) =>{
  for(let i=0; i<100000; i++){}
  return num1 * num2
}

const callMemo = Memoize(lengthyProd);

console.time("First Call");
console.log(callMemo(2, 3));
console.timeEnd("First Call");

console.time("Second Call");
console.log(callMemo(2, 3));
console.timeEnd("Second Call");

function createBase(num1, num2){
 return function(num2){
  console.log(num1+num2)
 } 
}

let addsix = createBase(6)
addsix(10);
addsix(21);


/*-------*/

// var a = 10;

// function f1() { console.log(a); }

// function f2() {
//     var a = 20;
//     f1();
// }

// f2(); //10


// var a = 10; 

// (function() {
//     function f1() { console.log(a); }

//     function f2() {
//         var a = 20;
//         f1();
//     }

//     f2();
// })(); //10


// var x = 10;

// (function() {
//     function f() { console.log(x); }

//     function g() {
//         var x = 20;
//         f();
//     }

//     g();
// }); //nothing syntax error () if we correct it return 10



// var a = 10;

// function f1() {
//     var a = 20;

//     return function() {
//         console.log(a);
//     }
// }

// var f2 = f1();
// f2();  //20 we are defined new function here not calling outside function


// var a = 10;

// function f1() {
//     return function() {
//         console.log(a); // undefined because a is called prior to it defined
//     }
//     var a = 20;  // a is defined here 
// }

// var f2 = f1();
// f2();


// var a = 1;

// function f1() {
//     var b = 2;
//     function f2() { console.log(a, b); }

//     return f2;
// }

// var f2 = f1();
// var b = 3;

// function f3() {
//     var a = 5;
//     f2();
// }

// f3(); // 1, 2 because when f2 called at the end it search a is defined in its scope otherwise it search in its parent scope

// var a = 10;

// function outerFunc(a) {
//   function inner() {
//     var b = 20;
//     console.log(a + b);
//   }

//   return inner;
// }

// var func = outerFunc(a); // function execute here here and store the value to func when we call it it return old 10 

// a = 30;

// func();


function Stack() {
  const items = [];

  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  }
}

const stackNew = Stack();
stackNew.push(3)
stackNew.push(2)
stackNew.push(1)
console.log(stackNew.pop()); // logs 1

stackNew.length = 0; // Does nothing!
console.log(stackNew.pop());

  return (
    <div>Closures</div>
  )
}
