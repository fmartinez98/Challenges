import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Charging, Details, Filter, Home } from '@/screens';
import { RootStackParamList } from './types';
import { HeaderTitle } from '@/components';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitle: () => <HeaderTitle />,
				headerTitleAlign: 'center',
				headerBackTitleVisible: false,
			}}>
			<Stack.Group>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Filter" component={Filter} />
				<Stack.Screen name="Details" component={Details} />
				<Stack.Screen name="Charging" component={Charging} />
			</Stack.Group>
		</Stack.Navigator>
	);
}
