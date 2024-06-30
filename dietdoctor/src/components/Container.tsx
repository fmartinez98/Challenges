import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Container {
  children: any;
  headerHeight?: number;
  style?: any;
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export const Container: React.FC<Container> = ({ children, style }) => {
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior="padding"
        enabled={Platform.OS === 'ios'}
        keyboardVerticalOffset={-(top + 10)}
        style={[styles.container, style]}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
