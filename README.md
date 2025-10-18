# Empty Space Café - Flask Web App

A beautiful, responsive landing page for "Empty Space Café" featuring a cosmic theme with animated stars, constellations, and smooth animations. Built with Flask and vanilla CSS/JavaScript.

## 🌟 Features

- **Cosmic Design**: Deep space gradient background with animated stars and constellation patterns
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, floating elements, and subtle parallax scrolling
- **Accessibility**: Semantic HTML, proper contrast, and reduced motion support
- **Zero Build Step**: Pure Flask with static assets - no webpack, Vite, or other build tools

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd empty-space
   ```

2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the Flask application**
   ```bash
   # Set Flask environment variable
   set FLASK_APP=app.py
   
   # Run the development server
   flask run
   ```
   
   Or alternatively:
   ```bash
   python app.py
   ```

4. **Open your browser**
   Navigate to `http://127.0.0.1:5000` to view the landing page.

## 📁 Project Structure

```
empty-space/
├── app.py                 # Flask application entry point
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/
│   └── index.html        # Main HTML template
└── static/
    ├── css/
    │   └── main.css      # All styles and animations
    ├── js/
    │   └── main.js       # JavaScript for interactions
    └── images/
        └── coffee.png    # Coffee cup image (placeholder)
```

## 🎨 Customization

### Replacing Images

1. **Coffee Cup Image**: Replace `static/images/coffee.png` with your own iced latte photo
   - Recommended size: 200x240px
   - Format: PNG or JPG
   - Keep the same filename or update the reference in `templates/index.html`

2. **Logo**: The logo is currently an inline SVG in the HTML template
   - Edit the SVG code in `templates/index.html` around line 25-35
   - Or replace with an image by modifying the logo section

### Styling Customization

The main styles are in `static/css/main.css`. Key sections to customize:

- **Background Colors**: Lines 15-16 (gradient from `#000010` to `#120025`)
- **Star Density**: Lines 25-50 (modify the `background-image` properties)
- **Constellation Placement**: Lines 200-250 (adjust `.constellation-left` and `.constellation-right`)
- **Animation Speed**: Lines 100-120 (modify `animation-duration` values)
- **Typography**: Lines 80-90 (font family, sizes, colors)

### Animation Controls

- **Star Twinkling**: Controlled by CSS `@keyframes twinkle` (lines 60-65)
- **Constellation Movement**: CSS `@keyframes constellationMove` (lines 280-290)
- **Fade-in Effects**: CSS `@keyframes fadeInUp` (lines 300-310)
- **Parallax Effects**: JavaScript in `static/js/main.js` (lines 40-70)

## 🔧 Technical Details

### Dependencies

- **Flask 2.3.3**: Web framework
- **Google Fonts**: Montserrat font family (loaded via CDN)

### Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance

- **JavaScript Size**: < 5KB (no external libraries)
- **CSS Size**: ~8KB (includes all animations)
- **Total Page Load**: < 50KB (excluding images)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## ♿ Accessibility Features

- Semantic HTML structure (`<nav>`, `<main>`, proper headings)
- High contrast mode support
- Reduced motion support for users with vestibular disorders
- Keyboard navigation support
- Screen reader friendly

## 🎯 Development Notes

### CSS Architecture

- Uses CSS custom properties for easy theming
- Mobile-first responsive design
- Flexbox and Grid for layout
- CSS animations instead of JavaScript where possible

### JavaScript Features

- Vanilla JavaScript (no frameworks)
- Intersection Observer for scroll-triggered animations
- RequestAnimationFrame for smooth animations
- Performance optimization for low-end devices

### Flask Configuration

- Single route (`/`) for the landing page
- Static file serving for CSS, JS, and images
- Jinja2 templating for dynamic content

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Use a different port
   flask run --port 5001
   ```

2. **Module not found errors**
   ```bash
   # Make sure you're in the project directory
   cd empty-space
   pip install -r requirements.txt
   ```

3. **Images not loading**
   - Check that images are in the `static/images/` directory
   - Verify file permissions
   - Clear browser cache

### Debug Mode

To enable Flask debug mode:
```bash
set FLASK_ENV=development
flask run
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or issues, please open an issue in the repository or contact the development team.

---

**Empty Space Café** - Where coffee meets the cosmos ☕✨