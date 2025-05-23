import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../../redux/features/productSlice'
import Cards from '../card/Card';

const Products = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
  return (
    <div className='container'>
      <div className=' d-flex flex-wrap mt-5 gap-5'>
        {
            products && products.length > 0 ? (
                products.map((product) => (
                    <Cards key={product._id} product={product} />
                ))
            ) : (
                <p>not found</p>
            )
        }
      </div>
    </div>
  )
}

export default Products
