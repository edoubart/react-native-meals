// NPM Packages
import { useLayoutEffect } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';

// Custom Modules
import MealItem from './../../components/MealItem';

// Styles
import styles from './styles';

// Data
import { CATEGORIES, MEALS } from './../../data';

// Constants
const SCREEN_MEAL_NAME = 'meal';

function Category(props) {
  // Navigation
  const categoryId = props.route.params.categoryId;
  const category = CATEGORIES.find(category => category.id = categoryId);

  // Hooks
  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: category.title,
    });
  }, [categoryId, props.navigation]);

  // Handlers
  function handlePress(mealId) {
    console.log('mealId: ', mealId);

    props.navigation.navigate(SCREEN_MEAL_NAME, { mealId });
  }

  // Helpers
  function getMeals() {
    return MEALS.filter(meal => meal.categoryIds.includes(categoryId));
  }

  // Renderers
  function renderMeal(itemData) {
    return (
      <MealItem
        data={{
          meal: itemData.item,
        }}
        handlers={{
          press: _ => handlePress(itemData.item.id),
        }}
      />
    );
  }

  return (
    <View style={styles.category}>
      <FlatList
        data={getMeals()}
        keyExtractor={item => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

export default Category;
