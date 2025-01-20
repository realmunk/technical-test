import { calculateGridSpan } from '../utils/grid.js';
import { CONFIG } from '../config/config.js';
import { GRID_CONSTANTS } from '../utils/grid-constants.js';

/**
 * Creates a GIF element from template and populates it with data
 * @param {import('../types/gif.js').GifData} gifData - The GIF data from Giphy API
 * @returns {HTMLElement} The populated template clone
 */
export const createGifElement = (gifData) => {
  const template = document.querySelector('#gif-template')
  if (!template) throw new Error('GIF template not found')
  
  const clone = template.content.cloneNode(true)
  const elements = {
    container: clone.querySelector('.gif-card'),
    image: clone.querySelector('.gif-card__image'),
    title: clone.querySelector('.gif-card__title'),
    description: clone.querySelector('.gif-card__description'),
    userSpan: clone.querySelector('.gif-card__user'),
    link: clone.querySelector('.gif-card__link')
  }
  
  const { height, width } = gifData.images.downsized
  const span = calculateGridSpan(height, width)
  elements.container.style.setProperty('--span', span.toString())
  
  elements.image.src = gifData.images.downsized.url
  elements.image.alt = gifData.alt_text || gifData.title
  elements.title.textContent = gifData.title
  elements.description.textContent = gifData.alt_text || 'No description available'
  elements.userSpan.textContent = gifData.username ? `By ${gifData.username}` : 'Anonymous'
  elements.link.href = gifData.url
  
  // Add loading state
  elements.image.style.opacity = '0'
  elements.image.onload = () => {
    elements.image.style.opacity = '1'
  }
  
  return clone
};

/**
 * Creates a placeholder element for loading states
 * @returns {HTMLElement} The placeholder element
 */
export const createPlaceholderElement = () => {
  const template = document.querySelector('#gif-template')
  if (!template) throw new Error('GIF template not found')
  
  const clone = template.content.cloneNode(true)
  const container = clone.querySelector('.gif-card')
  
  // Add placeholder class and remove link functionality
  container.classList.add('gif-card--placeholder')
  const link = container.querySelector('.gif-card__link')
  link.removeAttribute('href')
  link.style.cursor = 'default'
  
  // Random span between min and max
  const span = Math.floor(
    Math.random() * (GRID_CONSTANTS.maxSpan - GRID_CONSTANTS.minSpan + 1) + 
    GRID_CONSTANTS.minSpan
  )
  container.style.setProperty('--span', span.toString())
  
  return clone
}; 