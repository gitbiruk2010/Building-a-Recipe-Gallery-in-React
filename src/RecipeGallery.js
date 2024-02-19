// Import the CSS for styling the RecipeGallery component
import './RecipeGallery.css'

// Import React from the react library for creating the component
import React from 'react';

// Define the RecipeGallery functional component
const RecipeGallery = () => {
  // Define a constant array of recipe objects
  const recipes = [
    { 
      // Object representing a Steak recipe
      id: 1, 
      title: "Steak", 
      ingredients: ["Beef", "Butter", "Garlic", "Rosemary"], 
      image: "/images/steak.jpg" // Path to the image for the recipe
    },
    {
      // Object representing a Chicken Smoothie recipe
      id: 2,
      title: "Chicken Smoothie",
      ingredients: ["5oz boiled Chicken breast", "Vanilla Protein Powder", "1cup 2% Milk", "Handful Berries of your choice", "1 Banana", "1tbsp Peanut Butter"],
      image: "/images/smoothie.jpg" // Path to the image for the recipe
    },
  ];

  // Render the RecipeGallery component
  return (
    <div className="recipe-gallery">
      {/* Map over the recipes array to display each recipe */}
      {recipes.map(recipe => (
        // Each recipe is displayed in a div that acts as a card. The key prop is important for React's rendering optimization.
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2> {/* Display the title of the recipe */}
          <ul>
            {/* Map over the ingredients array for each recipe to display each ingredient */}
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li> // Display each ingredient in a list item
            ))}
          </ul>
          <img src={recipe.image} alt={recipe.title} /> {/* Display the image of the recipe */}
        </div>
      ))}
    </div>
  );
};

// Export the RecipeGallery component for use in other parts of the application
export default RecipeGallery;
