import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/productSlice'
import Cards from '../card/Card'

const Bestseller = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
  return (
    <div className='container'>
     
        <h3>Collections</h3>
        <div className='d-flex justify-content-center mt-5'>
        {
            products && products.length > 0 ? (
                products.slice(0, 3).map((product) => (
                    <Cards key={product._id} product={product}/>
                ))
            ) : (
                <p>not found</p>
            )
        }
      </div>
    </div>
  )
}

export default Bestseller
