import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { addWishlist, removeWishlist } from '../../redux/features/wishlistSlice';
import { addBasket } from '../../redux/features/basketSlice';
const Cards = ({product}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [heart, setHeart] = useState(false)
  

    const toggle = () => {
        setHeart(!heart)
    }
  return (
    <div className=''>
   
    
     
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} style={{position:'relative'}} onClick={() => navigate(`detail/${product._id}`)} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.category}
        </Card.Text>
        <Card.Text>
        {product.price}
        </Card.Text> 
       {
        heart ? (
            <FaHeart style={{position: 'absolute', top: '10px', right: '10px' , color: "red"}} onClick={(e) => {toggle(), dispatch(removeWishlist(product))}}/>
        ): (
            <CiHeart style={{position: 'absolute', top: '10px', right: '10px'}} onClick={() => {toggle(), dispatch(addWishlist(product))}}/>
        )
       }
           <Button onClick={() => {dispatch(addBasket(product))}}> Added to Basket</Button>
        
       
      </Card.Body>
    </Card>
    
     
 
    </div>
  )
}

export default Cards

