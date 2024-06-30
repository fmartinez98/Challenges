import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.l,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: colors.black,
    paddingVertical: spacing.s,
    borderRadius: 30,
  },
});
