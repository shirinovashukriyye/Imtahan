import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, searchProduct, sortBy } from '../../redux/productSlice'
import Product from '../product/Product'
import "./Products.css"

const Products = () => {
    let { products } = useSelector((state) => state.products)
    console.log(products)
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <section id="products-area">
            <div className="container">
                <div className="sort">
                    <div className="search">
                        <input type="text" placeholder='Search' onChange={(e) => dispatch(searchProduct(e.target.value))} />
                    </div>
                    <div className="sortby">
                        <button onClick={() => dispatch(sortBy("high"))}>SortByHigh</button>
                        <button onClick={() => dispatch(sortBy("low"))}>SortByLow</button>
                    </div>
                </div>
                <div className="products">
                    {
                        products && products.map((item) => <Product key={item._id} product={item} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Products