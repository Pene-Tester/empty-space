# Empty Space Café

A beautiful, responsive Flask web application for a space-themed coffee shop.

## 🌟 Features

- **Responsive Design**: Works perfectly on all devices (mobile, tablet, desktop)
- **Space Theme**: Animated stars, constellations, and cosmic elements
- **Modern UI**: Clean, professional design with smooth animations
- **Navigation**: Easy navigation between Home and Menu pages
- **Mobile-First**: Optimized for mobile devices with touch-friendly interface

## 🚀 Deployment Options

### Option 1: GitHub Pages (Static Site)
1. Push this repository to GitHub
2. Enable GitHub Pages in repository settings
3. Your site will be available at: `https://yourusername.github.io/empty-space-cafe`

### Option 2: Railway (Flask App)
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Deploy automatically

### Option 3: Render (Flask App)
1. Go to [render.com](https://render.com)
2. Connect your GitHub repository
3. Deploy automatically

## 📁 Project Structure

```
empty-space-cafe/
├── app.py                 # Flask application
├── requirements.txt       # Python dependencies
├── templates/            # HTML templates
│   ├── index.html        # Home page
│   ├── menu.html         # Menu page
│   ├── about.html        # About page
│   └── contact.html      # Contact page
├── static/               # Static assets
│   ├── css/
│   │   ├── main.css      # Main stylesheet
│   │   └── menu.css      # Menu page styles
│   ├── js/
│   │   └── main.js       # JavaScript functionality
│   └── images/           # Image assets
├── .github/workflows/    # GitHub Actions
│   └── deploy.yml        # Deployment workflow
└── README.md            # This file
```

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/empty-space-cafe.git
   cd empty-space-cafe
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application**
   ```bash
   python app.py
   ```

4. **Access the app**
   - Local: http://127.0.0.1:5000
   - Network: http://192.168.1.7:5000 (accessible from other devices)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 769px - 1024px
- **Desktop**: 1025px - 1440px
- **Large Desktop**: 1441px+

## 🎨 Customization

### Colors
- Primary: #FFFFFF (White)
- Accent: #FFD700 (Gold)
- Background: Space theme with stars and gradients

### Fonts
- Primary: Montserrat (Google Fonts)

### Images
Replace images in `static/images/` with your own:
- `logo.png` - Your café logo
- `icon0.png` - Planet/space icon
- `cup0.png`, `cup1.png` - Coffee cup images
- `coffee-icon.png` - Coffee icon for menu
- `beans.png` - Coffee beans decoration
- `wave-arrow-icon.png` - Arrow decoration

## 🔧 Technical Details

- **Framework**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Responsive**: CSS Grid/Flexbox
- **Animations**: CSS Keyframes
- **Icons**: Custom SVG/PNG
- **Fonts**: Google Fonts (Montserrat)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

**Enjoy your cosmic coffee experience! ☕️🚀**