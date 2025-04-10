// NPM Packages
import {
  Text,
  View,
} from 'react-native';

// Styles
import styles from './styles';

function Subtitle(props) {
  return (
    <View style={styles.subtitle}>
      <Text style={styles.text}>
        { props.children }
      </Text>
    </View>
  );
}

export default Subtitle;
