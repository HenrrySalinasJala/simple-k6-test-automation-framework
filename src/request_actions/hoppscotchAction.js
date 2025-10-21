import { check } from 'k6';
import { fetchHomePage } from '../requests/hoppscotchRequest.js';

/**
 * Executes the user journey for validating the Hoppscotch landing page.
 */
export function validateHomePage() {
  const response = fetchHomePage();

  check(response, {
    'status is 200': (res) => res.status === 200,
    'html contains Hoppscotch': (res) => res.body && res.body.includes('Hoppscotch'),
  });

  return response;
}
