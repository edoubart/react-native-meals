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

function Categories(props) {
  // Handlers
  function handlePress() {
    props.navigation.navigate('Category');
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
          press: handlePress,
        }}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={renderCategory}
    />
  );
}

export default Categories;
