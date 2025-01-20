import { CONFIG } from '../config/config.js';

/**
 * Fetches trending GIFs from Giphy API
 * @returns {Promise<import('../types/gif.js').GifData[]>}
 * @throws {Error} When the API request fails
 */
export const fetchTrendingGifs = async () => {
  const limitInput = document.getElementById('limit')
  
  const params = new URLSearchParams({
    api_key: CONFIG.api.key,
    limit: getLimitValue(limitInput?.value)
  })

  try {
    const response = await fetch(`${CONFIG.api.url}?${params}`)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    const { data } = await response.json()
    return data
  } catch (error) {
    throw new Error(`Failed to fetch GIFs: ${error.message}`)
  }
};

/**
 * Gets a sanitized limit value between 1 and 50
 * @param {string} value - The input value
 * @returns {number} - Sanitized limit between 1 and 50
 */
const getLimitValue = (value) => {
  const defaultLimit = CONFIG.defaults.limit;
  const parsedValue = parseInt(value || defaultLimit, 10);
  return Math.min(Math.max(parsedValue, 1), 50);
}; 