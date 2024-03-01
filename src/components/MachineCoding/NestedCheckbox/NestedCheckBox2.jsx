import React, { useState } from 'react'

export const NestedCheckBox2 = ({carData, DisplayChecbox}) => {
  const[selectedCarMap, setSelectedCarMap] = useState({})


  let handleCar = (brand, car) =>{
    let newCarMap = {...selectedCarMap}

    if(!newCarMap[brand]){
      newCarMap[brand] = []
    }
    else if(newCarMap[brand]?.includes(car)){
      newCarMap[brand] = newCarMap[brand].filter((c)=> c!==car)
    } else {
      newCarMap[brand] = [...newCarMap[brand], car]
    }
    setSelectedCarMap(newCarMap)
  }

  let selectAllCars = (brand) =>{
    setSelectedCarMap((prev)=>{
      let allCars = carData.find((c)=> c.brand === brand)?.cars || []

      let newMap = {...prev}
      if(prev[brand]?.length === allCars?.length){
        delete newMap[brand]
      } else {
        newMap[brand] = allCars
      }
        return newMap
    })
  }


  return (
    <div>
      <h4>NestedCheckBox2</h4>
      {carData?.map((data)=>(
        <div key={data}>
          <input 
          type="checkbox" 
          checked={selectedCarMap[data.brand]?.length === data.cars?.length}
          onChange={()=>selectAllCars(data.brand)}
          />
          {data.brand}
          {data.cars.map((car)=>(
           selectedCarMap[data.brand]?.includes(car) && <div key={car}>
              <input 
              type="checkbox" 
              checked={selectedCarMap[data.brand]?.includes(car)}
              onChange={()=>handleCar(data.brand, car)}
              />
              {car}
              </div>
          ))}
        </div>
      ))}
            <DisplayChecbox data={selectedCarMap} />
    </div>
  )
}
