import { createNavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';
import BootSplash from 'react-native-bootsplash';

export const routeNameRef = createRef();
export const navigationRef = createNavigationContainerRef();

export const handleReady = () => {
  routeNameRef.current = navigationRef.getCurrentRoute().name;
  BootSplash.hide();
};

export const handleStateChange = () => {
  const currentRouteName = navigationRef.getCurrentRoute().name;

  routeNameRef.current = currentRouteName;
};
