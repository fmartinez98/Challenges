import axios from 'axios';
import { baseURL } from './config';

export const networkService = axios.create({ baseURL });
