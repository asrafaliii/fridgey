import React, { useEffect, useState } from 'react';
import Products from './Products';

const Product = () => {
    const [products, setPorducts] = useState([]);
    console.log(products)
    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setPorducts(data));

    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                products?.map(product => <Products
                key={product._id}
                product={product}
                ></Products>)
            }
            
        </div>
    );
};

export default Product;
