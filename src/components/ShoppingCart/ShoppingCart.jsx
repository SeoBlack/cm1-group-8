import React, { useState } from "react";
import "./ShoppingCart.css";
import Form from "./Form";
import ItemsList from "./ItemsList";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "quantity") {
      if (value < 1) {
        return;
      }
    }
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function handleAddItem() {
    if (newItem.itemName.trim() !== "" && newItem.quantity.trim() !== "") {
      setItems((i) => [...i, newItem]);
      setNewItem({ itemName: "", quantity: "" });
    }
  }

  function handleDeleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1 className="shopping-cart-title">Shopping Cart</h1>
      <Form
        newItem={newItem}
        handleInputChange={handleInputChange}
        onAddItem={handleAddItem}
      />
      <ItemsList items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default ShoppingCart;
