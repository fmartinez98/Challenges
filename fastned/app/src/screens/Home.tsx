import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreenProps } from '@/navigator';
import { useVehicles } from '@/hooks';
import { Error, Loading, VehiclesList } from '@/components';
import { strings } from '@/localization';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
});

export const Home: React.FC<HomeScreenProps> = () => {
	const {
		isLoading,
		isError,
		isSuccess,
		data: vehiclesResponse,
		refetch,
		isRefetching,
	} = useVehicles();

	const vehicles = vehiclesResponse?.data ?? [];

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Error message={strings.common.error} refresh={refetch} />;
	}

	if (isSuccess) {
		return (
			<View style={styles.container}>
				<VehiclesList
					testID="home"
					vehicles={vehicles}
					refetch={refetch}
					isRefetching={isRefetching}
				/>
			</View>
		);
	}
};
