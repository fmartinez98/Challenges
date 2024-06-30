import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { colors, spacing } from '@/theme';
interface Button {
	title: string;
	onPress: () => void;
	testID?: string;
	disabled?: boolean;
	style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
	container: {
		marginTop: spacing.xs,
		marginBottom: spacing.xxl,
		borderRadius: 20,
	},
	text: {
		textAlign: 'center',
		fontWeight: '600',
		fontSize: spacing.s,
		paddingVertical: spacing.xs,
	},
});

export const Button: React.FC<Button> = ({ title, onPress, testID, disabled, style }) => {
	return (
		<View style={style}>
			<TouchableOpacity
				style={[styles.container, { backgroundColor: disabled ? colors.black : colors.white }]}
				onPress={onPress}
				testID={testID}
				disabled={disabled}>
				<Text style={[styles.text, { color: disabled ? colors.gray200 : colors.black }]}>
					{title}
				</Text>
			</TouchableOpacity>
		</View>
	);
};
