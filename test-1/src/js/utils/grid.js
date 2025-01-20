import { GRID_CONSTANTS } from './grid-constants.js';

/**
 * Calculates the grid row span based on image dimensions
 * @param {number} height - Image height
 * @param {number} width - Image width
 * @returns {number} The number of grid rows to span
 */
export const calculateGridSpan = (height, width) => {
  // Standard dimensions we're optimizing for (square images)
  const aspectRatio = height / width;
  const minSpan = GRID_CONSTANTS.minSpan;
  const maxSpan = GRID_CONSTANTS.maxSpan;
  
  // For square images (255x255), we want a consistent base size
  const baseSpan = minSpan + 1;
  
  // If the image is square-ish (aspect ratio between 0.9 and 1.1)
  // use the base span, otherwise scale based on aspect ratio
  const isSquarish = aspectRatio >= 0.9 && aspectRatio <= 1.1;
  const span = isSquarish 
    ? baseSpan 
    : Math.round(baseSpan * aspectRatio);
  
  // Ensure span is between minSpan and maxSpan
  return Math.max(minSpan, Math.min(span, maxSpan));
}; 