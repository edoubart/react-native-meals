// NPM Packages
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

// Custom Modules
import MealDetails from './../MealDetails';

// Styles
import styles from './styles.js';

function MealItem(props) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={props.handlers.press}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.meal}>
          <View>
            <Image
              source={{ uri: props.data.meal.imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{ props.data.meal.title }</Text>
          </View>
          <MealDetails
            data={{
              meal: props.data.meal,
            }}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
