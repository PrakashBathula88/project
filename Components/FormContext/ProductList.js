import React from "react";

import { useProductContext } from "./FormProvider";
import "../FormContext/Table.css"
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
const ProductList = () => {
  const { Products, AddTocart } = useProductContext();

  const handleCart = (product) => {
    AddTocart(product);
  };
  return (
    <table className="Table_items">
      <thead >
        <tr>
          <th>MedicineName</th>
          <th>Description</th>
          <th>Price</th>
          <th><MdOutlineShoppingCartCheckout /></th>
        </tr>
      </thead>
      <tbody>
        {Products.map((product, index) => (
          <tr key={index} >
            <td >{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
              <button type="submit" onClick={() => handleCart(product)}>
                {" "}
                Add To Cart
              </button>

              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
