// NPM Packages
import { Pressable, Text, View } from 'react-native';

// Styles
import styles from './styles.js';

function CategoryGridTile(props) {
  return (
    <View style={styles.categoryGridTile}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        onPress={props.handlers.press}
        style={({ pressed }) => {
          return [styles.button, pressed ? styles.buttonPressed : null];
        }}
      >
        <View
          style={{
            ...styles.category,
            backgroundColor: props.data.color,
          }}
        >
          <Text style={styles.title}>{ props.data.title }</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
