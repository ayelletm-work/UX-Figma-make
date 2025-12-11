import { httpClient } from './httpClient';

export const dashboardApi = {
  overview: () => httpClient.get('/api/dashboard')
};
