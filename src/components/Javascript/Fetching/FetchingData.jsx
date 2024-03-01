import React from 'react'

export const FetchingData = () => {
  const request = [
    ['GET', 'http://localhost:3000/api/?token=token1432deep&name=pradeep&age=24&address=noida&city=sec57'],
    ['POST', 'http://localhost:3000/api/?token=token1&password=Test@!122&name=amit&age=22&address=gurgaon'],
    ['GET', 'http://localhost:3000/api/?token=token1gsdh2&name=sandeep&age=29&isDeveloper=true']
];

const validTokens = ['token1', 'token2'];

const passwordRegex = new RegExp(/^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/) ;

let result11 = [
    {
        method:"GET",
        isValid:false,
        name:"pradeep",
        age:24,
        address:"noida",
        city:"sec57"
    },
    {
        mathod:'POST',
        isValid:true,
        name:"amit",
        age:22,
        address:'gurgaon',
    },
    {
        method:'GET',
        isValid:false,
        name:'sandeep',
        age:29,
        isDeveloper:true
    }
    ]

const result = request.map((item)=>{
    let url = item[1].split('?')[1]
    let urlParams = new URLSearchParams(url);
    
    let searchParams = []
    for (const [key, value] of urlParams.entries()) {
            searchParams.push({[key]:value})
    }
    
    const token  = urlParams.get('token')
    let  tokenIsValid = false
    if(item[0] === 'GET'){
        tokenIsValid = validTokens.includes(token)
    }else if(item[0] === 'POST'){
        const password = urlParams.get('password')
        const validPassword = passwordRegex.test(password)
        tokenIsValid = validTokens.includes(token) && validPassword
    }
    else {
        return tokenIsValid = false
    }
    
    let data = {}
    const validParams = searchParams.filter((item)=> {
        return Object.keys(item)[0] !== 'token' && Object.keys(item)[0] !== 'password'
    }).map((item)=>{
        data[Object.keys(item)] = Object.values(item)[0]
    })
        
    return {
        method:item[0],
        isValid: tokenIsValid,
        ...data
    }
})
console.log(result)


let results2 = (arr) =>{
  let arrNew = []

  let currentURL = window.location.url

  for(let i=0; i<arr.length; i++){
    arrNew.push({url: currentURL, data: arr[i]})
  }
  return arrNew
}

console.log("results2", results2(result11))

  // console.log("location", window.location.href)

  return (
    <div>FetchingData</div>
  )
}
