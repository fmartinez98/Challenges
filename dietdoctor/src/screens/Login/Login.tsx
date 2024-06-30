import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { styles } from './Login.styles';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth';
import { Button, Container, Divider, TextField } from '@/components';
import { strings } from '@/localization';
import { Apple, Facebook, Google } from '@/assets/socialIcons';

export function Login(): JSX.Element {
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleLogin = () => {
    dispatch(authActions.changeOnboardingVisibility());
  };

  const handleSocialLogin = () => {};

  const handleForgotPassword = () => {};

  return (
    <Container>
      <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
        <TextField
          testId={strings.login.emailPlaceholder}
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          placeholder={strings.login.emailPlaceholder}
          textContentType="emailAddress"
          value={email}
          style={styles.field}
        />
        <TextField
          testId={strings.login.passwordPlaceholder}
          secureTextEntry
          autoCapitalize="none"
          autoComplete="password"
          onChangeText={setPassword}
          placeholder={strings.login.passwordPlaceholder}
          textContentType="password"
          value={password}
          style={styles.field}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>{strings.login.forgotPassword}</Text>
        </TouchableOpacity>
        <Button
          title={strings.login.button}
          onPress={handleLogin}
          style={styles.button}
          testID={strings.login.button}
        />
        <Divider />
        <Button
          title={strings.login.facebookSocialButton}
          onPress={handleSocialLogin}
          style={styles.socialButton}
          isSocialButton
          icon={<Facebook />}
        />
        <Button
          title={strings.login.googleSocialButton}
          onPress={handleSocialLogin}
          style={styles.socialButton}
          isSocialButton
          icon={<Google />}
        />
        <Button
          title={strings.login.appleSocialButton}
          onPress={handleSocialLogin}
          style={styles.socialButton}
          isSocialButton
          icon={<Apple />}
        />
      </ScrollView>
    </Container>
  );
}
