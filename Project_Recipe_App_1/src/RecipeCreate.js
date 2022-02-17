import React, { useState } from "react";
import App from './App';
import './App.css'
import RecipeData from './RecipeData'

function RecipeCreate({createRecipe}) {
  const [entry, setEntry] = useState('');
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  // const [rating, setRating] = useState("");
  const [recipeData, setRecipeData] = useState([]);
  const handleEntryChange = (event) => setEntry(event.target.value);
  
  const handleSubmit= (event) => {
    event.preventDefault();
    console.log('Updated Recipe List')
    setEntry('');
    setRecipeData(createRecipe({name, cuisine, photo, ingredients, preparation}))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
    createRecipe({name, cuisine, photo, ingredients, preparation})
    // setRating('');
  }

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  // const ratingChangeHandler = (event) => setRating(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={onSubmitHandler}>
      <table>
        <tbody>
          <tr>
            <td>
            {(
                <input 
                  id="name"
                  name="name"
                  required={true}
                  value={name}
                  type="text"
                  size="9"
                  onChange={nameChangeHandler}
                  placeholder='Name'
                />
              )}
            </td>
            <td> 
              {(
                <input
                  id="cuisine"
                  name="cuisine"
                  type="text"
                  placeholder="Cuisine"
                  size="9"
                  required={true}
                  value={cuisine}
                  onChange={cuisineChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <input
                  id="photo"
                  name="photo"
                  type="url"
                  placeholder="URL"
                  size="9"
                  required={true}
                  value={photo}
                  onChange={photoChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="ingredients"
                  name="ingredients"
                  type="text"
                  placeholder="Ingredients"
                  size="9"
                  required={true}
                  value={ingredients}
                  onChange={ingredientsChangeHandler}
                />
              )}
            </td>
            <td>
              {(
                <textarea
                  id="preparation"
                  name="preparation"
                  type="text"
                  placeholder="Preparation"
                  size="9"
                  required={true}
                  value={preparation}
                  onChange={preparationChangeHandler}
                />
              )}
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;