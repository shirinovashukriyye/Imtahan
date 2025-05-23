import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Detail.css"

const Detail = () => {
  let { id } = useParams()
  let { products } = useSelector((state) => state.products)
  let product = products.find((item) => item._id == id)
  return (
    <div className='container'>
      <div className="row detail">
        <div className="col-6">
         <div className="detail-img">
           <img src={product.image} alt="" />
         </div>
        </div>
        <div className="col-6">
          <div className="detail-title">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
           <div className="detail-btn">
             <button>Add Basket</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail