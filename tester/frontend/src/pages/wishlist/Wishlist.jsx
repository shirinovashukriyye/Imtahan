import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishlist } from '../../redux/features/wishlistSlice';

const Wishlist = () => {
  const dispatch = useDispatch();
  const {wishlist} = useSelector((state) => state.wishlist);
  console.log(wishlist)
  return (
    <div className='container'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Setting</th>
        </tr>
      </thead>
      <tbody>
      
        {
          wishlist && wishlist.map((item)=> (
              <tr key={item._id}>
              <td><img src={item.image} alt="" /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td><button className='btn btn-danger' onClick={() => dispatch(deleteWishlist(item))}>Delete</button></td>
              </tr>
          ))
           
          
          
        }
      
   
      </tbody>
    </Table>
    </div>
  )
}

export default Wishlist
