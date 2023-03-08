import axios from 'axios';
import { WAITER_API_URL } from '@env';

export const api = axios.create({
  baseURL: WAITER_API_URL,
});
