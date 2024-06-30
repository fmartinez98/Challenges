import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigator';

const queryClient = new QueryClient();

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default function App(): JSX.Element {
	return (
		<GestureHandlerRootView style={styles.container}>
			<SafeAreaProvider>
				<QueryClientProvider client={queryClient}>
					<RootNavigator />
				</QueryClientProvider>
			</SafeAreaProvider>
		</GestureHandlerRootView>
	);
}
