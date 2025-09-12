import React, { useState } from "react";
import "./ShoppingCart.css";
import Form from "./Form";
import ItemsList from "./ItemsList";
import { categories } from "./constants";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: 0,
    price: "",
    category: categories[0],
    discount: "",
  });

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
      setNewItem({
        itemName: "",
        quantity: 0,
        price: "",
        category: categories[0],
        discount: "",
      });
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
