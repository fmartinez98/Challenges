import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { normalize } from '@/utils';

export const typography = StyleSheet.create({
	title: {
		fontWeight: 'bold',
		fontSize: normalize(50),
		color: colors.white,
	},
	subtitle: {
		fontWeight: '200',
		fontSize: normalize(25),
		color: colors.white,
	},
	button: {
		fontWeight: 'bold',
		fontSize: normalize(20),
		color: colors.black,
	},
});
