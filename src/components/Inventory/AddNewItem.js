import React from 'react';

const AddNewItem = () => {
    return (
        <div className='text-center mt-5 container'>
        <h3 className='text-success'>Add New Product</h3>
        <input type="text" className="form-control" placeholder="Product Name" aria-label="Example text with button addon" aria-describedby="button-addon1"></input><br />
        <input type="text" className="form-control" placeholder="Price" aria-label="Example text with button addon" aria-describedby="button-addon1"></input><br />
        <div className="input-group mb-3">
  <label className="input-group-text" for="inputGroupSelect01">Options</label>
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Image....</option>
   
  </select><br />
</div >
<div className='d-grid gap-2'>
<button className="btn btn-success" type="button">ADD ITEM</button>
</div>
        </div>
    );
};

export default AddNewItem;