import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { removeWishlist } from '../../redux/features/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const {wishlist} = useSelector((state) => state.wishlist)
  return (
    <div className='container'>
       <Table striped bordered hover>
            <thead>
              <tr>
                <th>image</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>price</th>
                <th>setting</th>
              </tr>
            </thead>
            <tbody>
            {
        wishlist && wishlist.length > 0 ? (
          wishlist.map((item) => (
            <tr key={item._id}>
            <td><img style={{width:"100px"}} src={item.image} alt="" /></td>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td><button className='btn btn-danger' onClick={() => dispatch(removeWishlist(item))}>Delete</button></td>
          </tr>
          ))
        ): (
          <p>not found</p>
        )
      }
            
           
            </tbody>
          </Table>
  
    </div>
  )
}

export default Wishlist
