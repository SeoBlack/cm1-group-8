import React from "react";
import { categories } from "./constants";

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
      <input
        type="number"
        placeholder="Enter price..."
        name="price"
        value={newItem.price}
        onChange={handleInputChange}
        className="input-field"
        id="price"
      />
      <select
        name="category"
        value={newItem.category}
        onChange={handleInputChange}
        className="input-field"
        id="category"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={onAddItem} className="add-button">
        Add item
      </button>
    </div>
  );
}
