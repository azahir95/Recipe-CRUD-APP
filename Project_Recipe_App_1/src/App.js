import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  // const createRecipe = (newRecipe) => { 
  //   RecipeData.push(newRecipe);
  //   return RecipeData;
  // }

  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);
  const deleteRecipe = (indexToDelete) => setRecipes((currentRecipes)=> currentRecipes.filter((recipe, index)=> index !== indexToDelete));
  const editRecipe = (indexToEdit, updateRecipe) => setRecipes((currentRecipes) => currentRecipes.map((recipe, index) => {
    if(index === indexToEdit) return updateRecipe;
    else return recipe;
  }));
  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes} 
        deleteRecipe={deleteRecipe} 
        editRecipe={editRecipe}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
