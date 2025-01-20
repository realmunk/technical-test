import { CONFIG } from './js/config/config.js';
import { createGifElement } from './js/components/GifCard.js';
import { fetchTrendingGifs } from './js/services/giphy.js';

/**
 * Main function to load and display images
 */
const loadImages = async () => {
  const imagesContainer = document.querySelector('#gif-container')
  const controls = document.querySelector('#controls')
  const loadButton = document.querySelector('#image-loader')
  
  if (!imagesContainer || !controls || !loadButton) return
  
  // Disable button while loading
  loadButton.textContent = CONFIG.messages.loading
  loadButton.disabled = true

  try {
    const gifs = await fetchTrendingGifs()
    if (gifs.length === 0) {
      console.log(CONFIG.messages.noImages)
      return
    }

    gifs.forEach(gif => {
      const gifElement = createGifElement(gif)
      imagesContainer.appendChild(gifElement)
    })
    
    // Remove the controls after successful load
    controls.remove()
  } catch (error) {
    console.error(error)
    // Re-enable button on error
    loadButton.textContent = CONFIG.messages.error
    loadButton.disabled = false
  }
}

// Initialize button click handler
const loadButton = document.querySelector('#image-loader')
if (loadButton) {
  loadButton.addEventListener('click', loadImages)
}

