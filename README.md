# Self-Assessment

## 1- Sorin: Optimizing Component Architecture and Reusability

Initially, our ShoppingCart component had all functionality in one large component, making it difficult to maintain and test. Here's the original monolithic approach:

```jsx
// ShoppingCart.jsx - Original monolithic implementation
function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: 0,
    price: "",
    category: categories[0],
    discount: "",
  });

  // All form logic mixed with display logic
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "quantity") {
      if (value < 1) return;
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

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      {/* All form inputs and display logic in one component */}
      <div className="form">
        <input
          type="text"
          name="itemName"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        {/* ... more form fields ... */}
      </div>
      {/* ... display logic ... */}
    </div>
  );
}
```

This approach made the component hard to test, maintain, and reuse. We refactored it into smaller, focused components:

```jsx
// ShoppingCart.jsx - Refactored with component separation
function ShoppingCart() {
  //...component logic
}

// Form.jsx - Separated form component
export default function Form({ newItem, handleInputChange, onAddItem }) {
  //...component logic
}

// ItemsList.jsx - Separated display component with performance optimization
export default function ItemsList({ items, onDeleteItem }) {
  //...component logic
}
```

**Key Improvements:**

- **Separation of Concerns**: Form logic separated from display logic
- **Reusability**: Form and ItemsList components can be reused elsewhere
- **Performance**: Added useMemo for expensive calculations
- **Maintainability**: Each component has a single responsibility
- **Testing**: Smaller components are easier to unit test
- **Unique Keys**: Added proper unique IDs for React keys

## Lessons Learned

1. **User Experience Matters**: Providing clear feedback for validation errors and success actions significantly improves user experience
2. **Component Separation**: Breaking down large components into smaller, focused ones improves maintainability and testability
3. **Performance Optimization**: Using useMemo for expensive calculations prevents unnecessary re-renders
4. **Data Validation**: Comprehensive validation on both client and server side prevents data inconsistencies
5. **State Management**: Proper state management with error handling makes applications more robust
6. **Code Reusability**: Creating reusable components reduces code duplication and improves consistency

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
