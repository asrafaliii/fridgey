import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageInventoryItem from './ManageInventoryItem';

const ManageInventory = () => {
    const [products, setPorducts] = useState([]);
    useEffect(() =>{
        fetch('https://aqueous-depths-14829.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setPorducts(data));

    },[])
    const navigate = useNavigate();

    const navigateManageInventory = event =>{
        navigate('/addnewitem')
    }

    return (
        <div className='container'>
           <div className='d-flex justify-content-between mt-3'>
                <h1>Manage Inventory</h1>
                <button onClick={navigateManageInventory} type="button" class="btn btn-success">Add New Item</button>
           </div>
            <table class="table table-striped">
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
                {
                    products?.map(item => <ManageInventoryItem
                        key={item._id}
                        item={item}
                    ></ManageInventoryItem>)
                }
                </tbody>
            </table>
        </div>
    );
};

export default ManageInventory;