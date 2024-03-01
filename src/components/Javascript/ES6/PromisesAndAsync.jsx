import React from 'react'

export const PromisesAndAsync = () => {

  console.log("start")
    let promise1Ex1 = new Promise((res, rej)=> true ? res("resolve") : rej("reject")).then((res)=> console.log(res)).catch((err)=>console.log(err))
    let promise1Ex2 = new Promise((res, rej)=> console.log("promise 2"));
  console.log("end")

  // start , promise2, end, resolve


  console.log('start');

  new Promise((resolve, reject) => {
    console.log(1)
  })

  console.log('end'); //start, 1, end


  console.log('start')

  const fn = () => (new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  }))
  
  console.log('middle')
  
  fn().then(res => {
    console.log(res)
  })
  
  console.log('end')


  let promise2Ex1 = new Promise((res, rej)=> true ? setTimeout(()=> res(1), 1000) : setTimeout(()=> rej("rejected"), 1000))
  
  promise2Ex1
  .then((res)=>{
    console.log(res)
    return res * 2
  })
  .then((res)=>{
    console.log(res)
    return res * 2
  })
  .then((res)=>{
    console.log(res)
    return res * 2
  })
  .then((res)=> console.log(res))


  setTimeout(() => console.log(1), 0);
  console.log(2);
  new Promise(res => {
    console.log(3)
    res();
  }).then(() => console.log(4));
  console.log(5);
  //2,3,5,4,1

  setTimeout(() => console.log(1), 0);

console.log(2);

new Promise(res => {
  console.log(3);
  res();
}).then(() => console.log(4));

new Promise.resolve().then(() => console.log("6"));

new Promise((res) => {
  console.log("promise Check");
  res("abc");
}).then((res) => console.log("7", res));

console.log(5);
//2,3,promise check, 5, 4, 6, 7, abc, 1

setTimeout(() => console.log("1"));
Promise.resolve("hi").then((res) => console.log(res));
Promise.resolve().then(() => console.log("res1"));
Promise.resolve(console.log("8"))
Promise.resolve().then(() => console.log("4"));
setTimeout(() => console.log("2"));
new Promise((res, rej) => {
    console.log("5");
    res("res new");
}).then((res) => console.log("res2", res));
console.log("6");
let promise = Promise.resolve();
setTimeout(() => console.log("3"));
setTimeout(() => promise.then(() => console.log("res2")));
//5, 6, hi, res1, 4, res2 res new, 1, 2, 3, res2

//5, 6 
//st 1 2 3 (res2 res hi)
// hi res1 4

//5,6 , hi, res1, 4, 1, 2, 3, res2 res hi

  /*----- Promises Polyfill -----*/
  
  /*----- Promises.all Polyfill  -----*/

  let promiseAll = (promises) => new Promise((resolve, reject)=>{
    let results = []

    let len = promises.length

    if(len === 0) return results

    promises.forEach((val, ind)=>{
      Promise.resolve(val).then((res)=>{
       
        results[ind] = res

        len --

        if(len === 0){
          resolve(results)
        } else {
          reject(results)
        }
      })
    })

  })


  /*----- Promises.allSeteled Polyfill -----*/
  /*----- Promises.race Polyfill -----*/
  /*----- Promises.any Polyfill -----*/


  return (
    <div>
      <h4>PromisesAndAsync</h4>
    </div>
  )
}
