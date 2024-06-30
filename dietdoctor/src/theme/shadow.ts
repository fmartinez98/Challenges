import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';

export const shadow = StyleSheet.create({
  primary: {
    borderColor: colors.gray200,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    shadowColor: colors.black,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.22,
    shadowRadius: 1.2,
  },
});
