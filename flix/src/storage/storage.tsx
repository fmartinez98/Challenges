import AsyncStorage from '@react-native-async-storage/async-storage';
import { HttpClient } from '../store/mockHttpClient';

const STORAGE_KEY = '@Flix:users';
const STORAGE_TIMESTAMP_KEY = '@Flix:lastFetchTimestamp';
export const ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000; // One hour in milliseconds

export const fetchUsersFromHttpClient = async (setUsers: any) => {
  try {
    const fetchedUsers = await HttpClient.fetchUsers();
    setUsers(fetchedUsers);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(fetchedUsers));
    await AsyncStorage.setItem(STORAGE_TIMESTAMP_KEY, new Date().toISOString());
    console.log('🟢 Data retrived from Http Request'); //Just for demo purposes
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const getUsersFromStorage = async (setUsers: any) => {
  try {
    const storedUsers = await AsyncStorage.getItem(STORAGE_KEY);
    if (storedUsers) {
      console.log('🔵 Data retrived from Storage'); //Just for demo purposes
      setUsers(JSON.parse(storedUsers));
    } else {
      await fetchUsersFromHttpClient(setUsers);
    }
  } catch (error) {
    console.error('Error retrieving users from storage:', error);
  }
};

export const checkAndUpdateUsers = async (setUsers: any) => {
  try {
    const lastFetchTimestamp = await AsyncStorage.getItem(STORAGE_TIMESTAMP_KEY);
    if (!lastFetchTimestamp) {
      await fetchUsersFromHttpClient(setUsers);
    } else {
      const currentTime = new Date().getTime();
      const lastFetchTime = new Date(lastFetchTimestamp).getTime();
      if (currentTime - lastFetchTime >= ONE_HOUR_IN_MILLISECONDS) {
        await fetchUsersFromHttpClient(setUsers);
      } else {
        await getUsersFromStorage(setUsers);
      }
    }
  } catch (error) {
    console.error('Error checking and updating data:', error);
  }
};

export const clearStorage = async () => {
  const storedUsers = await AsyncStorage.getItem(STORAGE_KEY);
  if (storedUsers) {
    console.log('🔴 Storage cleared'); //Just for demo purposes
    await AsyncStorage.clear();
  }
};
