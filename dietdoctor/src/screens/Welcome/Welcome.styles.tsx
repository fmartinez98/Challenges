import { colors, spacing } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.alpha200,
  },
  text: {
    textAlign: 'center',
    fontSize: spacing.l,
    fontWeight: 'bold',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    zIndex: 0,
    bottom: 0,
  },
  button: {
    zIndex: 1,
    marginBottom: spacing.s,
  },
  signupButton: {
    backgroundColor: colors.green,
    borderColor: colors.black,
    borderWidth: 0.2,
  },
  loginButton: {
    borderColor: colors.white,
    borderWidth: 1.5,
  },
  skipButton: {
    marginBottom: spacing.l,
  },
  buttonsContainer: {
    marginTop: 'auto',
    marginHorizontal: spacing.s,
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    tintColor: colors.white,
    width: 200,
  },
});
