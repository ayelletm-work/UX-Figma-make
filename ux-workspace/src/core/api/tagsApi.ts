import { httpClient } from './httpClient';

export const tagsApi = {
  list: () => httpClient.get('/api/tags')
};
