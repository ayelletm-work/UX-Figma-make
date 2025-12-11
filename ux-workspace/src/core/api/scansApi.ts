import { httpClient } from './httpClient';

export const scansApi = {
  list: () => httpClient.get('/api/scans')
};
