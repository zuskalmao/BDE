# Custom Assets

This directory is for all your custom assets, including both icons and content images.

## Custom Icons

Place your custom icon images (PNG format recommended) in this directory:

1. Add your icon images here (e.g., `rocket-icon.png`, `eye-icon.png`)
2. In `App.tsx`, uncomment the import line: 
   ```js
   import rocketIcon from './assets/rocket-icon.png';
   ```
3. Set `useCustomRocketIcons = true;`
4. Uncomment the `imagePath` prop in each CustomIcon component

Similarly, in `Header.tsx`:
1. Uncomment the import line:
   ```js
   import eyeIcon from '../assets/eye-icon.png';
   ```
2. Set `useCustomEyeIcon = true;`
3. Uncomment the `imagePath` prop in the CustomIcon component

## Content Images

For the main content images (the large image spaces in the website):

1. Add your content images to this directory (e.g., `image-space-1.jpg`, `image-space-2.jpg`, `image-space-3.jpg`)
2. In `App.tsx`, uncomment the import lines near the top:
   ```js
   import imageSpace1 from './assets/image-space-1.jpg';
   import imageSpace2 from './assets/image-space-2.jpg';
   import imageSpace3 from './assets/image-space-3.jpg';
   ```
3. Uncomment the `imagePath` props in each ContentImage component:
   ```jsx
   <ContentImage 
     imagePath={imageSpace1} 
     alt="Swagger Overload" 
     aspectRatio="16/9"
   />
   ```

## Supported Image Formats

You can use any web-supported image format:
- JPG/JPEG (best for photos)
- PNG (best for graphics with transparency)
- GIF (for animations)
- SVG (for vector graphics)
- WebP (modern format with good compression)

## Image Size Recommendations

- **Icons**: 64px to 256px (square)
- **Content Images**: 
  - Image Space 1: 1200x675px (16:9 aspect ratio)
  - Image Space 2 & 3: 800x800px (1:1 aspect ratio)
