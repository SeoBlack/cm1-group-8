import React, { useMemo } from "react";
import {
  Trash2,
  Package,
  Monitor,
  Shirt,
  Sofa,
  Book,
  Tag,
  Hash,
  DollarSign,
} from "lucide-react";

// Icon mapping for categories
const categoryIcons = {
  Electronics: Monitor,
  Clothing: Shirt,
  Furniture: Sofa,
  Books: Book,
  Other: Package,
};

export default function ItemsList({ items, onDeleteItem }) {
  const totalPrice = useMemo(() => {
    return Math.round(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [items]);
  const totalQuantity = useMemo(() => {
    return items.reduce((acc, item) => acc + Number(item.quantity), 0);
  }, [items]);
  return (
    <>
      <div className="total-price-container">
        <div className="total-price">
          <span className="total-price-label">Total Price:</span>
          <span className="total-price-value">${totalPrice}</span>
        </div>
        <div className="total-quantity">
          <span className="total-quantity-label">Total Quantity:</span>
          <span className="total-quantity-value">{totalQuantity}</span>
        </div>
      </div>
      <ol className="shopping-cart-list">
        {items.map((item, index) => {
          const CategoryIcon = categoryIcons[item.category] || Package;
          return (
            <li key={index} className="shopping-cart-item">
              <div className="item-content">
                <div className="item-header-container">
                  <div className="item-header">
                    <CategoryIcon className="category-icon" />
                    <span className="item-name">{item.itemName}</span>
                  </div>
                  <div
                    onClick={() => onDeleteItem(index)}
                    className="delete-button"
                  >
                    <Trash2 />
                  </div>
                </div>
                <div className="item-details-container">
                  <div className="detail-item">
                    <Hash className="detail-icon" />
                    <span className="detail-label">Qty:</span>
                    <span className="detail-value">{item.quantity}</span>
                  </div>
                  {item.price && (
                    <div className="detail-item">
                      <DollarSign className="detail-icon" />
                      <span className="detail-label">Price:</span>
                      <span className="detail-value">${item.price}</span>
                    </div>
                  )}
                  <div className="detail-item">
                    <Tag className="detail-icon" />
                    <span className="detail-label">Category:</span>
                    <span className="detail-value">{item.category}</span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
