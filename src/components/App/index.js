// NPM Packages
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Custom Modules
import {
  Categories,
  Category,
  Favorites,
  Meal,
} from './../../screens';

// Styles

// Colors

// Screens
const CategoriesScreen = Categories;
const CategoryScreen = Category;
const FavoritesScreen = Favorites;
const MealScreen = Meal;

// Navigators
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// Constants
const CONTENT_STYLE_BACKGROUND_COLOR = '#3f2f25';
const DRAWER_ACTIVE_BACKGROUND_COLOR = '#e4baa1';
const DRAWER_ACTIVE_TINT_COLOR = '#351401';
const DRAWER_CONTENT_STYLE_BACKGROUND_COLOR = '#351401';
const DRAWER_ICON_NAME = 'list';
const DRAWER_INACTIVE_TINT_COLOR = 'white';
const DRAWER_SCENE_CONTAINER_STYLE_BACKGROUND_COLOR = '#3f2f25';
const FAVORITES_ICON_NAME = 'star';
const HEADER_STYLE_BACKGROUND_COLOR = '#351401';
const HEADER_TINT_COLOR = 'white';
const SCREEN_CATEGORIES_NAME = 'categories';
const SCREEN_CATEGORIES_TITLE = "All Categories";
const SCREEN_CATEGORY_NAME = 'category';
const SCREEN_DRAWER_NAME = 'drawer';
const SCREEN_FAVORITES_HEADER_SHOWN = false;
const SCREEN_FAVORITES_NAME = 'favorites';
const SCREEN_MEAL_NAME = 'meal';
const SCREEN_MEAL_TITLE = "About the Meal";

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: DRAWER_ACTIVE_BACKGROUND_COLOR,
        drawerActiveTintColor: DRAWER_ACTIVE_TINT_COLOR,
        drawerContentStyle: {
          backgroundColor: DRAWER_CONTENT_STYLE_BACKGROUND_COLOR,
        },
        drawerInactiveTintColor: DRAWER_INACTIVE_TINT_COLOR,
        headerStyle: {
          backgroundColor: HEADER_STYLE_BACKGROUND_COLOR,
        },
        headerTintColor: HEADER_TINT_COLOR,
        sceneContainerStyle: {
          backgroundColor: DRAWER_SCENE_CONTAINER_STYLE_BACKGROUND_COLOR,
        },
      }}
    >
      <Drawer.Screen
        component={CategoriesScreen}
        name={SCREEN_CATEGORIES_NAME}
        options={{
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons
                color={color}
                name={DRAWER_ICON_NAME}
                size={size}
              />
            );
          },
          title: SCREEN_CATEGORIES_TITLE,
        }}
      />
      <Drawer.Screen
        component={FavoritesScreen}
        name={SCREEN_FAVORITES_NAME}
        options={{
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons
                color={color}
                name={FAVORITES_ICON_NAME}
                size={size}
              />
            );
          },
          title: SCREEN_CATEGORIES_TITLE,
        }}
      />
    </Drawer.Navigator>
  );
}

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
            component={DrawerNavigator}
            name={SCREEN_DRAWER_NAME}
            options={{
              headerShown: SCREEN_FAVORITES_HEADER_SHOWN,
            }}
          />
          <Stack.Screen
            component={CategoryScreen}
            name={SCREEN_CATEGORY_NAME}
          />
          <Stack.Screen
            component={MealScreen}
            name={SCREEN_MEAL_NAME}
            options={{
              title: SCREEN_MEAL_TITLE,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
