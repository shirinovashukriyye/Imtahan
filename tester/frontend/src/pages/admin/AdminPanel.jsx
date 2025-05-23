import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProducts, fetchProducts, serachProduct, sortAzProduct, sortHighProduct, sortLowProduct, sortZaProduct } from '../../redux/features/productSlice';
const AdminPanel = () => {

    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)

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
        <th>Input</th>
          <th>LOW</th>
          <th>High</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><button className='btn btn-outline-primary' onClick={()=> dispatch(sortAzProduct())}>AZ</button>
            </td>
            <td><button className='btn btn-outline-primary' onClick={()=> dispatch(sortZaProduct())}>ZA</button></td>
            <td><input type="text" placeholder='Search' onChange={(e) => dispatch(serachProduct(e.target.value))} /></td>
            <td><button className='btn btn-outline-danger' onClick={() => dispatch(sortLowProduct())}>Low</button></td>
            <td><button className='btn btn-outline-danger' onClick={() => dispatch(sortHighProduct())}>High</button></td>
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
          <td> <img src={item.image} alt="" /></td>
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
