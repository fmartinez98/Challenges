import React from 'react';
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { Vehicle } from '@/controllers';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';
import { HeaderButton } from './HeaderButton';
import { DetailsIcon, EnergyIcon, FilterIcon } from '@/assets';
import { Divider } from './Divider';
import { strings } from '@/localization';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		backgroundColor: colors.black,
		paddingBottom: spacing.xxl,
		flexDirection: 'column',
		marginBottom: spacing.m,
	},
	heroImage: {
		alignSelf: 'center',
		width: normalize(300),
		height: normalize(250),
		marginTop: spacing.l,
	},
	title: {
		color: colors.white,
		textAlign: 'center',
		fontSize: spacing.m,
		fontWeight: 'bold',
	},
	text: {
		color: colors.white,
		textAlign: 'center',
		fontSize: spacing.m,
		fontWeight: '300',
	},
	listTitle: {
		color: colors.black,
		fontSize: spacing.l,
		fontWeight: 'bold',
		marginVertical: spacing.s,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	filterContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: spacing.l,
	},
});

type VehiclesHeaderProps = {
	vehicle: Vehicle;
	onPressDetails: (id: number) => void;
	onPressEnergy: (id: number) => void;
	onPressFilter: () => void;
	testID?: string;
};

export const VehiclesHeader: React.FC<VehiclesHeaderProps> = ({
	vehicle,
	onPressDetails,
	onPressEnergy,
	onPressFilter,
	testID,
}) => {
	return (
		<>
			<View style={styles.container} testID={testID}>
				<Image source={{ uri: vehicle?.imageUrl }} style={styles.heroImage} resizeMode="contain" />
				<Text style={styles.title}>{vehicle?.model}</Text>
				<Text style={styles.text}>
					{vehicle?.brand}
					{strings.common.separator}
					{vehicle?.version}
				</Text>
				<Divider color={colors.gray100} margin={spacing.l} />
				<View style={styles.buttonsContainer}>
					<HeaderButton
						testID={`${testID}-details`}
						icon={<DetailsIcon />}
						text={strings.home.details}
						onPress={() => onPressDetails(vehicle?.id)}
					/>
					<HeaderButton
						testID={`${testID}-energy`}
						icon={<EnergyIcon />}
						text={strings.home.energy}
						onPress={() => onPressEnergy(vehicle?.id)}
					/>
				</View>
			</View>
			<View style={styles.filterContainer}>
				<Text style={styles.listTitle}>{strings.home.title}</Text>
				<TouchableOpacity onPress={onPressFilter} testID={`${testID}-filter-button`}>
					<FilterIcon />
				</TouchableOpacity>
			</View>
		</>
	);
};
