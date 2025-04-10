// NPM Packages
import {
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';

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
          <View style={styles.details}>
            <Text style={styles.details}>
              { props.data.meal.duration }m
            </Text>
            <Text style={styles.details}>
              { props.data.meal.complexity.toUpperCase() }
            </Text>
            <Text style={styles.details}>
              { props.data.meal.affordability.toUpperCase() }
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
