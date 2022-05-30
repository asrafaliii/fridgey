import React from "react";
import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/products`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="container m-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 mt-2"
      >
        <h2>Add New Product</h2>

        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <textarea
          type="text"
          placeholder="Description"
          {...register("description")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="number"
          placeholder="Quantity"
          {...register("quantity")}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Supplier"
          {...register("supplier", { required: true })}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Photo URL"
          {...register("img")}
          className="input input-bordered w-full max-w-xs"
        />

        <input
          type="submit"
          value="ADD "
          className="btn btn-Success w-full max-w-xs"
        />
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
    </div>
  );
};

export default AddNewItem;
