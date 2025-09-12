import React from "react";
import { Trash2 } from "lucide-react";

export default function ItemsList({ items, onDeleteItem }) {
  return (
    <ol className="shopping-cart-list">
      {items.map((item, index) => (
        <li key={index} className="shopping-cart-item">
          {item.itemName} - {item.quantity}
          <div onClick={() => onDeleteItem(index)} className="delete-button">
            <Trash2 />
          </div>
        </li>
      ))}
    </ol>
  );
}
