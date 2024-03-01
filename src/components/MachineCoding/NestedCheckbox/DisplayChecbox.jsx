import React from 'react'

export const DisplayChecbox = ({ data }) => {
  return (
    <div>
      <h4>Selected Cars</h4>
      {Object.keys(data).map(brand => (
        <div key={brand}>
          <h5>{brand}</h5>
          <ul>
            {data[brand].map(car => (
              <li key={`${brand}_${car}`}>{car}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};