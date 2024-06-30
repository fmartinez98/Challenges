import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './Button';
import { spacing } from '@/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: spacing.l,
	},
	title: {
		textAlign: 'center',
		fontWeight: '300',
		fontSize: spacing.m,
		marginBottom: spacing.l,
	},
});

interface Error {
	message: string;
	refresh: () => void;
}

export const Error: React.FC<Error> = ({ message, refresh }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{message}</Text>
			<Button title="Refresh" onPress={refresh} />
		</View>
	);
};
