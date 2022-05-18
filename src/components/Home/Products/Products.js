import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({product}) => {
    const{name, image, description, price, quantity, supplier} = product;

    const navigate = useNavigate();

    const navigateInventory = event =>{
        navigate('/update')
    }
    return (
       <section id="products">
           <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-lg-6">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h5 className="card-text"><small className="text-muted">Price: {price}</small></h5>
        <p className="card-text"><small className="text-muted"> Quantity: {quantity}</small></p>
        <p className="card-text"><small className="text-muted">Supplier: {supplier}</small></p>
        <button onClick={navigateInventory} type="button" className="btn btn-success">Update</button>
      </div>
    </div>
  </div>
</div>
       </section>
    );
};

export default Products;