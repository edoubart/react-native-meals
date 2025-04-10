// NPM Packages
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  category: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  categoryGridTile: {
    backgroundColor: 'white', // Shadow (iOS)
    borderRadius: 8,
    elevation: 4, // Shadow (Android)
    flex: 1,
    height: 150,
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // Shadow (iOS)
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
