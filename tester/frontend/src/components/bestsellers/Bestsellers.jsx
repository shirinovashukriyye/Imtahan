import React, { useEffect } from 'react'
import styles from './Bstsellers.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/features/productSlice';
import Cards from '../card/Card';

const Bestsellers = () => {
  const dispatch = useDispatch();
  const {products} = useSelector((state) => state.products);


  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])
  return (
    <div className='container'>
      <div className={styles.bestsellers}>
           <h2>Best Sellers</h2>
           <span>Shop</span>
           </div>
           <div className={styles.cards}>
     
           <div className='row'>
               {
                products && products.length > 0 ? (
                  products.slice(0, 3).map((product) => (
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

export default Bestsellers
