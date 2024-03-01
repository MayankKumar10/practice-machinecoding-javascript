import React, { useState } from 'react'

export const NestedCheckbox1 = () => {
  const[selectBrand, setSelectBrand] = useState([]);
  const[selectCarMap, setSelectCarMap] = useState({});

  let carData = [
    {
      brand: "Maruti",
      cars: ["Swift", "Desire", "Baleno"]
    },
    {
      brand: "Hyundai",
      cars: ["I10", "I20", "Creta"]
    }
  ]

  let handleBrands = (brand) =>{
    if(selectBrand?.includes(brand)){
      setSelectBrand(selectBrand.filter((b)=> b!==brand))
      setSelectCarMap((prev)=>{
        let newMap = {...prev}
        delete newMap[brand]
        return newMap
      })
    } else {
      setSelectBrand((prev)=> [...prev, brand])
      setSelectCarMap((prev)=>({...prev,
        [brand] : prev[brand] || []
      }))
    }
  }

  let handleCars = (brand, car) =>{
    let newCarMap = {...selectCarMap}

    if(!newCarMap[brand]){
      newCarMap[brand] = []
    }
     if(newCarMap[brand]?.includes(car)){
      newCarMap[brand] = newCarMap[brand].filter((c)=> c!== car)
    } else {
      newCarMap[brand] = [...newCarMap[brand], car]
    }

    setSelectCarMap(newCarMap)
  } 


  let handleSelectAllCars = (brand) =>{
    setSelectCarMap((prev)=>{
      let allCars = carData.find((item)=> item.brand === brand)?.cars || []

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
      <h4>NestedCheckbox3</h4>
      {carData?.map((data)=> (
        <div key={data}>
          <input 
          type="checkbox" 
          checked={selectBrand?.includes(data.brand)}
          onChange={()=> handleBrands(data.brand)}  
          />
          {data.brand}
          {selectBrand?.includes(data.brand) && (
            <div key={data}>
            <input 
              type="checkbox" 
              checked={selectCarMap[data.brand]?.length === data.cars?.length}
              onChange={()=> handleSelectAllCars(data.brand)}  
              />
              Select All Cars
              {data.cars?.map((car)=>(
                <div key={car}>
                <input 
                  type="checkbox" 
                  checked={selectCarMap[data.brand]?.includes(car)}
                  onChange={()=> handleCars(data.brand, car)}  
                  />
                  {car}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {selectBrand?.map((brand)=> selectCarMap[brand]?.map((car)=> ( <div key={`${brand}_${car}`}>{car}</div> )))}
    </div>
  )
}
