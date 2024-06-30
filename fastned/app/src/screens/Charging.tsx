import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ChargingScreenProps } from '@/navigator';
import { Button, ChargingAnimation, Loading } from '@/components';
import { useVehiclesById } from '@/hooks';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';
import { strings } from '@/localization';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderStartEndRadius: normalize(150),
		borderStartStartRadius: normalize(150),
		backgroundColor: colors.black,
	},
	model: {
		fontSize: spacing.l,
		fontWeight: 'bold',
		color: colors.white,
	},
	brand: {
		marginTop: spacing.s,
		fontSize: spacing.m,
		fontWeight: '400',
		color: colors.white,
	},
	buttonContainer: {
		backgroundColor: colors.black,
		paddingHorizontal: spacing.xxl,
	},
	fullyCharged: {
		fontSize: spacing.l,
		alignSelf: 'center',
		marginBottom: spacing.xxl,
		color: colors.white,
		fontWeight: '100',
	},
});

export const Charging: React.FC<ChargingScreenProps> = ({ route }) => {
	const { id } = route?.params;
	const { isLoading, data: vehicleResponse } = useVehiclesById(id) ?? {};

	const [start, setStart] = useState(false);
	const [fullyCharged, setFullyCharged] = useState<boolean>(false);

	const vehicle = vehicleResponse?.data;

	const buttonText = start ? strings.charging.charging : strings.charging.startCharging;

	const onFullyCharged = () => {
		setStart(false);
		setFullyCharged(true);
	};

	const onPressCharge = () => {
		setStart(true);
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<View style={styles.container} testID="charging">
			<ChargingAnimation
				animationStart={start}
				animationSpeed={0.3}
				fullyCharged={fullyCharged}
				onFullyCharged={onFullyCharged}
				testID="charging-animation"
			/>
			<View style={[styles.content, start && { marginTop: spacing.l }]}>
				<Text style={styles.model}>{vehicle?.model}</Text>
				<Text style={styles.brand}>
					{vehicle?.brand}
					{strings.common.separator}
					{vehicle?.version}
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				{!start && fullyCharged ? (
					<Text style={styles.fullyCharged}>{strings.charging.fullyCharged}</Text>
				) : (
					<Button
						title={buttonText}
						onPress={onPressCharge}
						disabled={start}
						testID="charging-charge-button"
					/>
				)}
			</View>
		</View>
	);
};
