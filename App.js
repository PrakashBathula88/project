import React from "react";
import "./App.css";

import Nav from "../src/Components/NAV/Nav";
import AddProductForm from "./Components/FORM/Form";
import ProductList from "./Components/FormContext/ProductList";

import { ProductProvider } from "./Components/FormContext/FormProvider";

function App() {
  return (
    <div>
      <Nav />
      <ProductProvider>
        <AddProductForm />
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default App;
