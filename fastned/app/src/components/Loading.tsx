import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { colors } from '@/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export const Loading: React.FC = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={'large'} color={colors.black} />
		</View>
	);
};
