# Custom Icons

Place your custom icon images in this directory. To use them in the app:

1. Add your images to this directory (e.g., `rocket-icon.png`, `eye-icon.png`)
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

After adding your custom icons and making these changes, your custom images will be used instead of the default Lucide icons.
