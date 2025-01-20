/**
 * @typedef {Object} GifImage
 * @property {string} url - The URL of the image
 * @property {number} height - The height of the image
 * @property {number} width - The width of the image
 */

/**
 * @typedef {Object} GifData
 * @property {string} title - The title of the GIF
 * @property {string} alt_text - Alternative text for the GIF
 * @property {string} username - Creator's username
 * @property {string} url - URL to the GIF page
 * @property {Object} images - Image variations
 * @property {GifImage} images.downsized - Downsized version of the GIF
 */

export const GifTypes = {}; // Empty export to make this a module 