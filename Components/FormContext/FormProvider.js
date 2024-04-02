import React, { useContext, createContext, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);


export const ProductProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const[CartItems,SetCartItems]=useState([]);



  const AddProduct = (product) => {
    setProducts([...Products, product]);
  };

  const AddTocart=(ListItems)=>{
    SetCartItems([...CartItems,ListItems]);
  };

  const HandleRemove=(index)=>{
   const NewItems=[...CartItems];
   NewItems.splice(index,1);
   SetCartItems(NewItems);
  }


  return (
    <ProductContext.Provider value={{ Products, AddProduct,AddTocart,CartItems,HandleRemove}}>
      {children}  
    </ProductContext.Provider>
  );
};
