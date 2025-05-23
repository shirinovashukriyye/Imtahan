import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProducts } from '../../redux/features/productSlice';

const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchProducts())
    }, [id, products])

    const findProduct = products.find((product) => product._id === id)
  return (
    <div className='container'>
      <img src={findProduct?.image} alt="" />
      <h1>{findProduct?.name}</h1>
      <p>{findProduct?.category}</p>
      <p>{findProduct?.price}</p>
    </div>
  )
}

export default Detail
