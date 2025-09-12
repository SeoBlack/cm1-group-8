import React, { useState } from "react";
import "./RecipeManager.css";

function RecipeManager() {
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
        <button onClick={addRecipe}>Add Book</button>
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
