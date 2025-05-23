import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/features/productSlice'

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts)
    }, [dispatch])
    useEffect(() => {
        dispatch(fetchProducts)
    }, [products, id])

    const findProducts = products.find((product) => product._id === id)
  return (
    <div className='container'>
       <img src={findProducts?.image} alt="" />
        <h1>{findProducts?.name}</h1>
        <p>{findProducts?.category}</p>
      <p>{findProducts?.price}</p>
    </div>
  )
}

export default Detail
