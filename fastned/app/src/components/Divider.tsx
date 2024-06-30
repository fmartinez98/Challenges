import { normalize } from '@/utils';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	divider: {
		borderBottomWidth: 0.5,
	},
});

type DividerProps = {
	color: string;
	margin: number;
	width?: number;
	alignCenter?: boolean;
};

export const Divider: React.FC<DividerProps> = ({ color, margin, width, alignCenter = true }) => {
	return (
		<View
			style={[
				styles.divider,
				{
					borderBottomColor: color,
					marginVertical: margin,
					width: normalize(width ?? 280),
				},
				alignCenter && { alignSelf: 'center' },
			]}
		/>
	);
};
