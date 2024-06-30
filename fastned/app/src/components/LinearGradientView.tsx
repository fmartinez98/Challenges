import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const WINDOW_HEIGHT = Dimensions.get('screen').height;
const WINDOW_WIDTH = Dimensions.get('screen').width;

const styles = StyleSheet.create({
	content: {
		width: WINDOW_WIDTH,
		position: 'absolute',
		zIndex: 0,
	},
});

type VehicleDetailsProps = {
	colors: string[];
	top: number;
	height: number;
};

export const LinearGradientView: React.FC<VehicleDetailsProps> = ({ colors, top, height }) => {
	return (
		<LinearGradient
			colors={colors}
			style={[styles.content, { marginTop: WINDOW_HEIGHT * top, height: height }]}
		/>
	);
};
