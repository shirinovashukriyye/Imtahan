import React, { useEffect } from 'react'
import Cards from '../card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/features/productSlice'

const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])
  return (
    <div className='container'>
   <div>
   <div className='row d-flex gap-3 mt-5 justify-content-center' >
        {
           products && products.length > 0 ? (
            products.map((product) => (
                <Cards key={product._id} product={product} />
            ) )
           ): (
            <p>Not Found</p>
           )
        }
    </div>
   </div>
    </div>
  )
}

export default Products
