import { get } from './httpClient.js';

const BASE_URL = 'https://hoppscotch.io/';

/**
 * Fetches the Hoppscotch landing page.
 *
 * @returns {http.Response} Response from the GET request.
 */
export function fetchHomePage() {
  return get(BASE_URL, {
    tags: { name: 'Hoppscotch:GET:Home' },
  });
}
