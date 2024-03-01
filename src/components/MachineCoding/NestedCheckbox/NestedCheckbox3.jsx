import React, { useState, useEffect } from 'react';

export function NestedCheckbox3() {
  const [carData, setCarData] = useState([]);
  const [selectedCarMap, setSelectedCarMap] = useState({});
  const [displayCars, setDisplayCars] = useState(null);

  let fetchData = async () =>
    fetch('https://mocki.io/v1/006b21ea-0165-40f4-90f5-c53b5477144d');

  useEffect(() => {
    fetchData()
      .then((res) => res.json())
      .then((result) => setCarData(result))
      .catch((err) => console.log('err', err));
  }, []);

  console.log('CarData', carData);

  //brand checkbox will select all the childern cars
  //brand checkbox will not open the children but it will select all children
  //down arrow will show all childrens
  //options[i].display = brand (count containing number of cars)
  //children is array which consist all the models
  //children[i].display = model name


  let handleCars = (brand, car) => {
    let newSelectedCarMap = { ...selectedCarMap };

    if (!newSelectedCarMap[brand]) {
      newSelectedCarMap[brand] = [];
    }
    if (newSelectedCarMap[brand].includes(car)) {
      newSelectedCarMap[brand] = newSelectedCarMap[brand].filter(
        (c) => c !== car
      );
    } else {
      newSelectedCarMap[brand] = [...newSelectedCarMap[brand], car];
    }
    setSelectedCarMap(newSelectedCarMap);
  };

  let selectAllCars = (brand) => {
    setSelectedCarMap((prev) => {
      let allCars =
        carData.options.find((item, i) => item.display === brand)?.children ||
        [];
      let newMap = { ...prev };
      if (selectedCarMap[brand]?.length === allCars?.length) {
        delete newMap[brand];
      } else {
        newMap[brand] = allCars;
      }
      return newMap;
    });
  };

  console.log("selectAllCars", selectedCarMap)

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div className='checkbox_container'>
      {carData.options?.map((data, i) => (
        <div key={data.display} className={`brand_div`}>
          <div >
          <input
            type="checkbox"
            checked={
              selectedCarMap[data.display]?.length === data.children.length
            }
            onChange={() => selectAllCars(data.display)}
          />
          {
            displayCars === i ? 
            <span style={{cursor: 'pointer'}} onClick={()=>setDisplayCars(null)}>⬆️</span>
            :
            <span style={{cursor: 'pointer'}} onClick={()=>setDisplayCars(i)}>🔽</span>
          }
           {data.display}
          </div>
          {data.children.map((car) => (
             <div key={car} style={{ marginLeft: 40 , display: displayCars === i ? "block" : "none"  }}>
              <input
                type="checkbox"
                checked={selectedCarMap[data.display]?.includes(car)}
                onChange={() => handleCars(data.display, car)}
              />
              {car.display}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}
