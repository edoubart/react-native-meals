// NPM Packages
import { useLayoutEffect } from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

// Custom Modules
import IconButton from './../../components/IconButton';
import List from './../../components/List';
import MealDetails from './../../components/MealDetails';
import Subtitle from './../../components/Subtitle';

// Styles
import styles from './styles';

// Data
import { MEALS } from './../../data';

// Constants
const ICON_BUTTON_COLOR = 'white';
const ICON_BUTTON_NAME = 'star';

function Meal(props) {
  // Hooks
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            data={{
              color: ICON_BUTTON_COLOR,
              name: ICON_BUTTON_NAME,
            }}
            handlers={{
              press: handlePress,
            }}
          />
        );
      },
    });
  }, [props.navigation, handlePress]);

  // Handlers
  function handlePress() {
    console.log('Pressed!');
  }

  // Helpers
  function getMeal() {
    const mealId = props.route.params.mealId;

    return MEALS.find(meal => meal.id === mealId);
  }

  const meal = getMeal();

  return (
    <ScrollView style={styles.screen}>
      <Image
        source={{ uri: meal.imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{ meal.title }</Text>
      <MealDetails
        data={{
          meal,
        }}
        textStyle={styles.text}
      />
      <View style={styles.details}>
        <View style={styles.lists}>
          <Subtitle>Ingredients</Subtitle>
          <List
            data={{
              items: meal.ingredients,
            }}
          />
          <Subtitle>Steps</Subtitle>
          <List
            data={{
              items: meal.steps,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default Meal;
