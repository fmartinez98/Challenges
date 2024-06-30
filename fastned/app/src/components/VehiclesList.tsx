import React from 'react';
import {
	FlatList,
	Text,
	FlatListProps,
	StyleSheet,
	TouchableOpacity,
	Image,
	View,
	RefreshControl,
} from 'react-native';
import { Vehicle } from '@/controllers';
import { colors, spacing } from '@/theme';
import { normalize } from '@/utils';
import { VehiclesHeader } from './VehiclesHeader';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: colors.gray200,
		borderWidth: 1.5,
		marginVertical: spacing.xs,
		marginHorizontal: spacing.m,
		borderRadius: spacing.m,
	},
	content: {
		marginLeft: spacing.m,
		justifyContent: 'center',
	},
	title: {
		maxWidth: normalize(150),
		fontWeight: 'bold',
		color: colors.black,
	},
	text: {
		maxWidth: normalize(150),
		fontWeight: '300',
		color: colors.gray600,
	},
	image: {
		width: normalize(100),
		height: normalize(100),
		marginHorizontal: spacing.s,
	},
});

type VehiclesListProps = {
	vehicles: Vehicle[];
	refetch: () => void;
	isRefetching: boolean;
	header?: boolean;
	testID?: string;
};

export const VehiclesList: React.FC<VehiclesListProps> = ({
	vehicles,
	refetch,
	isRefetching,
	header = true,
	testID,
}) => {
	const { navigate } = useNavigation();

	const heroVehicle = vehicles && vehicles[2]; //Random vechicle to be on the hero section

	const onPressEnergy = (id: number) => {
		navigate('Charging', { id });
	};

	const onPressDetails = (id: number) => {
		navigate('Details', { id });
	};

	const keyExtractor = (vehicle: Vehicle) => `vehicle-${vehicle.id}`;

	const renderItem: FlatListProps<Vehicle>['renderItem'] = ({ index, item }) => {
		const currentItemIndex = vehicles?.length - 1;

		return (
			<TouchableOpacity
				testID={`${testID}-item-${item?.id}`}
				key={item?.id}
				style={[styles.container, index === currentItemIndex && { marginBottom: spacing.xxl }]}
				onPress={() => onPressDetails(item?.id)}>
				<View style={styles.content}>
					<Text style={styles.title}>{item.model}</Text>
					<Text style={styles.text}>
						{item.brand} | {item.version}
					</Text>
				</View>
				<Image source={{ uri: item?.imageUrl }} style={styles.image} resizeMode="contain" />
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			testID={`${testID}-flatlist`}
			data={vehicles}
			keyExtractor={keyExtractor}
			renderItem={renderItem}
			initialNumToRender={10}
			ListHeaderComponent={
				header ? (
					<VehiclesHeader
						testID={`${testID}-header`}
						vehicle={heroVehicle}
						onPressDetails={onPressDetails}
						onPressEnergy={onPressEnergy}
						onPressFilter={() => navigate('Filter')}
					/>
				) : (
					<></>
				)
			}
			refreshControl={
				<RefreshControl colors={[colors.black]} refreshing={isRefetching} onRefresh={refetch} />
			}
		/>
	);
};
