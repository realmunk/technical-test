// Constants
const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/trending'
const GIPHY_API_KEY = 'EUbzzvd8szrUX0fjMZVaA2R7iU7CWWbp'
const IMAGES_TO_LOAD = 3

/**
 * Creates an image element and loads it with the given URL
 * @param {string} url - The URL of the image to load
 * @returns {Promise<HTMLImageElement>} Promise that resolves when image loads
 */
const loadImage = (url) => {
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = () => resolve(image)
    image.src = url
  })
}

/**
 * Fetches trending GIFs from Giphy API
 * @returns {Promise<Array<{images: {downsized: {url: string}}}>}
 */
const fetchTrendingGifs = async () => {
  const params = new URLSearchParams({
    api_key: GIPHY_API_KEY,
    limit: IMAGES_TO_LOAD
  })

  const response = await fetch(`${GIPHY_API_URL}?${params}`)
  const { data } = await response.json()
  return data
}

/**
 * Updates button state during loading
 * @param {HTMLButtonElement} button 
 */
const setLoadingState = (button) => {
  button.disabled = true
  button.textContent = 'Loading images…'
}

/**
 * Main function to handle loading and displaying images
 */
const handleImageLoad = async () => {
  const loadButton = document.querySelector('#load')
  if (!loadButton) return

  setLoadingState(loadButton)

  try {
    const gifs = await fetchTrendingGifs()
    
    const images = await Promise.all(
      gifs.map(gif => loadImage(gif.images.downsized.url))
    )

    images.forEach(image => document.getElementById('images').appendChild(image))
    loadButton.remove()

  } catch (error) {
    console.error('Failed to load images:', error)
    loadButton.textContent = 'Error loading images'
    loadButton.disabled = false
  }

}

// Event listener setup
const loadButton = document.querySelector('#load')
if (loadButton) {
  loadButton.onclick = handleImageLoad
}

