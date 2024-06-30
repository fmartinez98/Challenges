import { Config } from 'react-native-config';

//In case Axios Network Error on Android, use http://10.0.2.2:8485/api/ as baseURL
export const baseURL = Config.API_BASE_URL
