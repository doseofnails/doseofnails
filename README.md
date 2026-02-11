# Dose of Nails - Static Version

This is a static HTML/CSS/JavaScript version of the Dose of Nails website.

## Features

- **Bilingual Support**: Toggle between English and Indonesian with a language switcher
- **Gallery Filtering**: Filter nail art by category (All, Basic Gel, Modern Art, 3D Design)
- **Service/Product Tabs**: Switch between viewing services and products
- **Smooth Scrolling**: Smooth navigation between sections
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Build Process**: Pure HTML/CSS/JS - no compilation needed

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No server required**: This is a static site, so no web server is needed for local viewing
3. **Deploy anywhere**: Upload all files to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## File Structure

```
src-static/
├── index.html              # Main HTML file with all content
├── js/
│   ├── translations.js     # Translation data for EN/ID
│   ├── language-switcher.js # Language switching functionality
│   ├── gallery.js          # Gallery filtering logic
│   ├── tabs.js             # Service/Product tab switching
│   └── main.js             # General utilities and initialization
└── README.md               # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Via CDN (no build process needed)
- **Vanilla JavaScript**: No frameworks or libraries
- **Lucide Icons**: Icon library via CDN
- **Local Storage**: Saves language preference

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Customization

### Changing Content

1. **Text Content**: Edit translations in `js/translations.js`
2. **Images**: Replace image URLs in `index.html` and `js/gallery.js`
3. **Styling**: Modify Tailwind classes directly in `index.html`

### Adding New Translations

Edit `js/translations.js` and add new keys to both `en` and `id` objects:

```javascript
const translations = {
  en: {
    "your.new.key": "Your English text",
    // ...
  },
  id: {
    "your.new.key": "Teks Bahasa Indonesia Anda",
    // ...
  }
};
```

Then use it in HTML with the `data-i18n` attribute:

```html
<p data-i18n="your.new.key">Your English text</p>
```

## Deployment

### GitHub Pages

1. Push the `src-static` folder to a GitHub repository
2. Go to repository Settings > Pages
3. Select the branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name/`

### Netlify

1. Drag and drop the `src-static` folder to Netlify
2. Your site will be live instantly

### Any Web Hosting

1. Upload all files via FTP
2. Access via your domain

## Notes

- Language preference is saved in browser's localStorage
- Form submission shows an alert (you'll need to connect to a backend for real functionality)
- All images are loaded from Unsplash
- Gallery uses lazy loading for better performance

## Support

For issues or questions about the static version, please refer to the original React version in the parent directory.
