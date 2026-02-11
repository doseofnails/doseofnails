# Dose of Nails - Static Version

This is a static HTML/CSS/JavaScript version of the Dose of Nails website.

## Features

- **Bilingual Support**: Toggle between English and Indonesian with a language switcher
- **Gallery Filtering**: Filter nail art by category (All, Basic Gel, Modern Art, 3D Design)
- **Service/Product Tabs**: Switch between viewing services and products
- **Smooth Scrolling**: Smooth navigation between sections
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **No Build Process**: Pure HTML/CSS/JS - no compilation needed
- **📧 Email Integration**: Booking form sends emails via EmailJS (FREE - 200 emails/month)

## ⚡ Quick Start

1. **Setup EmailJS** (5 minutes):
   - See **[EMAILJS-SETUP.md](EMAILJS-SETUP.md)** for detailed step-by-step guide
   - Get your credentials from [emailjs.com](https://www.emailjs.com)
   - Update `index.html` with your Public Key
   - Update `js/main.js` with your Service ID and Template ID

2. **Open the website**: Simply open `index.html` in any modern web browser

3. **Test the booking form**: Fill it out and check your email!

4. **Deploy anywhere**: Upload all files to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

## File Structure

```
src-static/
├── index.html                  # Main HTML file with all content
├── js/
│   ├── translations.js         # Translation data for EN/ID
│   ├── language-switcher.js    # Language switching functionality
│   ├── gallery.js              # Gallery filtering logic
│   ├── tabs.js                 # Service/Product tab switching
│   └── main.js                 # General utilities + EmailJS integration
├── EMAILJS-SETUP.md            # 📧 Complete EmailJS setup guide
├── EMAILJS-CREDENTIALS.txt     # 🔑 Credential reference template
└── README.md                   # This file
```

## Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Via CDN (no build process needed)
- **Vanilla JavaScript**: No frameworks or libraries
- **Lucide Icons**: Icon library via CDN
- **EmailJS**: Email service for booking form (via CDN)
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

## 📧 Email Form Setup

The booking form uses **EmailJS** to send emails directly from the browser without a backend server!

### Setup Required (One-Time):

1. **Read the setup guide**: [EMAILJS-SETUP.md](EMAILJS-SETUP.md)
2. **Create free EmailJS account**: [emailjs.com](https://www.emailjs.com) (200 emails/month free)
3. **Get your credentials**:
   - Public Key
   - Service ID
   - Template ID
4. **Update 2 files**:
   - `index.html` - Add your Public Key (line ~70)
   - `js/main.js` - Add Service ID and Template ID (lines ~47-48)

### How It Works:

1. Customer fills booking form
2. JavaScript sends data to EmailJS
3. EmailJS emails you the booking details
4. Customer sees success message
5. You receive notification in your inbox!

**No backend needed! No PHP! No Node.js! Just pure client-side code!** 🚀

## Notes

- Language preference is saved in browser's localStorage
- ✅ **Booking form sends real emails** via EmailJS (setup required)
- All images are loaded from Unsplash
- Gallery uses lazy loading for better performance
- Free tier (200 emails/month) is perfect for small businesses

## 🆘 Support & Resources

**EmailJS Issues:**
- Setup guide: [EMAILJS-SETUP.md](EMAILJS-SETUP.md)
- EmailJS docs: https://www.emailjs.com/docs
- EmailJS support: support@emailjs.com

**Website Issues:**
- Check browser console (F12) for errors
- Verify all EmailJS credentials are correct
- Test with simple booking first

**Free Hosting Options:**
- GitHub Pages (free, unlimited)
- Netlify (free, 100GB/month)
- Cloudflare Pages (free, unlimited)
- Vercel (free, unlimited)

## ✅ Pre-Deployment Checklist

Before going live, make sure:

- [ ] EmailJS account created
- [ ] Email service connected (Gmail recommended)
- [ ] Email template created
- [ ] Public Key added to `index.html`
- [ ] Service ID added to `js/main.js`
- [ ] Template ID added to `js/main.js`
- [ ] Test booking submitted successfully
- [ ] Test email received in inbox
- [ ] All images loading properly
- [ ] Language switcher works
- [ ] Gallery filters work
- [ ] Tab switching works
- [ ] Mobile responsive design verified

---

**Ready to receive bookings! 💅✨**
