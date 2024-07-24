import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, fetchProducts, like } from '../../../app/productsSlice'

export const ProductsLikeDislike = () => {
  let { products, loading, error } = useSelector((state)=>state.products)
  let dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  console.log("products", products)
  
  const onLike = (id) => {
    dispatch(like({ id: id }));
  };

  const onDislike = (id) => {
    dispatch(dislike({ id: id }));
  };

  if(loading){
    return <h4>Loading...</h4>
  }

  if(error){
    return <h4>{error}</h4>
  }

  return (
    <div>
      <h4>ProductsLikeDislike</h4>
        {products.length > 0 && products.map((product, index)=>(
          <div key={index}>
            <h5>{product.title}</h5>
            <button onClick={()=>onLike(product.id)}>like:{product.like}</button>
            <button onClick={()=>onDislike(product.id)}>dislike:{product.dislike}</button>
          </div>
        ))}
    </div>
  )
}
