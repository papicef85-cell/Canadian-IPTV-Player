# 🍁 Canadian IPTV Player

A feature-rich IPTV player for 100% legal Canadian English language Specialty Networks with comprehensive TV Guide (EPG) and full timeline filtering by year (2005-2013).

## Features

✅ **Legal Canadian Specialty Networks**
- TSN (Sports)
- Sportsnet
- CTV Television
- CBC Television
- Global TV
- History TV
- Discovery Channel
- Bravo!
- Slice
- Showcase

✅ **Electronic Program Guide (EPG)**
- Full TV schedule timeline
- Historical data from 2005-2013
- Year-based filtering
- Date selection
- Channel-specific programming
- Program details and descriptions

✅ **Advanced Features**
- Real-time channel switching
- Responsive design (desktop & mobile)
- Channel search and filtering
- Today's schedule view
- Program details panel
- HLS/M3U8 stream support

## Project Structure

```
Canadian-IPTV-Player/
├── index.html              # Main application interface
├── css/
│   ├── styles.css         # Main stylesheet
│   └── epg.css            # EPG timeline styles
├── js/
│   ├── config.js          # Configuration and channel data
│   ├── channels.js        # Channel management
│   ├── epg.js             # EPG/TV Guide management
│   ├── player.js          # Video player controls
│   └── app.js             # Main application logic
├── data/
│   └── epg-data.json      # EPG archive data (2005-2013)
├── README.md              # This file
└── LICENSE                # MIT License
```

## Getting Started

### Prerequisites
- Modern web browser with HTML5 support
- M3U8/HLS stream support
- JavaScript enabled

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/papicef85-cell/Canadian-IPTV-Player.git
cd Canadian-IPTV-Player
```

2. **Open in browser:**
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or open directly
open index.html
```

3. **Access the application:**
- Navigate to `http://localhost:8000` in your browser

## Usage

### Selecting a Channel
1. Browse the **Channels** list on the left sidebar
2. Use the search box to filter channels by name or category
3. Click on a channel to begin playback

### Using the TV Guide (EPG)
1. **Filter by Year:** Use the year dropdown (2005-2013)
2. **Select Date:** Pick a specific date using the date picker
3. **View Timeline:** See the full 24-hour schedule
4. **Program Details:** Click on any program block for more information

### Current Features
- Channel list with search capability
- Live player with standard controls
- EPG timeline with 24-hour schedule
- Year-based historical data (2005-2013)
- Program details and descriptions
- Today's schedule quick view

## Supported Channels

### Sports Networks
- **TSN** - The Sports Network
- **Sportsnet** - Sports and Entertainment

### General Broadcast
- **CTV** - CTV Television Network
- **CBC Television** - Canadian Broadcasting Corporation
- **Global TV** - Global Television Network

### Documentary & Educational
- **History TV** - Historical and Documentary Programming
- **Discovery** - Discovery Channel Canada

### Entertainment & Lifestyle
- **Bravo!** - Entertainment Programming
- **Slice** - Lifestyle and Entertainment
- **Showcase** - Canadian Drama and Entertainment

## EPG Archive (2005-2013)

The application includes historical TV guide data spanning 9 years:
- **2005-2013:** Complete channel schedules
- **24-hour timeline:** Hourly programming blocks
- **Channel coverage:** All 10 major specialty networks
- **Program metadata:** Titles, descriptions, genres, durations

### Year Selection
```javascript
// Available years in EPG
2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013
```

## Configuration

Edit `js/config.js` to customize:
- Channel list and stream URLs
- EPG time slots
- Supported years
- UI settings and theme

```javascript
const CONFIG = {
    channels: [ /* Channel data */ ],
    epg: {
        timeSlots: [ /* Time slots */ ],
        years: [2005, 2006, ..., 2013],
        defaultYear: 2013
    },
    ui: { /* UI settings */ }
};
```

## Streaming Setup

To use actual Canadian IPTV streams:

1. **Update channel M3U8 URLs in `js/config.js`:**
```javascript
{
    id: 'tsn',
    name: 'TSN (Sports)',
    m3u8: 'https://your-stream-url/tsn/live.m3u8'
}
```

2. **Ensure streams are:**
   - Legal and licensed
   - HLS/M3U8 compatible
   - CORS-enabled for web playback

3. **Test stream availability:**
   - Check browser console for errors
   - Verify stream URLs are accessible

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Recommended |
| Firefox | ✅ Full | Full support |
| Safari | ✅ Full | Native HLS support |
| Edge | ✅ Full | Chromium-based |
| IE 11 | ❌ No | Not supported |

## Technologies Used

- **HTML5** - Markup structure
- **CSS3** - Responsive styling with Grid & Flexbox
- **JavaScript (ES6+)** - Application logic
- **HLS/M3U8** - Streaming protocol
- **No external dependencies** - Pure vanilla JS

## API & Classes

### ChannelManager
```javascript
channelManager.getAllChannels()      // Get all channels
channelManager.getChannel(id)        // Get specific channel
channelManager.searchChannels(query) // Search channels
channelManager.setCurrentChannel(id) // Set active channel
```

### EPGManager
```javascript
epgManager.setSelectedYear(year)      // Filter by year
epgManager.setSelectedDate(date)      // Filter by date
epgManager.getProgramsForDate()       // Get programs
epgManager.renderEPGTimeline()        // Render timeline
```

### PlayerManager
```javascript
playerManager.playChannel(channel)    // Play channel
playerManager.pause()                 // Pause playback
playerManager.resume()                // Resume playback
playerManager.setVolume(level)        // Set volume (0-1)
```

## Legal & Licensing

This project uses **100% legal Canadian specialty networks**. All streams should be:
- Licensed and authorized
- Compliant with Canadian broadcasting regulations
- CRTC-approved for distribution

### Licensing Information
- **Project License:** MIT
- **Stream Content:** User's responsibility to ensure legal access
- **Disclaimer:** Users must ensure compliance with local broadcasting laws

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development

### Adding New Channels

1. Edit `js/config.js`:
```javascript
{
    id: 'new-channel',
    name: 'New Channel Name',
    category: 'Category',
    logo: '📺',
    m3u8: 'https://stream-url/live.m3u8',
    description: 'Channel description'
}
```

### Updating EPG Data

1. Modify `js/epg.js` - `generateSampleEPGForYear()` method
2. Add or update program entries
3. Extend year range in `CONFIG.epg.years`

### Customizing UI

- Main styles: `css/styles.css`
- EPG styles: `css/epg.css`
- Color scheme: Canadian red (`#c41e3a`) and blue (`#1e3c72`)

## Roadmap

- [ ] Live stream integration
- [ ] VOD (Video on Demand) support
- [ ] User favorites/bookmarks
- [ ] Watch history
- [ ] Mobile app version
- [ ] Subtitle support
- [ ] Multi-language UI
- [ ] DVR functionality
- [ ] Push notifications for program starts
- [ ] Social sharing features

## Troubleshooting

### Streams Not Loading
- Check browser console for CORS errors
- Verify stream URLs are accessible
- Ensure HLS stream format compatibility
- Try in a different browser

### EPG Not Displaying
- Check JavaScript console for errors
- Ensure `config.js` is loaded
- Verify year selection (2005-2013)
- Clear browser cache

### Performance Issues
- Close other tabs to free memory
- Reduce number of programs displayed
- Check internet connection speed
- Update browser to latest version

## Support

For issues, questions, or suggestions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include browser and OS information
4. Provide error messages from console

## Changelog

### Version 1.0.0 (2026-08-24)
- Initial release
- 10 Canadian specialty networks
- EPG archive 2005-2013
- Full timeline filtering
- Responsive design
- Channel search functionality

## Credits

Created with ❤️ for Canadian television enthusiasts.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Disclaimer:** This project is for educational purposes. Users are responsible for ensuring compliance with Canadian broadcasting laws and licensing requirements when streaming content.

**Last Updated:** 2026-08-24
