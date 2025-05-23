import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addWishlist, deleteWishlist } from '../../redux/features/wishlistSlice';
const Cards = ({  product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [heart, setHeart] = useState(false);
    const toggle = () => {
        setHeart(!heart);
    }
  return (
 
  
        <Card className='m-1 col-lg-3 col-sm-12' style={{ width: '18rem' }} onClick ={() => navigate(`detail/${product._id}`)}  >
      <Card.Img variant="top" src={product.image} />
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
            <Button variant="primary" onClick={(e) => {
                e.stopPropagation()
                toggle(), dispatch(deleteWishlist(product))
            }}>remove wishlist</Button>
        ): (
            <Button variant="primary" onClick={(e) => {
                e.stopPropagation()
                toggle() , dispatch(addWishlist(product))
            }}>add Wishlist</Button>
        )
       }
      </Card.Body>
    </Card>

   
  )
}

export default Cards
