import React from 'react';
import { StyleSheet, Image, ScrollView, RefreshControl } from 'react-native';
import { DetailsScreenProps } from '@/navigator';
import { useVehiclesById } from '@/hooks';
import { normalize } from '@/utils';
import { colors } from '@/theme';
import { LinearGradientView, Loading, VehicleSpects } from '@/components';

const LINEAR_GRADIENT_COLORS = ['transparent', colors.black];

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
	},
	image: {
		alignSelf: 'center',
		width: normalize(300),
		height: normalize(300),
	},
});

export const Details: React.FC<DetailsScreenProps> = ({ route }) => {
	const { id } = route?.params;
	const { isLoading, data: vehicleResponse, refetch, isRefetching } = useVehiclesById(id) ?? {};

	const vehicle = vehicleResponse?.data;

	if (isLoading) {
		return <Loading />;
	}

	return (
		<ScrollView
			style={styles.container}
			testID="details"
			refreshControl={
				<RefreshControl colors={[colors.black]} refreshing={isRefetching} onRefresh={refetch} />
			}>
			<Image source={{ uri: vehicle?.imageUrl }} style={styles.image} resizeMode="contain" />
			<LinearGradientView colors={LINEAR_GRADIENT_COLORS} top={0.15} height={normalize(200)} />
			<VehicleSpects vehicle={vehicle} id={id} testID="details-spects" />
		</ScrollView>
	);
};
