import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, fetchProducts, highPrice, lowPrice, searchButton, sortAZ, sortZA } from '../../redux/features/productSlice'

const AdminPanel = () => {
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
  return (
    <div className='container'>
       <Table striped bordered hover>
        <thead>
          <tr>
            <th>AZ</th>
            <th>ZA</th>
            <th>input</th>
            <th>LOW</th>
            <th>High</th>
          </tr>   
        </thead>
        <tbody>

          <tr>
          <td><button className='btn btn-primary' onClick={()=> dispatch(sortAZ())}>AZ</button></td>
          <td><button className='btn btn-primary' onClick={() => dispatch(sortZA())}>ZA</button></td>
          <td><input type="text" placeholder='Email' onChange={(e) => dispatch(searchButton(e.target.value))} /></td>
          <td><button className='btn btn-primary' onClick={() => dispatch(lowPrice())}>LOW</button></td>
          <td><button className='btn btn-primary' onClick={() => dispatch(highPrice())}>HiGH</button></td>
          </tr>
        </tbody>
      <thead>
        <tr>
          <th>image</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
   {
    products && products.map((item) => (
      <tr key={item._id}>
      <td><img src={item.image} alt="" /></td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.price}</td>
      <td><button className='btn btn-danger' onClick={() => dispatch(deleteProducts(item._id))}>Delete</button></td>
    </tr>
    ))
   }
 
      </tbody>
    </Table>
    </div>
  )
}

export default AdminPanel
