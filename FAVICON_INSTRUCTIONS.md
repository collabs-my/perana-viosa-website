# Favicon Setup Instructions

## Required Favicon Files

To ensure your favicon works perfectly on mobile and social media, you need to create these files from your logo:

### Required Files:
1. **favicon.ico** (16x16, 32x32, 48x48 combined) - Classic favicon
2. **favicon-16x16.png** - Small favicon
3. **favicon-32x32.png** - Standard favicon
4. **favicon-96x96.png** - Large favicon

### Apple Touch Icons (iOS):
5. **apple-touch-icon-57x57.png**
6. **apple-touch-icon-60x60.png**
7. **apple-touch-icon-72x72.png**
8. **apple-touch-icon-76x76.png**
9. **apple-touch-icon-114x114.png**
10. **apple-touch-icon-120x120.png**
11. **apple-touch-icon-144x144.png**
12. **apple-touch-icon-152x152.png**
13. **apple-touch-icon-180x180.png**

### Android Icons:
14. **android-chrome-192x192.png**
15. **android-chrome-512x512.png**

### Social Media:
16. **og-image.png** (1200x630) - For Facebook/LinkedIn sharing
17. Keep your existing **logo.svg** updated

## How to Generate These Files:

### Option 1: Online Favicon Generator (Recommended)
1. Go to https://realfavicongenerator.net/
2. Upload your logo.svg or a high-quality PNG version
3. Download the generated package
4. Replace the files in your /public directory

### Option 2: Manual Creation
1. Use design software (Photoshop, Figma, Canva)
2. Create each size manually from your logo
3. Save as PNG (except favicon.ico)

## Current Status:
- ✅ Layout.tsx updated with comprehensive favicon support
- ✅ Web manifest created for PWA support
- ⏳ Need to generate and add the actual favicon files
- ⏳ Need to create og-image.png for social sharing

## Next Steps:
1. Generate all required favicon files
2. Add them to the /public directory
3. Test on mobile devices and social media sharing
