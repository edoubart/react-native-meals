// NPM Packages
import {
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

function MealDetails(props) {
  return (
    <View style={{ ...styles.details, style: props.style }}>
      <Text style={{ ...styles.details, textStyle: props.textStyle }}>
        { props.data.meal.duration }m
      </Text>
      <Text style={{ ...styles.details, textStyle: props.textStyle }}>
        { props.data.meal.complexity.toUpperCase() }
      </Text>
      <Text style={{ ...styles.details, textStyle: props.textStyle }}>
        { props.data.meal.affordability.toUpperCase() }
      </Text>
    </View>
  );
}

export default MealDetails;
