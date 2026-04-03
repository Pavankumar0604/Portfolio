/**
 * Prepends the Vite base URL (import.meta.env.BASE_URL) to a path string.
 * This ensures that assets correctly resolve whether the app is hosted
 * on the domain root (localhost) or in a subpath (GitHub Pages).
 * 
 * @param {string} path – The relative path to an asset (e.g., "/images/logo.png")
 * @returns {string} – The normalized path including the base URL
 */
export const getAssetPath = (path) => {
    // If the path already has the base URL or it's an external link, return it as is
    const baseUrl = import.meta.env.BASE_URL || "/";
    
    // Remote URLs
    if (path.startsWith("http") || path.startsWith("https") || path.startsWith("mailto:")) {
        return path;
    }

    // Clean up double slashes and ensure base URL is prepended correctly
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    const cleanBaseUrl = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

    return `${cleanBaseUrl}${cleanPath}`;
};
