import { colors, shadow, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.s,
    marginBottom: spacing.xxl,
  },
  input: {
    margin: spacing.xs,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.s,
  },
  field: {
    marginTop: spacing.m,
  },
  button: {
    ...shadow.primary,
    backgroundColor: colors.black,
  },
  socialButton: {
    marginBottom: spacing.s,
  },
  forgotPasswordText: {
    marginVertical: spacing.s,
    color: colors.blue,
    fontWeight: '500',
  },
});
