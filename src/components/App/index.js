// NPM Packages
import { StatusBar } from 'expo-status-bar';

// Custom Modules
import { Categories } from './../../screens';

// Styles

// Colors

// Screens
const CategoriesScreen = Categories;

// Constants

function App() {
  return (
    <>
      <StatusBar style="light" />
      <CategoriesScreen />
    </>
  );
}

export default App;
