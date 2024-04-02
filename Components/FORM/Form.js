import React, { useState } from "react";
import { useProductContext } from "../FormContext/FormProvider";
import "../FORM/Form.css";
import { FaHeartbeat } from "react-icons/fa";
const AddProductForm = () => {
  const [Name, setName] = useState("");
  const [Descriptor, setDescriptor] = useState("");
  const [Price, setPrice] = useState("");
  const { AddProduct } = useProductContext();

  const toggleSubmit = (event) => {
    event.preventDefault();

    const product = {
      name: Name,
      description: Descriptor,
      price: Price,
    };

    AddProduct(product);

    setName("");
    setDescriptor("");
    setPrice("");
  };

  return (
    <form onSubmit={toggleSubmit} className="All_Input">
      <h1>
        {" "}
        <FaHeartbeat /> MEDICAL ADMIN PANEL <FaHeartbeat />
      </h1>
      <div>
        <label>Name </label>
        <input
          type="text"
          placeholder="Medicine Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Descrip</label>
        <input
          type="text"
          placeholder="Description"
          value={Descriptor}
          onChange={(e) => setDescriptor(e.target.value)}
        />
      </div>
      <div>
        <label>Price $</label>
        <input
          type="number"
          placeholder="Price"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Add Product</button>
      </div>
    </form>
  );
};

export default AddProductForm;
