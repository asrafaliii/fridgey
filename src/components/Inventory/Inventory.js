import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InventoryItem from './InventoryItem';

const Inventory = () => {

    const [products, setPorducts] = useState([]);
    useEffect(() =>{
        fetch('https://aqueous-depths-14829.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setPorducts(data));

    },[])


    const navigate = useNavigate();

    const navigateManageInventory = event =>{
        navigate('/manageinventory')
    }
    return (
        <div className='container'>
          <div>
                <div className='d-flex justify-content-between mt-3'>
                <h1>Inventory</h1>
                <button onClick={navigateManageInventory} type="button" class="btn btn-success">Manage Inventory</button>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Please Enter your Qnt" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                </div>

                
                
          </div>
           
           {
                    products?.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
        </div>
    );
};

export default Inventory;