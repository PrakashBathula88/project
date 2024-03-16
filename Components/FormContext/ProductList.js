import React from "react";

import { useProductContext } from "./FormProvider";

const ProductList = () => {
  const { Products } = useProductContext();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>MedicineName</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.Desc}</td>
              <td>{product.Pri}</td>
              <td>
                <button type="submit"> Add To Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
