import React, { useEffect } from 'react'
import styles from './Awesome.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/features/productSlice';
import Cards from '../card/Card';

const Awesome = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);



  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='container'>
     <div className={styles.awesome}>
     <h2>Awesome</h2>
     <span>Shop</span>
     </div>
     <div className={styles.cards}>
     
            <div className='row d-flex gap-3'>
               {
                products && products.length > 0 ? (
                  products.map((product) => (
                    <Cards product={product} key={product._id}/>
                  ))
                ): (
                  <p>No products available</p>
                )
               }
            </div>
       
     </div>
    </div>
  )
}

export default Awesome
