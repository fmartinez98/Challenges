import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { LogoIcon } from '@/assets';
import { spacing } from '@/theme';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginBottom: Platform.OS === 'ios' ? spacing.xxl : 0,
	},
});

export const HeaderTitle: React.FC = () => {
	return (
		<View style={styles.container}>
			<LogoIcon />
		</View>
	);
};
