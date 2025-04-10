// NPM Packages
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  detail: {
    fontSize: 12,
    marginHorizontal: 4,
  },
  details: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  image: {
    height: 200,
    width: '100%',
  },
  meal: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  mealItem: {
    backgroundColor: 'white', // Shadow (iOS)
    borderRadius: 16,
    elevation: 4, // Shadow (Android)
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // Shadow (iOS)
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  title: {
    fontAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
});

export default styles;
