import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HelpIcon } from '@/assets';
import { VehicleDetails } from '@/controllers';
import { colors, spacing } from '@/theme';
import { Divider } from './Divider';
import { Button } from './Button';
import { normalize } from '@/utils';
import { useNavigation } from '@react-navigation/native';
import { strings } from '@/localization';

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: colors.black,
		paddingHorizontal: spacing.l,
	},
	title: {
		color: colors.white,
		marginTop: spacing.l,
		fontSize: normalize(25),
		fontWeight: 'bold',
	},
	brandText: {
		fontSize: normalize(18),
		fontWeight: '200',
	},
	subtitleContainer: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: spacing.xs,
	},
	subtitle: {
		color: colors.white,
		marginTop: spacing.m,
		fontSize: normalize(18),
		fontWeight: 'bold',
	},
	details: {
		color: colors.white,
		marginBottom: spacing.s,
		fontSize: normalize(16),
		fontWeight: '600',
	},
	detailsSpecs: {
		fontWeight: '200',
	},
});

type VehicleDetailsProps = {
	vehicle: VehicleDetails | undefined;
	id: number;
	testID?: string;
};

export const VehicleSpects: React.FC<VehicleDetailsProps> = ({ vehicle, id, testID }) => {
	const { navigate } = useNavigation();

	const onPressHelp = (url: string | undefined) => {
		url && Linking.openURL(url);
	};

	const onPressEnergy = () => {
		navigate('Charging', { id });
	};

	return (
		<View style={styles.content} testID={testID}>
			<Text style={styles.title}>
				{vehicle?.model} <Text style={styles.brandText}> | {vehicle?.brand}</Text>
			</Text>
			<View style={styles.subtitleContainer}>
				<Text style={styles.subtitle}>{strings.details.title}</Text>
				<TouchableOpacity
					style={{ marginTop: spacing.s }}
					onPress={() => onPressHelp(vehicle?.helpUrl)}
					testID={`${testID}-help-button`}>
					<HelpIcon />
				</TouchableOpacity>
			</View>
			<Divider color={colors.white} margin={spacing.m} alignCenter={false} width={normalize(320)} />
			<Text style={styles.details}>
				{strings.details.version}
				<Text style={styles.detailsSpecs}>{vehicle?.version}</Text>
			</Text>
			<Text style={styles.details}>
				{strings.details.category}
				<Text style={styles.detailsSpecs}>{vehicle?.category}</Text>
			</Text>
			<Text style={styles.details}>
				{strings.details.connector}
				<Text style={styles.detailsSpecs}>{vehicle?.connectorType}</Text>
			</Text>
			<Text style={styles.details}>
				{strings.details.charger}
				<Text style={styles.detailsSpecs}>{vehicle?.recommendedCharger}</Text>
			</Text>
			<Text style={styles.details}>
				{strings.details.chargeSpeed}
				<Text style={styles.detailsSpecs}>
					{vehicle?.chargeSpeedInKw} {strings.charging.animation.kw}
				</Text>
			</Text>
			<Button
				title={strings.charging.startCharging}
				onPress={onPressEnergy}
				style={{ marginVertical: spacing.m }}
				testID={`${testID}-charge-button`}
			/>
		</View>
	);
};
