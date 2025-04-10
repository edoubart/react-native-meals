// NPM Packages
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

// Styles
import styles from './styles';

// Constants
const ICON_SIZE = 24;

function IconButton(props) {
  return (
    <Pressable
      onPress={props.handlers.press}
      style={({ pressed }) => pressed && styles.pressed }
    >
      <Ionicons
        color={props.data.color}
        name={props.data.name}
        size={ICON_SIZE}
      />
    </Pressable>
  );
}

export default IconButton;
