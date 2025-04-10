// NPM Packages
import {
  FlatList,
  Text,
  View,
} from 'react-native';

// Custom Modules
import CategoryGridTile from './../../components/CategoryGridTile';

// Styles
import styles from './styles';

// Data
import { CATEGORIES } from './../../data';

// Constants
const FLAT_LIST_NUM_COLUMNS = 2;
const SCREEN_CATEGORY_NAME = 'category';

function Categories(props) {
  // Handlers
  function handlePress(categoryId) {
    props.navigation.navigate(SCREEN_CATEGORY_NAME, { categoryId });
  }

  // Renderers
  function renderCategory(itemData) {
    return (
      <CategoryGridTile
        data={{
          color: itemData.item.color,
          title: itemData.item.title,
        }}
        handlers={{
          press: _ => handlePress(itemData.item.id),
        }}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      numColumns={FLAT_LIST_NUM_COLUMNS}
      renderItem={renderCategory}
    />
  );
}

export default Categories;
