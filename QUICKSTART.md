# Canadian IPTV Player - Quick Start Guide

## 🚀 Quick Start

### Installation (30 seconds)

1. **Clone the repository:**
```bash
git clone https://github.com/papicef85-cell/Canadian-IPTV-Player.git
cd Canadian-IPTV-Player
```

2. **Start local server:**
```bash
python3 -m http.server 8000
```

3. **Open browser:**
- Navigate to `http://localhost:8000`
- Done! ✅

---

## 📺 Using the Player

### Select a Channel
1. Browse the **Channels** list on the left
2. Use **Search** to find channels
3. Click a channel to play

### View TV Guide (EPG)
1. Select a **Year** (2005-2013)
2. Pick a **Date**
3. See the **24-hour timeline**
4. Click programs for details

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| Space | Play/Pause |
| F | Toggle Fullscreen |
| M | Mute/Unmute |
| → | Next Channel |
| ← | Previous Channel |

---

## 🎯 Features at a Glance

✅ **10 Canadian Networks**
- TSN, Sportsnet, CTV, CBC, Global
- History TV, Discovery, Bravo!, Slice, Showcase

✅ **TV Guide (2005-2013)**
- Full 24-hour schedules
- Year-based filtering
- Program descriptions

✅ **Responsive Design**
- Works on desktop, tablet, mobile
- Touch-friendly interface

✅ **100% Legal**
- Licensed specialty networks only
- CRTC compliant

---

## 🔧 Configuration

### Add a Stream URL

Edit `js/config.js`:

```javascript
{
    id: 'tsn',
    name: 'TSN (Sports)',
    m3u8: 'YOUR_M3U8_URL_HERE'
}
```

### Change Theme Colors

Edit `css/styles.css`:

```css
/* Canadian Red */
--primary: #c41e3a;

/* Canadian Blue */
--secondary: #1e3c72;
```

---

## 📚 Documentation

| Document | Purpose |
|----------|----------|
| [README.md](README.md) | Full documentation |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
| [DEVELOPMENT.md](DEVELOPMENT.md) | Developer guide |
| [CHANGELOG.md](CHANGELOG.md) | Version history |

---

## ❓ FAQs

**Q: Do I need a streaming service subscription?**
A: Streams must be legally obtained. The player supports HLS/M3U8 formats.

**Q: Can I run this offline?**
A: Yes, but streams require internet. EPG data is local.

**Q: How do I add more channels?**
A: Edit `CONFIG.channels` in `js/config.js`

**Q: Can I customize the EPG?**
A: Yes, modify the `generateSampleEPGForYear()` function in `js/epg.js`

**Q: What about mobile?**
A: Fully responsive! Works on phones and tablets.

---

## 🐛 Troubleshooting

**Streams not loading?**
- Check browser console (F12)
- Verify M3U8 URLs are correct
- Try a different stream URL
- Check CORS settings

**EPG not showing?**
- Verify year is 2005-2013
- Check JavaScript console for errors
- Clear browser cache
- Reload page

**Performance slow?**
- Close other browser tabs
- Check internet speed
- Clear browser cache
- Try different browser

---

## 🤝 Support

- 📋 [GitHub Issues](https://github.com/papicef85-cell/Canadian-IPTV-Player/issues)
- 💬 [Discussions](https://github.com/papicef85-cell/Canadian-IPTV-Player/discussions)
- 📖 [Full README](README.md)

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

**Ready to watch? Start with step 1! 🎬**
