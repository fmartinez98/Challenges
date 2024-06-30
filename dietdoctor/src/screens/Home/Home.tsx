import React from 'react';
import { View } from 'react-native';
import { styles } from './Home.styles';
import { useDispatch } from 'react-redux';
import { authActions } from '@/store/auth';
import { Button } from '@/components';

export function Home(): JSX.Element {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.clearCredentials());
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} style={styles.button} />
    </View>
  );
}
