// NPM Packages
import {
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

// Data
import { MEALS } from './../../data';

function Category() {
  return (
    <View style={styles.category}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}

export default Category;
