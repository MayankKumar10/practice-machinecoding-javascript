import React from 'react'

export const JavascriptQuestions = () => {

  //
  // javascript questions

  let consicutiveNonRepeatingChar = (str) => {
    // let strArr = str.split("");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (
        (i === 0 || char !== str[i - 1]) &&
        (i === str.length - 1 || char !== str[i + 1])
      ) {
        arr.push(char);
      }
    }
    return arr.join("");
  };

  console.log(
    "consicutiveNonRepeatingChar",
    consicutiveNonRepeatingChar("ADDIITYAD")
  );



  // let findKElement = (arr, k) => {
  //   let count = 0;
  //   let i = 0;

  //   while (count < k) {
  //     if (arr.indexOf(i) == -1) {
  //       count++;
  //     }
  //     i++;
  //   }
  //   return i;
  // };

  // console.log("findKElement", findKElement([1, 2, 3, 4, 5], 3));

  // let sumOfAllNaturalNumers = (num) => (num * (num + 1)) / 2;

  // console.log("sumOfAllNaturalNumers", sumOfAllNaturalNumers(5));

  // let primeArr = (num, arr) => {
  //   let isPrime = true;
  //   if (num < 1) return arr;
  //   if (num === 1) {
  //     isPrime = false;
  //   } else if (num > 1) {
  //     for (let i = 2; i < num; i++) {
  //       if (num % i === 0) {
  //         isPrime = false;
  //         break;
  //       }
  //     }
  //   }
  //   if (isPrime) arr.push(num);

  //   return primeArr(num - 1, arr);
  // };

  // console.log("primeArr", primeArr(10, []));

  // let reverseWords = (str) => {
  //   let current = "";
  //   let reverse = "";

  //   for (let i = str.length - 1; i >= 0; i--) {
  //     if (str[i] === " ") {
  //       reverse = " " + current + reverse;
  //       current = "";
  //     } else {
  //       current += str[i];
  //     }
  //   }
  //   reverse = current + reverse;
  //   return reverse;
  // };

  // console.log("reverseWords", reverseWords("Hello World we can win"));

  // let rotateStr = (str, k) => [...str.slice(k), str.slice(0, k)].join("");

  // console.log("rotateStr", rotateStr("Hello", 2));

  // let hashStr = (str, k, char) =>
  //   [
  //     str.slice(0, str.length - k),
  //     str.split("").slice(-k).fill(`${char}`).join(""),
  //   ].join("");

  // console.log("hashStr", hashStr("Hellodasdas", 4, "#"));

  // //find triplets whose sum is equal to 0

  // let findTriplets = (arr) => {
  //   let newArr = [];

  //   arr.sort((a, b) => a - b);

  //   for (let i = 0; i < arr.length - 2; i++) {
  //     if (i === 0 || (i > 0 && arr[i] !== arr[i - 1])) {
  //       let left = i + 1;
  //       let right = arr.length - 1;

  //       while (left < right) {
  //         const sum = arr[i] + arr[left] + arr[right];
  //         if (sum === 0) {
  //           newArr.push([arr[i], arr[left], arr[right]]);

  //           while (left < right && arr[left] === arr[left + 1]) left++;
  //           while (left < right && arr[right] === arr[right - 1]) right--;

  //           left++;
  //           right--;
  //         } else if (sum < 0) {
  //           left++;
  //         } else {
  //           right--;
  //         }
  //       }
  //     }
  //   }

  //   return newArr;
  // };

  // console.log("findTriplets", findTriplets([-1, 0, 1, 2, -1, -4]));

  //1. Search an element in a sorted and rotated Array
  // 2. Longest Common Prefix using Sorting

  //polyfill Memoize function

  let MemoizeFunc = function (fn, context) {
    let res = {};

    return function (...args) {
      let argsCache = JSON.stringify(args);
      if (!res[argsCache]) {
        res[argsCache] = fn.call(context || this, ...args);
      }
      return res[argsCache];
    };
  };

  let delayedFunc = (num1, num2) => {
    for (let i = 0; i < 10000; i++) {}
    return num1 * num2;
  };

  let memoizedFunc = MemoizeFunc(delayedFunc);

  console.time("First Call");
  console.log(memoizedFunc(1224, 3242));
  console.timeEnd("First Call");

  console.time("Second Call");
  console.log(memoizedFunc(4324, 4324));
  console.timeEnd("Second Call");

  let calc = {
    total: 0,
    add: function (num) {
      this.total += num;
      return this;
    },
    multi: function (num) {
      this.total *= num;
      return this;
    },
    sub: function (num) {
      this.total += num;
      return this;
    },
  };

  let result = calc.add(2).multi(4).sub(2).add(10);
  console.log("calculate", result.total);

  // create folder structure
  //https://www.youtube.com/watch?v=vxggZffOqek

  // null == undefined; // true null type is object
  // null === undefined; // false undefined type is undefined

  //https://www.youtube.com/watch?v=abbdJ4Yfm54

  let recursiveSum = (n) => (n < 1 ? n : recursiveSum(n - 1) + n);

  console.log("recursiveSum", recursiveSum(3));

  let findKLargestElement = (arr, k) =>
    arr.sort((a, b) => b - a)[k < arr.length ? k - 1 : ""];

  console.log("findKLargestElement", findKLargestElement([1, 2, 3, 4, 5], 1));

  let sortingFunction = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
    }

    return arr;
  };

  console.log("sortingFunction", sortingFunction([1, 2, 3, 4, 5]));

  let sortingBubbleSort = (arr) => {
    let done = false;

    while (!done) {
      done = true;

      for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] < arr[i]) {
          done = false;
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
      }
    }
    return arr;
  };

  console.log("sortingBubbleSort", sortingBubbleSort([1, 2, 3, 4, 5]));

  var value = "outer";

  function Context() {
    this.value = "inner";
    this.func1 = function () {
      //undefined
      function main() {
        // console.log("main 1", this.value); //undefined
        console.log("main 1", this); //undefined
      }
      main();
    };
    this.func2 = () => {
      //undefined
      const main = () => {
        console.log("main 2", this.value); //inner
      };
      main();
    };
    this.func3 = function () {
      //undefined
      const main = () => {
        console.log("main 3", this.value); //inner
      };
      main();
    };
    this.func4 = () => {
      //undefined
      function main() {
        // console.log("main 4", this.value); //undefined
        console.log("main 4", this); //undefined
      }
      main();
    };
  }
  const obj = new Context();
  console.log("obj func1", obj.func1()); //undefined
  console.log("obj func2", obj.func2()); //undefined
  console.log("obj func3", obj.func3()); //undefined
  console.log("obj func4", obj.func4()); //undefined

  // let childRerender = useChildRerender();

  // console.log("childRerender", childRerender);

  const convertObject = (arr) =>
    arr.reduce((acc, values) => {
      let currentObj = acc;

      let [firstKeys, value] = values?.split(",");
      let keys = firstKeys.split(".");

      keys.forEach((key, i) => {
        if (!currentObj[key]) {
          if (i === keys.length - 1) {
            currentObj[key] = value.trim();
          } else {
            currentObj[key] = {};
          }
        }
        currentObj = currentObj[key];
      });
      return acc;
    }, {});

  const inputArray = [
    "a.b.c, somevalue",
    "x.y, othervalue",
    "p.q.r, thirdvalue",
  ];
  const outputObject = convertObject(inputArray);

  console.log("outputObject", outputObject);

  function climbStairs(n) {
    if (n <= 0) {
      return 0;
    }

    if (n === 1 || n === 2) {
      return n;
    }

    const ways = new Array(n + 1);
    ways[1] = 1;
    ways[2] = 2;

    for (let i = 3; i <= n; i++) {
      ways[i] = ways[i - 1] + ways[i - 2];
    }

    return ways[n];
  }


/*
  const steps = 10;
  const result = climbStairs(steps);
  console.log(`Number of ways to climb ${steps} steps: ${result}`);
*/



  /*-----Fetching comments-----*/

  let data = null

  let fetchData = async() =>{
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let result = await res.json();
      data = result
    return data
  }

async function fetchComments(){
 await fetchData();

  let obj = {}

  data.forEach(({postId, ...rest})=>{

    if(!obj[postId]){
      obj[postId] = {postId, comments:[rest]}
    } else {
      obj[postId].comments.push(rest)
    }
  })
  return obj
}

fetchComments()
.then((res)=>console.log("comments", res))
.catch((err)=>console.log("error", err))

let reverseInPlace = (str) => str.split(" ").reverse().join(" ").split("").reverse().join("")

reverseInPlace("Hi I am here")

let subStringOfString = (str) =>{
  let currentLength = 0;
  let maxLength = 0;
  let start = 0;
  let maxStart = 0;
  let visited = {}


  for(let i=0;i<str.length; i++){
    let char = str[i]

    if(visited[char] == null || visited[char] < start ){
      visited[char] = i
      currentLength++
    } else {

      if(currentLength > maxLength){
        maxLength  = currentLength
        maxStart = start
      }

      currentLength = i - visited[char]
      start  = visited[char] + i
      visited[char] = i
    }
  }

  if(currentLength > maxLength){
    maxLength = currentLength
    maxStart = start
  }

  return str.substr(maxStart, maxLength)
}


  console.log("Max Sub String", subStringOfString("abcabcds"))

  let flattenDepthWithReduce = (arr, depth) => arr.reduce((acc, val)=> acc.concat(Array.isArray(val) && depth>1? flattenDepthWithReduce(val, depth-1) : val), [])

  let customFlatWithForEach = (arr, depth=1) =>{
    let result = []

    arr.forEach((ar)=>{
      Array.isArray(ar) && depth > 0 ? result.push(...customFlatWithForEach(ar, depth - 1)) : result.push(ar)
    })

    return result
  }

  console.log("Custom Flat", customFlatWithForEach([1,2,[3,4,[5,6, [7,8, [9, 10]]],11, 12], 13, 14], 2))


  console.log("Flattening", flattenDepthWithReduce([1,2,[3,4,[5,6, [7,8, [9, 10]]],11, 12], 13, 14], 2))

  let objCloneCheck = {
    name: "abc",
    value: 12,
    friend:['ab', "bc", "ca", "da"],
    call:()=>{
      console.log("call this function")
    },
    obj2:{
      name: "abc",
      value: 12,
      friend:['ab', "bc", "ca", "da"],
      call:()=>{
        console.log("call this function")
      },
      obj3:{
        name: "abc",
        value: 12,
        friend:['ab', "bc", "ca", "da"],
        call:()=>{
          console.log("call this function")
        }
      }
    }
  }

  let cloneObj = structuredClone(objCloneCheck);
  let cloneObj1 = JSON.parse(JSON.stringify(objCloneCheck));


  console.log("object clone", cloneObj)
  
  // compose and pipe
  //polyfill of compose

  let add = (a) => a + 2
  let multi = (a) => a * 5
  let sub = (a) => a - 2


  let compose = (...funcs) => (args) => funcs.reduceRight((acc, fun)=>fun(acc), args)

  let composeCall = compose(add, multi, sub)

  console.log("object compose", composeCall(2))


  let panagram = (str) =>{
    
    let arr = new Array(26).fill(false)

    let index;

    for(let i=0; i < str.length; i++){
      if(str[i] >= "A" && str[i] <= "Z" )
      index = str.charCodeAt(i) - "A".charCodeAt(0)
      
      else if(str[i]>="a" && str[i]<= "z")
      index = str.charCodeAt(i) - "a".charCodeAt(0)
      else continue

      arr[index] = true
    }

    for(let i=0; i<arr.length-1; i++){
      if(arr[i]===false)return false
    }

    return true
  }


  console.log("panaram", panagram("The quick brown fox jumps over the lazy dog"))

  let timeFormat = (strTime) =>{
    let [time, format] = strTime.split(" ")
    let [hours, minutes] = time.split(":")

    if(hours==="12") hours="00"

    if(format === "PM") hours = parseInt(hours) + 12;

    return `${hours}:${minutes}`
  }

  console.log("timeFormat", timeFormat("12:00 PM"))
  console.log("timeFormat", timeFormat("1:00 pm"))
  console.log("timeFormat", timeFormat("12:00 AM"))
  console.log("timeFormat", timeFormat("2:00 PM"))


  /*
  Cache system which take key and value and delete the least item 

  name : Mayank  
  age : 30 
  add: gurgaon
  profession: SDE

  if we add hobbie

  then Name is deleted 
  and we access add before adding something 
  then that again added to cache in top 

  */


  class LRU{
    constructor(max=5){
      this.max = max
      this.cache = new Map()
    }

    get(key){
      let item = this.cache.get(key)
      if(item){
        this.cache.delete(key)
        this.cache.set(key, item)
      }
    }

    set(key, value){
      let {cache, max} = this
      if(cache.has(key)){
        cache.delete(key)
      }
      else if(cache.size === max){
        cache.delete(this.first())
      }

      cache.set(key, value)
    }

    first(){
      return this.cache.keys().next().value;
    }

  }

  let checkCache = new LRU(3);

  checkCache.set("name", "Mayank")
  checkCache.set("age", "30")
  checkCache.set("profession", "SDE")
  console.log("checkCache", checkCache.cache)
  checkCache.get("name")
  console.log("checkCache", checkCache.cache)
  checkCache.set('location', "Gurgaon")
  console.log("checkCache", checkCache.cache)


  //Javascript Objects

  let objname = [{name: "somthing1"}, {name: "somthing2"},]


  let objChange = (arr) => arr.map(({name})=>({name: name}))
 
 
  let objChange1 = (obj) => obj.reduce((acc, {name})=> acc.concat({name: name}) , [])
 
 
 console.log("objChange", objChange(objname))
 console.log("objChange1", objChange1(objname))
 
 var str = "abc"
 str[0] = "x"
 console.log(str)
 


  return (
    <div>JavascriptQuestions</div>
  )
}
