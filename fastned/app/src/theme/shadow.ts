import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';

export const shadow = StyleSheet.create({
	primary: {
		backgroundColor: colors.black,
		borderColor: colors.black,
		borderWidth: Platform.OS === 'android' ? 1 : 0,
		shadowColor: colors.black,
		shadowOffset: {
			height: 35,
			width: 0,
		},
		shadowOpacity: 0.12,
		shadowRadius: 4,
	},
});
