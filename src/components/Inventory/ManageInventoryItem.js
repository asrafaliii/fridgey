import React from 'react';

const ManageInventoryItem = ({item}) => {
    const{name, price, quantity, supplier} = item;
    return (
        <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{supplier}</td>
        <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    );
};

export default ManageInventoryItem;