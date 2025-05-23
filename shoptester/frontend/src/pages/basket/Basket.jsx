import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusBtn, plusBtn, removeBasket } from "../../redux/features/basketSlice";
import Table from "react-bootstrap/esm/Table";

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
  const total = basket.reduce((acc, sum) => acc + sum.price * sum.count, 0);
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Price</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody>
          {basket && basket.length > 0 ? (
            basket.map((item) => (
              <tr key={item._id}>
                <td>
                  <img style={{ width: "100px" }} src={item.image} alt="" />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price*item.count}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(removeBasket(item))}
                  >
                    Delete
                  </button>
                  <div className="d-flex gap-3" style={{cursor: "pointer"}}>
                    <div onClick={() => dispatch(plusBtn(item))}>+</div>
                    <div>{item.count}</div>
                    <div onClick={() => dispatch(minusBtn(item))}>-</div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <p>not found</p>
          )}
        </tbody>
        <div> total {total}</div>
      </Table>
    </div>
  );
};

export default Basket;
