
import React, { useContext, useState } from "react";

const ProductContext = React.createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [Products, SetProducts] = useState([]);

  const AddProduct = (product) => {
    SetProducts([...Products, product]);
  };
  return (
    <ProductContext.Provider value={{ Products, AddProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
