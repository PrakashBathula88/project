import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import CartOptions from "./CartModal";
import "../NAV/Nav.css";

const CartIcon = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleClose = () => {
    setShowOptions(false);
  };

  const handleOrder = () => {
    setShowOptions(false);
  };

  return (
    <>
      <button className="All-items-nav" onClick={toggleOptions}>
        <div className="Cart_items">
          <span>Cart</span>
          <FaCartPlus className="Icons_cart" />
        </div>
      </button>

      {showOptions && (
        <>
          <CartOptions onClose={handleClose} onOrder={handleOrder} />
        </>
      )}
    </>
  );
};

export default CartIcon;
