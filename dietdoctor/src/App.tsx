import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigator';
import { Provider as StoreProvider } from 'react-redux';
import { persistor, store } from '@/store';
import { PersistGate } from 'redux-persist/integration/react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <PersistGate persistor={persistor}>
            <RootNavigator />
          </PersistGate>
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
