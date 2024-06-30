import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginHorizontal: spacing.l,
	},
	text: {
		fontWeight: '200',
		marginTop: normalize(10),
	},
});

type HeaderButtonProps = {
	icon: any;
	text: string;
	onPress: () => void;
	testID?: string;
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, text, onPress, testID }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.container} testID={testID}>
			{icon}
			<Text style={[styles.text, { color: colors.white }]}>{text}</Text>
		</TouchableOpacity>
	);
};
