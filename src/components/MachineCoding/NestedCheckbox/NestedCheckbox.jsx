import React, { useState } from 'react'

export const NestedCheckbox = () => {
  const[selectedBrands, setSelectedBrands] = useState([])
  const[selectedCarsMap, setSelectedCarsMap] = useState({})

  const carData = [
    {
      brand: "Toyota",
      cars: ["Camry", "Corolla", "Prius"],
    },
    {
      brand: "Honda",
      cars: ["Accord", "Civic", "CR-V"],
    },
  ]


  const brandHandler = (brand) =>{
    if(selectedBrands.includes(brand)){
      setSelectedBrands(selectedBrands.filter((b)=>b !== brand))
      setSelectedCarsMap((prev)=>{
        let newMap = {...prev}
        delete newMap[brand]
        return newMap
      })
    } else {
      setSelectedBrands((prev)=> [...prev, brand])
      setSelectedCarsMap((prev)=>({
        ...prev,
        [brand]: prev[brand] || []
      }))
    }
  }

const carsHandler = (brand, car) =>{
  const newCarMap = {...selectedCarsMap}

  if(!newCarMap[brand]){
    newCarMap[brand] = []
  } if(newCarMap[brand].includes(car)){
    newCarMap[brand]= newCarMap[brand].filter((c)=>c !== car)
  }
  else {
    newCarMap[brand] = [...newCarMap[brand], car]
  }
  setSelectedCarsMap(newCarMap)
}

const selectAllCars = (brand) =>{
  setSelectedCarsMap((prev)=>{
    const allCars = carData.find((item)=>item.brand === brand)?.cars || []

    let newMap = {...prev}

    if(prev[brand]?.length === allCars?.length){
      delete newMap[brand]
    } else {
      newMap[brand] = allCars
    }
    return newMap;
  })
}

  return (
    <div>
      <h4>NestedCheckbox</h4>
      {carData.map((data)=>(
        <div key={data}>
          <input 
          type="checkbox"  
          checked={selectedBrands.includes(data.brand)}
          onChange={()=>brandHandler(data.brand)}  
          /> {data.brand}

          {selectedBrands.includes(data.brand) && (
         <div key={data} style={{marginLeft: "80px"}}>
          <input 
          type="checkbox"  
          checked={selectedCarsMap[data?.brand]?.length === data?.cars?.length}
          onChange={()=>selectAllCars(data.brand)}  
          /> Select All Cars
          {data.cars.map((car)=>(
          <div key={car}>
          <input 
          type="checkbox"  
          checked={selectedCarsMap[data.brand]?.includes(car)}
          onChange={()=>carsHandler(data.brand)}  
          /> 
          {car}
          </div>
      ))}
          </div>
                    
          )}
        </div>
      )) }
      {selectedBrands?.map((brand)=> selectedCarsMap[brand]?.map((car)=>( <div key={`${brand}_${car}`}>{car}</div> )))}
    </div>
  )
}
