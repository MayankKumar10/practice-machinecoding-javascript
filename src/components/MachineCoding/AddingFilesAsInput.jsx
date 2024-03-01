import React, { useState } from 'react'

export const AddingFilesAsInput = () => {
  const[image, setImage] = useState()

  console.log("Image", image)


  return (
    <div>
      <h4>AddingFilesAsInput</h4>
      <div>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />

        {image  && <div style={{textAlign: 'center'}} >
          <img src={URL.createObjectURL(image)} alt="" width="200" height='200' />
        </div>}


      </div>
    </div>
  )
}
