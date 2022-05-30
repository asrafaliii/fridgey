import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [products, setPorducts] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-depths-14829.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setPorducts(data));
  }, []);
  const navigate = useNavigate();

  const navigateManageInventory = (event) => {
    navigate("/addnewitem");
  };

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((item) => item._id !== id);
          setPorducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <h1>Manage Inventory</h1>
        <button
          onClick={navigateManageInventory}
          type="button"
          className="btn btn-success"
        >
          Add New Item
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Supplier</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier}</td>
              <td>
                <button
                  onClick={() => handleDelete(item._id)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageInventory;
