import React from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { styles } from './Welcome.styles';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NAVIGATION, WELCOME_GRADIENT } from '@/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, LanguageButton } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import { strings } from '@/localization';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth';

export function Welcome(): JSX.Element {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleLogin = () => {
    navigate(NAVIGATION.login);
  };

  const handleSkip = () => {
    dispatch(authActions.changeOnboardingVisibility());
  };

  const handleSignup = () => {};

  return (
    <ImageBackground
      style={styles.container}
      source={require('@/assets/background/welcome.png')}
      resizeMode="cover"
    >
      <LanguageButton />
      <Image source={require('@/assets/logo.png')} resizeMode="contain" style={styles.image} />
      <LinearGradient colors={WELCOME_GRADIENT} style={styles.gradient} />
      <View style={styles.buttonsContainer}>
        <Button
          title={strings.welcome.signup}
          onPress={handleSignup}
          style={[styles.button, styles.signupButton]}
        />
        <Button
          title={strings.welcome.login}
          onPress={handleLogin}
          style={[styles.button, styles.loginButton]}
          testID={strings.welcome.login}
        />
        <Button
          title={strings.welcome.skip}
          onPress={handleSkip}
          style={[styles.button, styles.skipButton]}
          testID={strings.welcome.skip}
        />
      </View>
    </ImageBackground>
  );
}
