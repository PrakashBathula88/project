import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Modal from "../CartModal/CartModal";
import "../NAV/Nav.css";
import { useProductContext } from "../FormContext/FormProvider";

const CartIcon = () => {
  const { CartItems, HandleRemove } = useProductContext();
  const [showOptions, ShowOptions] = useState(false);

  const toggleOptions = () => {
    ShowOptions(!showOptions);
  };

  const closeOption = () => {
    ShowOptions(false);
  };

  const orderOption = () => {
    ShowOptions(true);
  };

  const DeleteHandler = (index) => {
    HandleRemove(index);
  };

  const ArrItems = (
    <div className="cart_output">
      <table>
        <tbody>
          {CartItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td >{item.price}</td>
              <td>
                <button type="submit" onClick={() => DeleteHandler(index)}>
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="All-items-nav">
        
        <div className="Cart_items" onClick={toggleOptions}>
         
          <span>Cart</span>
          <FaCartPlus className="Icons_cart" />
        </div>
      </div>
      {showOptions && (
        <Modal onClose={closeOption}>
          {ArrItems}
          <div className="cart-options">
            <div></div>
            <button onClick={closeOption} className="close-button">
              Close
            </button>
            <button onClick={orderOption} className="order-button">
              Order
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CartIcon;
