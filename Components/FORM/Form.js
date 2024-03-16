import React, { useState } from "react";
import { useProductContext } from "../FormContext/FormProvider";
const AddProductForm = () => {
  const [Name, SetName] = useState("");
  const { AddProduct } = useProductContext();
  const [Desciptr, SetDiscript] = useState("");
  const [Price, SetPrice] = useState("");

  const TogleSubmit = (event) => {
    event.preventDefault();

    const product = {
      name: Name,
      Desc: Desciptr,
      Pri: Price,
    };
    AddProduct(product);

    SetName("");
    SetDiscript("");
    SetPrice("");
  };
  return (
    <form onSubmit={TogleSubmit}>
      <div>
        <label>MedicineName</label>
        <input
          type="text"
          placeholder="MediciNe name"
          value={Name}
          onChange={(e) => SetName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={Desciptr}
          onChange={(e) => SetDiscript(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Price $</label>
        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => SetPrice(e.target.value)}
        ></input>
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};
export default AddProductForm;
