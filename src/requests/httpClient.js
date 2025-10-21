import http from 'k6/http';

/**
 * Reusable HTTP client wrapper around k6's request API.
 *
 * @param {string} method - HTTP method to use (GET, POST, etc.).
 * @param {string} url - Absolute URL for the request.
 * @param {Object} [params] - Additional parameters such as headers, tags, or timeout.
 * @param {string|Object} [body] - Optional request body.
 * @returns {http.Response} - Response object returned by k6.
 */
export function request(method, url, params = {}, body = null) {
  const requestParams = params === undefined || params === null ? {} : params;
  return http.request(method, url, body, requestParams);
}

/**
 * Convenience wrapper for simple GET requests.
 *
 * @param {string} url - Absolute URL for the request.
 * @param {Object} [params] - Additional parameters.
 * @returns {http.Response} - Response object returned by k6.
 */
export function get(url, params = {}) {
  return request('GET', url, params);
}
