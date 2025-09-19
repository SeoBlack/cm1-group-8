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
## Minh : Doing the recipe manager 
I have some problems about connecting the components together , but turned out it was the routers problems , i didn't dowland it so i didn't work . So i did dowland the package and included it in the json files

```jsx
Function RecipeManager() {
  const [recipeData, setRecipeData] = useState({
    name: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    nutritionInfo: "",
  });

  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function addRecipe() {
    if (
      recipeData.name.trim() &&
      recipeData.ingredients.trim() &&
      recipeData.instructions.trim() &&
      recipeData.prepTime.trim() &&
      recipeData.nutritionInfo.trim()
    ) {
      setRecipes((prevRecipe) => [...prevRecipe, recipeData]);
      setRecipeData({
        name: "",
        ingredients: "",
        instructions: "",
        prepTime: "",
        nutritionInfo: "",
      });
    }
  }

  function deleteRecipe(index) {
    setRecipes((prevRecipe) => prevRecipe.filter((_, i) => i !== index));
  }

  return (
    <div className="recipe-collection">
      <h1>RecipeManager</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter recipe name..."
          value={recipeData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Enter ingredients name..."
          value={recipeData.ingredients}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instructions"
          placeholder="Enter a instructions..."
          value={recipeData.instructions}
          onChange={handleChange}
        />
        <input
          type="number"
          name="prepTime"
          placeholder="Enter prepration time ..."
          value={recipeData.prepTime}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nutritionInfo"
          placeholder="Enter nutrition information..."
          value={recipeData.nutritionInfo}
          onChange={handleChange}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <li key={index}>
            {recipe.ingredients} of {recipe.name} to make {recipe.instructions}{" "}
            for {recipe.prepTime} contains {recipe.nutritionInfo}
            <button onClick={() => deleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;


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
3. **Code Reusability**: Creating reusable components reduces code duplication and improves consistency

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 3-  Aashish Timalsina: Doing signup page, contact and book collection

Initially, our Shignup page  were blank, so i created the function and component for cotact but for signup page i colud have make it more readable by sepreating form to another component but i didnt do that 

 const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    publisher: "",
    ISBN: "",
  });

  const [books, setBooks] = useState([]);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  common value change so dont have to do it one by one 

const handleSubmit = (e) => {
    e.preventDefault();

    if (
      errors.email === "Email looks good" &&
      errors.password === "Password is strong" &&
      formData.nationality
    ) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  submit while checking validation

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value)
          ? "Email looks good"
          : "Wrong email address, check again",
      }));
    }

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password:
          value.length >= 8 ? "Password is strong" : "Password must be strong",
      }));
    }
  };

  -->validation check

  the code is readable but can be impoved throug file sructure and i will keep that in mind

