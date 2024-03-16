import React from "react";
import { createPortal } from "react-dom";

import "../NAV/Nav.css";

const CartOptions = ({ onClose, onOrder }) => {
  return createPortal(
    <div className="cart-options">
      <button onClick={onClose} className="close-button">
        {" "}
        Close
      </button>
      <button onClick={onOrder} className="order-button">
        Order
      </button>
    </div>,
    document.getElementById("Display")
  );
};

export default CartOptions;
