import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addWishlist, deleteWishlist } from '../../redux/features/wishlistSlice';
import { useNavigate } from 'react-router-dom';


const Cards = ({product}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
 const [heart, setHeart] = useState();
 const toggle = () => {
    setHeart(!heart);
 }
  return (

        <Card className='m-1 col-lg-3 col-sm-12' style={{ width: '18rem', height: '35rem' }}>
      <Card.Img variant="top" src={product.image} onClick={() => {
        navigate(`detail/${product._id}`)
      } } />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.category }
        </Card.Text>
        <Card.Text>
          {product.price }
        </Card.Text>
      
{
    heart ? (
        <Button variant="primary" onClick={(e) => {
            e.stopPropagation
            toggle(), dispatch(deleteWishlist(product))
        } }>remote wishlist</Button>
    ): (
        <Button variant="primary" onClick={(e) => {
            e.stopPropagation()
            toggle(), dispatch(addWishlist(product))
        }}>add wishlist</Button>
    )
}      </Card.Body>
    </Card>

  )
}

export default Cards
