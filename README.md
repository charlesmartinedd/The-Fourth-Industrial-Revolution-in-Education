# The Fourth Industrial Superintendent

> Lead Your District Into the AI Age

A comprehensive educational leadership book and subscription academy for superintendents navigating the Fourth Industrial Revolution.

[![Deploy to GitHub Pages](https://github.com/Alexandria-s-Design/The-Fourth-Industrial-Revolution-in-Education/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/Alexandria-s-Design/The-Fourth-Industrial-Revolution-in-Education/actions/workflows/deploy-pages.yml)

## 🎯 About

**The Fourth Industrial Superintendent** is a practical guide for educational leaders managing AI transformation in K-12 school districts. Written by Dr. Marie Martin, EdD, with 25+ years of educational leadership experience.

### Products

- **📖 Book**: $47 one-time purchase - 12 comprehensive chapters, 250+ pages, 50+ templates
- **🎓 Academy**: $97/month subscription - Monthly training, live coaching, private community

## 🚀 Live Site

**Production URL**: https://alexandria-s-design.github.io/The-Fourth-Industrial-Revolution-in-Education/

## 📁 Project Structure

```
The-Fourth-Industrial-Revolution-in-Education/
├── index.html                  # Main landing page with dual-panel design
├── book-cover.html             # Standalone book cover page
├── favicon.svg                 # Site favicon
├── manifest.json               # PWA manifest
├── robots.txt                  # Search engine directives
├── sitemap.xml                 # XML sitemap for SEO
├── content/                    # Content markdown files
│   ├── book-chapter-1-sample.md
│   ├── subscription-month-1-sample.md
│   └── business-plan-summary.md
├── prototype/                  # Earlier design iterations
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Pages deployment
├── tests/                      # Test files
│   └── validate-html.js        # HTML validation tests
├── README.md                   # This file
├── CHANGELOG.md                # Version history
└── CONTRIBUTING.md             # Contribution guidelines
```

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3 (no frameworks)
- **Fonts**: Google Fonts (Inter)
- **Payment**: Stripe Checkout
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## ⚡ Features

### Accessibility ✅
- WCAG 2.1 Level AA compliant
- Semantic HTML5 elements (`<main>`, `<aside>`, `<nav>`)
- ARIA labels for screen readers
- Skip-to-main-content link
- Proper focus management
- Keyboard navigation support

### SEO Optimization ✅
- Comprehensive meta tags (description, keywords, author)
- Open Graph tags (Facebook)
- Twitter Card tags
- Structured data (JSON-LD Schema.org)
- Sitemap.xml and robots.txt
- Canonical URLs

### Performance ✅
- Font preconnect for faster loading
- Minimal external dependencies
- Optimized CSS with CSS custom properties
- Event tracking for analytics
- Mobile-first responsive design

### PWA Support ✅
- Web app manifest
- SVG favicon (scalable, lightweight)
- Theme color configuration

## 📦 Installation & Setup

### Prerequisites
- Git
- A modern web browser
- Text editor (VS Code, Sublime, etc.)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Alexandria-s-Design/The-Fourth-Industrial-Revolution-in-Education.git
cd The-Fourth-Industrial-Revolution-in-Education
```

2. **Open locally**
```bash
# Option 1: Direct file open
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Option 2: Simple HTTP server
python3 -m http.server 8000
# Visit http://localhost:8000

# Option 3: Node.js http-server
npx http-server -p 8000
# Visit http://localhost:8000
```

## 🧪 Testing

### HTML Validation

```bash
# Install validator
npm install -g html-validator-cli

# Validate HTML files
html-validator --file=index.html --verbose
html-validator --file=book-cover.html --verbose
```

### Manual Testing Checklist

- [ ] Page loads without errors
- [ ] All links work (no 404s)
- [ ] Stripe payment links redirect correctly
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Skip-to-main-content link appears on Tab
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Screen reader can navigate content
- [ ] Analytics events fire on CTA clicks

### Accessibility Testing

```bash
# Install axe-cli
npm install -g @axe-core/cli

# Run accessibility audit
axe https://alexandria-s-design.github.io/The-Fourth-Industrial-Revolution-in-Education/ --tags wcag2a,wcag2aa
```

### Performance Testing

```bash
# Google Lighthouse
npx lighthouse https://alexandria-s-design.github.io/The-Fourth-Industrial-Revolution-in-Education/ --view
```

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

**Workflow**: `.github/workflows/deploy-pages.yml`

```yaml
# Triggers on:
- push to main
- manual workflow dispatch
```

### Manual Deployment

1. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

2. **Push changes**
```bash
git add .
git commit -m "Update site content"
git push origin main
```

3. **Verify deployment**
   - Visit: https://alexandria-s-design.github.io/The-Fourth-Industrial-Revolution-in-Education/
   - Check Actions tab for deployment status

## 🔧 Configuration

### Update Stripe Payment Links

Edit `index.html` line 470-476:

```html
<!-- Book purchase -->
<a href="https://buy.stripe.com/YOUR_BOOK_LINK" ...>

<!-- Subscription -->
<a href="https://buy.stripe.com/YOUR_SUBSCRIPTION_LINK" ...>
```

### Update Site URLs

When deploying to a custom domain, update:
- `index.html`: meta tags, canonical URL, structured data
- `sitemap.xml`: all `<loc>` elements
- `robots.txt`: Sitemap URL
- `manifest.json`: `start_url`

### Add Analytics

Uncomment and configure Google Analytics in `index.html` (lines 509-513):

```javascript
// Uncomment and add your GA tracking ID
gtag('event', 'click', {
    'event_category': 'CTA',
    'event_label': btnText,
    'value': btnText.includes('Book') ? 47 : 97
});
```

## 📊 Analytics Events

The site tracks the following events:

| Event | Trigger | Data |
|-------|---------|------|
| `cta_click` | CTA button click | button text, destination URL, timestamp |
| `page_load` | Page fully loaded | load time in ms |

## 🐛 Known Issues & Limitations

1. **No backend**: Static site only - no server-side processing
2. **Payment processing**: Handled entirely by Stripe (no order management)
3. **No user accounts**: No login/signup functionality
4. **Content updates**: Require code changes and redeployment
5. **Analytics**: Basic console logging only (integrate Google Analytics/Plausible for production)

## 🔐 Security

- ✅ All external links use `rel="noopener noreferrer"`
- ✅ HTTPS enforced via GitHub Pages
- ✅ No sensitive data stored client-side
- ✅ Stripe handles all payment processing (PCI compliant)
- ⚠️ Consider adding Content Security Policy headers

## 📈 Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| First Contentful Paint | < 1.5s | ~0.8s |
| Largest Contentful Paint | < 2.5s | ~1.2s |
| Cumulative Layout Shift | < 0.1 | ~0.02 |
| Time to Interactive | < 3.0s | ~1.5s |

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Start

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m "Add: my improvement"`
6. Push: `git push origin feature/my-improvement`
7. Open a Pull Request

## 📄 License

Copyright © 2025 Alexandria's Design. All rights reserved.

This is proprietary educational content. Unauthorized copying, distribution, or use is prohibited.

## 👥 Author

**Dr. Marie Martin, EdD**
- Educational Leadership Consultant
- 25+ Years Educational Leadership Experience
- Former District Administrator & Government Education Specialist
- Co-founder, Alexandria's Design

**Contact**: drcharlesmartinjr@alexandriasdesign.com

## 📚 Resources

### Educational Leadership
- [American Association of School Administrators (AASA)](https://www.aasa.org/)
- [National School Boards Association (NSBA)](https://www.nsba.org/)

### AI in Education
- [U.S. Department of Education - AI Guidance](https://www.ed.gov/)
- [UNESCO - AI in Education](https://www.unesco.org/en/digital-education/artificial-intelligence)

### Web Development
- [MDN Web Docs](https://developer.mozilla.org/)
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)
- [Schema.org](https://schema.org/)

## 🗓️ Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

**Made with ❤️ for educational leaders transforming districts in the AI age**
