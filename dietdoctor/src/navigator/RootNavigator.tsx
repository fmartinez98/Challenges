import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { theme } from '@/theme';
import { handleReady, navigationRef } from '@/services';
import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';
import { useHasSeenOnboarding } from '@/store/auth';

export function RootNavigator() {
  const hasSeenOnboarding = useHasSeenOnboarding();

  return (
    <NavigationContainer theme={theme} onReady={handleReady} ref={navigationRef}>
      {hasSeenOnboarding ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
