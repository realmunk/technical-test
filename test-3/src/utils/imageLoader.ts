type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

/**
 * Custom image loader that returns optimized image URLs based on device width
 * Assumes your images are stored with different sizes (e.g., 640.jpg, 750.jpg, 828.jpg, etc.)
 */
export const imageLoader = ({ src, width, quality = 75 }: ImageLoaderProps): string => {
  // Define breakpoints for different device sizes
  const breakpoints = {
    mobile: 640,
    tablet: 750,
    desktop: 828,
    large: 1200,
  };

  // Determine which size to use based on requested width
  let targetWidth = width;
  if (width <= breakpoints.mobile) {
    targetWidth = breakpoints.mobile;
  } else if (width <= breakpoints.tablet) {
    targetWidth = breakpoints.tablet;
  } else if (width <= breakpoints.desktop) {
    targetWidth = breakpoints.desktop;
  } else {
    targetWidth = breakpoints.large;
  }

  // If the src is an absolute URL (external image), return it with size parameters
  if (src.startsWith('http')) {
    const url = new URL(src);
    url.searchParams.set('w', targetWidth.toString());
    url.searchParams.set('q', quality.toString());
    return url.href;
  }

  // For local images, assume they're in the public directory with size variants
  // Remove leading slash if present
  const basePath = src.startsWith('/') ? src.slice(1) : src;
  const [path, extension] = basePath.split(/\.(?=[^.]+$)/);
  
  return `/${path}-${targetWidth}.${extension}?q=${quality}`;
}; 