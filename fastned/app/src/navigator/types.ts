import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	Details: { id: number };
	Charging: { id: number };
	Filter: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export type FilterScreenProps = NativeStackScreenProps<RootStackParamList, 'Filter'>;

export type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export type ChargingScreenProps = NativeStackScreenProps<RootStackParamList, 'Charging'>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
