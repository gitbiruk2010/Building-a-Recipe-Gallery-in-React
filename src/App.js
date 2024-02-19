// Import React library for component creation
import React from 'react';

// Import the main stylesheet for global styles
import './App.css';

// Import the RecipeGallery component to be used in this App component
import RecipeGallery from './RecipeGallery';

// Define the main App component
function App() {
  // Render method returns the JSX structure for the App component
  return (
    <div className="App">
      <header className="App-header">
        {/* RecipeGallery component is included to display the gallery within the App */}
        <RecipeGallery />
      </header>
    </div>
  );
}

// Export the App component for use in other parts of the application
export default App;
