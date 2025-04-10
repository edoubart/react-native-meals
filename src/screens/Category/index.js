// NPM Packages
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
import { MEALS } from './../../data';

function Category(props) {
  // Navigation
  const categoryId = props.route.params.categoryId;

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
          press: () => {},
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
