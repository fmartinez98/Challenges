import { FETCH_VEHICLES, FETCH_VEHICLES_ID } from '@/constants';
import { getVehicles, getVehiclesById } from '@/controllers';
import { useQuery } from '@tanstack/react-query';

export const useVehicles = () => {
	return 	useQuery({ queryKey: [FETCH_VEHICLES], queryFn: getVehicles })
};

export const useVehiclesById = (id: number) => {
	return 	useQuery({ queryKey: [FETCH_VEHICLES_ID], queryFn: () => getVehiclesById(id) })
};
