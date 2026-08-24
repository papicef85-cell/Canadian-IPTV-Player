# Contributing to Canadian IPTV Player

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## How to Contribute

### Reporting Bugs

1. Check existing issues to avoid duplicates
2. Create a new issue with:
   - Clear, descriptive title
   - Detailed description of the bug
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser/OS information
   - Screenshots if applicable

### Suggesting Features

1. Check existing issues and discussions
2. Create a new issue with:
   - Clear title starting with "Feature: "
   - Detailed description of requested feature
   - Use cases and benefits
   - Possible implementation approach

### Submitting Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/Canadian-IPTV-Player.git
   cd Canadian-IPTV-Player
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit with clear messages**
   ```bash
   git commit -m "Add feature: description of changes"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Provide clear description
   - Reference related issues
   - Include screenshots/demos if relevant
   - Ensure all tests pass

## Development Guidelines

### Code Style

- **JavaScript:** Use ES6+ syntax, camelCase for variables/functions
- **CSS:** BEM naming convention, mobile-first approach
- **HTML:** Semantic HTML5, proper accessibility
- **Comments:** Clear, meaningful comments for complex logic

### Project Structure

```
Canadian-IPTV-Player/
├── index.html           # Main HTML
├── css/
│   ├── styles.css      # Main styles
│   └── epg.css         # EPG-specific styles
├── js/
│   ├── config.js       # Configuration
│   ├── channels.js     # Channel management
│   ├── epg.js          # EPG management
│   ├── player.js       # Player controls
│   └── app.js          # Main application
└── data/
    └── epg-data.json   # EPG archive data
```

### Adding Features

#### Adding a New Channel

1. Edit `js/config.js`:
```javascript
{
    id: 'channel-id',
    name: 'Channel Name',
    category: 'Category',
    logo: '📺',
    m3u8: 'https://stream-url/live.m3u8',
    description: 'Channel description'
}
```

2. Update channel list styling in `css/styles.css` if needed
3. Test channel selection and playback

#### Extending EPG Data

1. Edit `js/epg.js` - `generateSampleEPGForYear()` method
2. Add new program entries
3. Update `CONFIG.epg.years` for new years
4. Test filtering and display

#### Updating UI Components

1. Modify relevant HTML in `index.html`
2. Update CSS in `css/styles.css` or `css/epg.css`
3. Add JavaScript handlers in appropriate `js/` file
4. Test on multiple screen sizes

### Testing

- Test on Chrome, Firefox, Safari, and Edge
- Test responsive design (mobile, tablet, desktop)
- Test all interactive features
- Check browser console for errors
- Verify EPG filtering works correctly

## Documentation

- Update `README.md` for user-facing changes
- Update `CONTRIBUTING.md` for contribution process changes
- Add inline comments for complex code
- Document new functions/classes

## Git Workflow

1. Keep branches focused on single features
2. Rebase on main before creating PR
3. Use clear commit messages
4. One feature per PR

## Pull Request Checklist

- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] Tested in multiple browsers
- [ ] Responsive design verified
- [ ] No console errors
- [ ] Related issues referenced

## Release Process

1. Update version in `package.json`
2. Update `CHANGELOG.md` with changes
3. Create a release tag
4. Publish release on GitHub

## Questions?

Feel free to open an issue or discussion for questions about contributing.

Thank you for helping make Canadian IPTV Player better!
