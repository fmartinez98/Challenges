import React from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet } from 'react-native';

interface Container {
	children: any;
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

export const SMALL_IOS_HEADER_HEIGHT = 44;
export const LARGE_IOS_HEADER_HEIGHT = 96;

export const Container: React.FC<Container> = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<KeyboardAvoidingView
				behavior="padding"
				enabled={Platform.OS === 'ios'}
				style={[styles.container, style]}>
				{children}
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};
