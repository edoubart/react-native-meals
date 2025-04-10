// NPM Packages
import {
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

function List(props) {
  // Renderers
  function renderItem(item, index) {
    return (
      <View style={styles.item}>
        <Text key={index} style={styles.text}>
          { item }
        </Text>
      </View>
    );
  }

  function renderItems(items) {
    return items.map(renderItem);
  }

  return (
    <View>
      {
        props.data
        && props.data.items
        && renderItems(props.data.items)
      }
    </View>
  );
}

export default List;
