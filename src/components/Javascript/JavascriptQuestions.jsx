import React from 'react'

export const JavascriptQuestions = () => {

  //
  // javascrpit questions

  // let consicutiveNonRepeatingChar = (str) => {
  //   let strArr = str.split("");
  //   let arr = [];
  //   for (let i = 0; i < strArr.length; i++) {
  //     let char = str[i];
  //     if (
  //       (i === 0 || char !== strArr[i - 1]) &&
  //       (i === strArr.length - 1 || char !== strArr[i + 1])
  //     ) {
  //       arr.push(char);
  //     }
  //   }
  //   return arr;
  // };

  // console.log(
  //   "consicutiveNonRepeatingChar",
  //   consicutiveNonRepeatingChar("ADDIITYAD")
  // );

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

  // null == undefined; // ture null type is object
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
        console.log("main 1", this.value); //undefined
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
        console.log("main 4", this.value); //undefined
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


  return (
    <div>JavascriptQuestions</div>
  )
}
