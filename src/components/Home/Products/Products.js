import React from 'react';

const Products = ({product}) => {
    console.log(product)
    const{name, image, description, price, quantity, supplier} = product;
    return (
       <section>
           <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
        <p class="card-text"><small class="text-muted">{price}</small></p>
        <p class="card-text"><small class="text-muted">{quantity}</small></p>
        <p class="card-text"><small class="text-muted">{supplier}</small></p>
      </div>
    </div>
  </div>
</div>
       </section>
    );
};

export default Products;