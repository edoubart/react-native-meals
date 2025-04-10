// NPM Packages
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Modules
import { Categories, Category } from './../../screens';

// Styles

// Colors

// Screens
const CategoriesScreen = Categories;
const CategoryScreen = Category;

// Stack
const Stack = createNativeStackNavigator();

// Constants

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            component={CategoriesScreen}
            name="Categories"
          />
          <Stack.Screen
            component={CategoryScreen}
            name="Category"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
