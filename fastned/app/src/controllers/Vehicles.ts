import { routes } from '@/controllers/routes';
import { networkService } from '@/services';

interface Notes {
	id: number;
	vehicleTypeId: number;
	title: string;
	description: string;
}
export interface Vehicle {
	id: number;
	brand: string;
	model: string;
	version: string;
	category: string;
	imageUrl: string;
}
export interface VehicleDetails {
	id: number;
	brand: string;
	model: string;
	version: string;
	category: string;
	connectorType: string;
	recommendedCharger: string;
	chargeSpeedInKw: number;
	helpUrl: string;
	imageUrl: string;
	autochargeCapable: boolean;
	externalParameters: {
		typecode: string;
		ref_consumption: string;
		usable_battery_wh: string;
		fast_chargers: string;
	};
	notes: Notes[];
	chargeCurve: string;
}

export const getVehicles = () => {
	return networkService.request<Vehicle[]>({
		method: 'GET',
		url: routes.vehicles,
	});
};

export const getVehiclesById = (id: number) => {
	return networkService.request<VehicleDetails>({
		method: 'GET',
		url: `${routes.vehicles}/${id}`,
	});
};
