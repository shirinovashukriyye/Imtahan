import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  deleteProducts,
  fetchProducts,
  searchInput,
  sortAZ,
  sortHigh,
  sortLow,
  sortZA,
} from "../../redux/features/productSlice";
import { Table } from "react-bootstrap";
import { useFormik } from "formik";
import schema from "../../schema/productSchema";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      image: "",
      name: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      dispatch(addProducts(values));
      resetForm();
    },
    validationSchema: schema


    
  });
  return (
    <div className="container">
      {modal ? (
        <form action="" onSubmit={handleSubmit}>
       <div>
        <div className="text-danger">{errors.image}</div>
       <input  
            type="url"
            id="image"
            name="image"
            defaultValue={values.image}
            onChange={handleChange}
          />
       </div>
        <div>
          <div className="text-danger">{errors.name}</div>
        <input
            type="text"
            id="name"
            name="name"
            defaultValue={values.name}
            onChange={handleChange}
          />
        </div>

      <div>
        <div className="text-danger">{errors.price}</div>
      <input
            type="text"
            id="price"
            name="price"
            defaultValue={values.price}
            onChange={handleChange}
          />
      </div>
          <div>
            <div className="text-danger">{errors.category}</div>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={values.category}
            onChange={handleChange}
          />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        ""
      )}
      <button className="btn btn-success" onClick={() => toggle()}>
        Create
      </button>
      <Table striped bordered hover>
      <thead>
          <tr>
            <th>AZ</th>
            <th>ZA</th>
            <th>search</th>
            <th>Low</th>
            <th>High</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="btn btn-primary" onClick={() => dispatch(sortAZ())}>AZ</button></td>
            <td><button className="btn btn-primary" onClick={() => dispatch(sortZA())}>ZA</button></td>
            <td><input type="text" placeholder="Search" onChange={(e) => dispatch(searchInput(e.target.value))} /></td>
            <td><button className="btn btn-primary" onClick={() => dispatch(sortLow())}>Low</button></td>
            <td><button className="btn btn-primary" onClick={() => dispatch(sortHigh())}>High</button></td>
          </tr>
        </tbody>
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
          {products && products.length > 0 ? (
            products.map((item) => (
              <tr key={item._id}>
                <td>
                  <img style={{ width: "100px" }} src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteProducts(item._id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>not found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPanel;
