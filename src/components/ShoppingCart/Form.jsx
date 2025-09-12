import React from "react";

export default function Form({ newItem, handleInputChange, onAddItem }) {
  return (
    <div className="shopping-cart-form">
      <input
        type="text"
        placeholder="Enter item name..."
        name="itemName"
        value={newItem.itemName}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="number"
        placeholder="Enter quantity..."
        name="quantity"
        value={newItem.quantity}
        onChange={handleInputChange}
        className="input-field"
        id="quantity"
      />
      <button onClick={onAddItem} className="add-button">
        Add item
      </button>
    </div>
  );
}
