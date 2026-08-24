# Development Guide - Canadian IPTV Player

## Local Development Setup

### Prerequisites
- Git
- Python 3.x or Node.js (for local server)
- Modern code editor (VS Code recommended)
- Modern web browser

### Getting Started

1. **Clone Repository**
```bash
git clone https://github.com/papicef85-cell/Canadian-IPTV-Player.git
cd Canadian-IPTV-Player
```

2. **Start Local Server**

**Option A: Python 3**
```bash
python3 -m http.server 8000
```

**Option B: Python 2**
```bash
python -m SimpleHTTPServer 8000
```

**Option C: Node.js (http-server)**
```bash
npm install -g http-server
http-server -p 8000
```

3. **Access Application**
- Open browser: `http://localhost:8000`

## Project Architecture

### Directory Structure
```
Canadian-IPTV-Player/
├── index.html                 # Main application file
├── css/
│   ├── styles.css            # Main stylesheet
│   └── epg.css               # EPG timeline styles
├── js/
│   ├── config.js             # App configuration
│   ├── channels.js           # Channel management
│   ├── epg.js                # EPG/TV guide logic
│   ├── player.js             # Video player control
│   └── app.js                # Main application logic
├── data/
│   └── epg-data.json         # EPG archive
├── README.md                 # User documentation
├── CONTRIBUTING.md           # Contribution guidelines
├── CHANGELOG.md              # Version history
└── LICENSE                   # MIT License
```

## Core Components

### 1. Configuration (js/config.js)

Central configuration file containing:
- Channel definitions
- EPG settings
- UI preferences

```javascript
const CONFIG = {
    channels: [ /* Channel array */ ],
    epg: { /* EPG configuration */ },
    ui: { /* UI settings */ }
};
```

### 2. Channel Manager (js/channels.js)

Handles:
- Channel list management
- Channel search/filtering
- Channel selection
- Category grouping

**Key Methods:**
```javascript
channelManager.getAllChannels()      // Returns all channels
channelManager.getChannel(id)        // Get specific channel
channelManager.searchChannels(query) // Search functionality
channelManager.getChannelsByCategory(cat) // Filter by category
channelManager.setCurrentChannel(id) // Set active channel
```

### 3. EPG Manager (js/epg.js)

Manages:
- TV guide data (2005-2013)
- Timeline rendering
- Year/date filtering
- Program details

**Key Methods:**
```javascript
epgManager.setSelectedYear(year)     // Filter by year
epgManager.setSelectedDate(date)     // Filter by date
epgManager.getProgramsForDate()      // Get programs
epgManager.renderEPGTimeline(id)     // Render timeline
```

### 4. Player Manager (js/player.js)

Handles:
- Video playback
- Stream loading
- Playback controls
- Volume management

**Key Methods:**
```javascript
playerManager.playChannel(channel)   // Play channel
playerManager.pause()                // Pause
playerManager.resume()               // Resume
playerManager.setVolume(level)       // Set volume (0-1)
playerManager.stop()                 // Stop playback
```

### 5. Main App (js/app.js)

Coordinates:
- Component initialization
- Event listeners
- UI updates
- User interactions

## Development Workflow

### Adding a New Feature

1. **Create Feature Branch**
```bash
git checkout -b feature/feature-name
```

2. **Make Changes**
- Edit relevant files
- Test thoroughly
- Add comments for complex logic

3. **Commit Changes**
```bash
git add .
git commit -m "Add feature: detailed description"
```

4. **Push and Create PR**
```bash
git push origin feature/feature-name
```

### Code Style Guide

**JavaScript:**
```javascript
// Use camelCase for variables and functions
const myVariable = 'value';
function myFunction() { }

// Use arrow functions where appropriate
const arrow = () => { };

// Add JSDoc comments for complex functions
/**
 * Function description
 * @param {type} param - Parameter description
 * @returns {type} Return description
 */
function complexFunction(param) { }
```

**CSS:**
```css
/* Use BEM naming convention */
.block { }
.block__element { }
.block--modifier { }

/* Group related properties */
.class {
    /* Positioning */
    position: relative;
    
    /* Display */
    display: flex;
    
    /* Spacing */
    margin: 10px;
    padding: 10px;
    
    /* Styling */
    color: #333;
    background: white;
}
```

**HTML:**
```html
<!-- Use semantic HTML5 elements -->
<header>Site header</header>
<main>Main content</main>
<nav>Navigation</nav>
<section>Content section</section>
<article>Article content</article>
<aside>Sidebar</aside>
<footer>Footer</footer>

<!-- Use meaningful IDs and classes -->
<div id="mainContent" class="container">
```

## Common Development Tasks

### Adding a New Channel

1. Edit `js/config.js`:
```javascript
const CONFIG = {
    channels: [
        // ... existing channels
        {
            id: 'new-channel-id',
            name: 'New Channel Name',
            category: 'Category Name',
            logo: '📺',
            m3u8: 'https://stream-url/live.m3u8',
            description: 'Channel description'
        }
    ]
};
```

2. Test:
- Verify channel appears in list
- Test search functionality
- Check playback (if stream available)

### Extending EPG Years

1. Update `js/config.js`:
```javascript
epg: {
    years: [2005, 2006, ..., 2013, 2014]  // Add new year
}
```

2. EPG data auto-generates for new years

3. Update dropdown in `index.html`:
```html
<option value="2014">2014</option>
```

### Modifying UI Theme

1. Update color variables in `css/styles.css`:
```css
/* Canadian Red */
--primary-color: #c41e3a;
/* Canadian Blue */
--secondary-color: #1e3c72;
```

2. Update relevant CSS classes
3. Test in multiple browsers

## Debugging

### Browser Console
```javascript
// Check current configuration
console.log(CONFIG);

// Check channel manager
console.log(channelManager.getAllChannels());

// Check EPG data
console.log(epgManager.epgData);

// Monitor events
window.addEventListener('channelSelected', (e) => {
    console.log('Channel selected:', e.detail);
});
```

### Common Issues

**Issue: Channels not loading**
- Check `js/config.js` syntax
- Verify `js/channels.js` is loaded
- Check browser console for errors

**Issue: EPG not displaying**
- Verify year is in `CONFIG.epg.years`
- Check EPG data generation in `js/epg.js`
- Ensure container elements exist in HTML

**Issue: Streams not playing**
- Verify M3U8 URLs are correct
- Check CORS headers
- Test stream URL in VLC player
- Check browser console for errors

## Testing

### Manual Testing Checklist

- [ ] All channels load correctly
- [ ] Channel search works
- [ ] Channel filtering by category works
- [ ] Year filter displays correct range
- [ ] Date picker works
- [ ] EPG timeline renders
- [ ] Program details display
- [ ] Schedule list shows today's programs
- [ ] Responsive design on mobile
- [ ] No console errors
- [ ] Playback controls work (if streams available)

### Browser Compatibility

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Design

Test viewport sizes:
- Desktop: 1920x1080
- Tablet: 768x1024
- Mobile: 375x667

## Performance Optimization

### Current Optimizations
- No external dependencies (pure vanilla JS)
- CSS Grid and Flexbox for layout
- Efficient DOM manipulation
- Event delegation where possible

### Future Optimizations
- Lazy loading for programs
- Virtual scrolling for large lists
- Service Worker for offline support
- Caching strategies

## Building for Production

### Minification (Optional)
```bash
# Install minifier
npm install -g terser

# Minify JavaScript
terser js/app.js -o js/app.min.js
```

### Deployment
1. Push to main branch
2. Merge to production branch
3. Deploy to hosting service
4. Test in production environment

## Version Management

### Semantic Versioning
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

Example: `1.0.0`

### Release Checklist
- [ ] Update version in `package.json`
- [ ] Update `CHANGELOG.md`
- [ ] Run all tests
- [ ] Test in multiple browsers
- [ ] Commit changes
- [ ] Tag release: `git tag v1.0.0`
- [ ] Push tags: `git push --tags`
- [ ] Create GitHub release

## Resources

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/)
- [HTML5 Spec](https://html.spec.whatwg.org/)
- [CSS3 Reference](https://www.w3.org/Style/CSS/)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Streaming
- [HLS Specification](https://tools.ietf.org/html/rfc8216)
- [MPEG-DASH](https://en.wikipedia.org/wiki/DASH)
- [Media Source Extension](https://www.w3.org/TR/media-source/)

### Tools
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## Support & Questions

- Check [GitHub Issues](https://github.com/papicef85-cell/Canadian-IPTV-Player/issues)
- Read [Contributing Guide](CONTRIBUTING.md)
- Review existing [Discussions](https://github.com/papicef85-cell/Canadian-IPTV-Player/discussions)

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

---

**Happy Coding! 🚀**
