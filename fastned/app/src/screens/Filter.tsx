import React, { useEffect, useState } from 'react';
import { FilterScreenProps } from '@/navigator';
import { Container, Error, FilterHeader, Loading, VehiclesList } from '@/components';
import { useVehicles } from '@/hooks';
import { strings } from '@/localization';

export const Filter: React.FC<FilterScreenProps> = () => {
	const { isLoading, isError, isSuccess, data: response, refetch, isRefetching } = useVehicles();

	const vehiclesResponse = response?.data ?? [];

	const [vehicles, setVehicles] = useState(vehiclesResponse);
	const [model, setModel] = useState('');

	useEffect(() => {
		if (model.length) {
			setVehicles(
				vehiclesResponse.filter((item) =>
					item.model.toLocaleLowerCase().includes(model.toLocaleLowerCase())
				)
			);
		} else {
			setVehicles(vehiclesResponse);
		}
	}, [model]);

	if (isLoading) {
		return <Loading />;
	}

	if (isError) {
		return <Error message={strings.common.error} refresh={refetch} />;
	}

	if (isSuccess) {
		return (
			<Container>
				<FilterHeader model={model} setModel={setModel} testID="filter-header" />
				<VehiclesList
					testID="filter"
					vehicles={vehicles}
					refetch={refetch}
					isRefetching={isRefetching}
					header={false}
				/>
			</Container>
		);
	}
};
