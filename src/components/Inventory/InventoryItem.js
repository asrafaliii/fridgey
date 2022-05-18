import React from 'react';


const InventoryItem = ({item}) => {
    const{name, image, description, price, quantity, supplier} = item;

   

    return (
        <section id="products">
           <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-lg-6">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <h5 class="card-text"><small class="text-muted">Price: {price}</small></h5>
                        <p class="card-text"><small class="text-muted"> Quantity: {quantity}</small></p>
                        <p class="card-text"><small class="text-muted">Supplier: {supplier}</small></p>
                        <button type="button" class="btn btn-success">Deliverd</button>
                    </div>
                    </div>
                </div>
                </div>
       </section>
          
    );
};

export default InventoryItem;