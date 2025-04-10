// NPM Packages
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Modules
import { Categories, Category, Meal } from './../../screens';

// Styles

// Colors

// Screens
const CategoriesScreen = Categories;
const CategoryScreen = Category;
const MealScreen = Meal;

// Stack
const Stack = createNativeStackNavigator();

// Constants
const CONTENT_STYLE_BACKGROUND_COLOR = '#3f2f25';
const HEADER_STYLE_BACKGROUND_COLOR = '#351401';
const HEADER_TINT_COLOR = 'white';
const SCREEN_CATEGORIES_NAME = 'categories';
const SCREEN_CATEGORIES_TITLE = "All Categories";
const SCREEN_CATEGORY_NAME = 'category';
const SCREEN_MEAL_NAME = 'meal';

function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: CONTENT_STYLE_BACKGROUND_COLOR,
            },
            headerStyle: {
              backgroundColor: HEADER_STYLE_BACKGROUND_COLOR,
            },
            headerTintColor: HEADER_TINT_COLOR,
          }}
        >
          <Stack.Screen
            component={CategoriesScreen}
            name={SCREEN_CATEGORIES_NAME}
            options={{
              title: SCREEN_CATEGORIES_TITLE,
            }}
          />
          <Stack.Screen
            component={CategoryScreen}
            name={SCREEN_CATEGORY_NAME}
            //options={({ route, navigation }) => {
            //  const categoryId = route.params.categoryId;

            //  return {
            //    title: categoryId,
            //  };
            //}}
          />
          <Stack.Screen
            component={MealScreen}
            name={SCREEN_MEAL_NAME}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
