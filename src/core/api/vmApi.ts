import { httpClient } from './httpClient';

export const vmApi = {
  list: () => httpClient.get('/api/vms')
};
