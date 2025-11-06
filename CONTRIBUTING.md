# Contributing to The Fourth Industrial Superintendent

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Testing](#testing)
- [Documentation](#documentation)

## 🤝 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for all contributors, regardless of background or experience level.

### Expected Behavior

- Be respectful and considerate
- Use welcoming and inclusive language
- Accept constructive criticism gracefully
- Focus on what's best for the project
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Publishing others' private information
- Any conduct that would be inappropriate in a professional setting

## 🎯 How Can I Contribute?

### Reporting Bugs 🐛

Before creating a bug report:
1. Check the [existing issues](https://github.com/Alexandria-s-Design/The-Fourth-Industrial-Revolution-in-Education/issues)
2. Verify the bug exists in the latest version
3. Collect information about your environment

When creating a bug report, include:
- **Clear descriptive title**
- **Steps to reproduce** the behavior
- **Expected behavior** vs. **actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, OS, screen size)

Example:
```markdown
## Bug: CTA button not clickable on mobile Safari

**Steps to Reproduce:**
1. Open site on iPhone 12, Safari 15
2. Scroll to CTA section
3. Tap "Get the Book" button
4. Nothing happens

**Expected:** Opens Stripe checkout
**Actual:** Button doesn't respond

**Screenshot:** [attached]
```

### Suggesting Enhancements 💡

Enhancement suggestions are welcome! Include:
- **Clear use case**: Why is this valuable?
- **Detailed description**: What should it do?
- **Mockups or examples**: If applicable
- **Alternatives considered**: Other approaches you thought about

### Content Improvements 📝

For content changes (copy, wording, grammar):
- Explain why the change improves clarity or accuracy
- Maintain the professional, educational tone
- Keep content concise and actionable

### Design Improvements 🎨

For visual/UX changes:
- Ensure changes maintain accessibility (WCAG 2.1 AA)
- Test on multiple screen sizes (mobile, tablet, desktop)
- Maintain brand colors and style
- Include before/after screenshots

## 🛠️ Development Setup

### Prerequisites

- Git
- Node.js (for testing tools)
- Modern web browser
- Text editor (VS Code recommended)

### Local Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/The-Fourth-Industrial-Revolution-in-Education.git
   cd The-Fourth-Industrial-Revolution-in-Education
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/Alexandria-s-Design/The-Fourth-Industrial-Revolution-in-Education.git
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Start local server**
   ```bash
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

## 📐 Coding Standards

### HTML

```html
<!-- Good: Semantic, accessible, clear -->
<nav class="cta-container" aria-label="Purchase options">
    <a href="..." class="btn btn-primary" aria-label="Purchase the book for $47">
        Get the Book
    </a>
</nav>

<!-- Bad: Non-semantic, no ARIA labels -->
<div class="cta-container">
    <a href="..." class="btn btn-primary">Get the Book</a>
</div>
```

**Rules:**
- Use semantic HTML5 elements (`<main>`, `<nav>`, `<article>`, etc.)
- Add ARIA labels to all interactive elements
- All external links must have `rel="noopener noreferrer"`
- Maintain proper heading hierarchy (single `<h1>`, then `<h2>`, etc.)
- Use 4-space indentation

### CSS

```css
/* Good: Use CSS custom properties, organized */
.btn-primary {
    background: linear-gradient(135deg, var(--primary-blue) 0%, #0052CC 100%);
    color: white;
    box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);
}

/* Bad: Hardcoded values, disorganized */
.btn-primary {
    color: white;
    background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%);
    box-shadow: 0 4px 20px rgba(0, 102, 255, 0.3);
}
```

**Rules:**
- Use CSS custom properties (`:root` variables)
- Mobile-first approach (base styles, then `@media` queries)
- Organize properties: positioning → box model → typography → visual → misc
- Use rem/em for scalability, px only when necessary
- Ensure 4.5:1 contrast ratio for WCAG AA compliance

### JavaScript

```javascript
// Good: Clear, with error handling
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const btnText = this.textContent.trim();
        console.log('CTA Click:', { button: btnText, timestamp: new Date().toISOString() });
    });
});

// Bad: No error handling, unclear
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        console.log(this.textContent);
    });
});
```

**Rules:**
- Use vanilla JavaScript (no frameworks)
- Always validate input and handle errors
- Use meaningful variable names
- Add comments for complex logic
- Minimize global scope pollution

## 📝 Commit Guidelines

### Commit Message Format

```
Type: Brief description (50 chars or less)

More detailed explanation if needed (wrap at 72 characters).
Explain what and why, not how.

Fixes #123
```

### Types

- **Add**: New feature or content
- **Fix**: Bug fix
- **Update**: Improve existing feature
- **Remove**: Delete code or feature
- **Refactor**: Code restructuring without behavior change
- **Docs**: Documentation changes
- **Style**: Formatting, whitespace (no code change)
- **Test**: Add or update tests
- **Chore**: Maintenance tasks

### Examples

```bash
# Good commits
git commit -m "Add: ARIA labels to all CTA buttons for screen reader support"
git commit -m "Fix: Skip-link not visible on keyboard focus"
git commit -m "Update: Improve color contrast for WCAG AA compliance"
git commit -m "Docs: Add installation instructions to README"

# Bad commits
git commit -m "fixed stuff"
git commit -m "update"
git commit -m "asdfasdf"
```

## 🔀 Pull Request Process

### Before Submitting

1. **Pull latest changes**
   ```bash
   git checkout main
   git pull upstream main
   git checkout your-branch
   git rebase main
   ```

2. **Test your changes**
   ```bash
   # Run HTML validation
   node tests/validate-html.js

   # Manual testing checklist
   - [ ] Works on Chrome, Firefox, Safari
   - [ ] Responsive on mobile, tablet, desktop
   - [ ] Keyboard navigation works
   - [ ] Screen reader tested (if accessibility change)
   - [ ] No console errors
   ```

3. **Update documentation**
   - Update README.md if adding features
   - Update CHANGELOG.md with your changes
   - Add comments to complex code

### Submitting PR

1. **Push to your fork**
   ```bash
   git push origin your-branch
   ```

2. **Create Pull Request** on GitHub with:
   - **Title**: Clear, descriptive (e.g., "Add: Email signup form with validation")
   - **Description**: What, why, and how
   - **Screenshots**: Before/after for visual changes
   - **Testing**: What you tested and results
   - **Checklist**: Confirm all requirements met

### PR Template

```markdown
## Description
Brief summary of changes

## Motivation
Why is this change needed?

## Changes Made
- Added X
- Fixed Y
- Updated Z

## Testing
- [x] Tested on Chrome 120
- [x] Tested on Firefox 121
- [x] Tested on mobile Safari
- [x] HTML validation passes
- [x] Accessibility tested

## Screenshots
[If applicable]

## Checklist
- [x] Code follows project style guidelines
- [x] Documentation updated
- [x] No console errors
- [x] Responsive design tested
- [x] Accessibility verified
```

### Review Process

1. Maintainer reviews within 3-5 business days
2. Address any requested changes
3. Once approved, maintainer will merge
4. Your contribution will be credited in CHANGELOG

## 🧪 Testing

### Manual Testing

```bash
# 1. Visual inspection
open index.html  # Check all pages load correctly

# 2. Responsiveness
# Use browser DevTools to test:
- Mobile: 375px width (iPhone)
- Tablet: 768px width (iPad)
- Desktop: 1920px width

# 3. Accessibility
# Test keyboard navigation:
- Tab through all interactive elements
- Ensure skip-link appears on first Tab
- Verify focus indicators visible

# 4. Links
# Click every link to verify:
- Internal links work
- External links open in new tab
- Stripe links redirect correctly
```

### Automated Testing

```bash
# HTML validation
node tests/validate-html.js

# Accessibility audit (requires npm)
npm install -g @axe-core/cli
axe http://localhost:8000 --tags wcag2a,wcag2aa

# Performance test
npm install -g lighthouse
lighthouse http://localhost:8000 --view
```

## 📚 Documentation

### Code Comments

```html
<!-- Good: Explains why, not what -->
<!-- Skip link for keyboard users to bypass navigation -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Bad: States the obvious -->
<!-- This is a link -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### README Updates

When adding features, update README.md:
- Add to Features section
- Update Configuration section if needed
- Add to Testing checklist
- Update Performance metrics if applicable

## 🎨 Design Principles

1. **Accessibility First**: WCAG 2.1 AA minimum
2. **Performance**: < 2s load time on 3G
3. **Mobile-First**: Design for mobile, enhance for desktop
4. **Simplicity**: Clear, focused content
5. **Consistency**: Follow existing patterns

## ❓ Questions?

- **Email**: drcharlesmartinjr@alexandriasdesign.com
- **GitHub Issues**: For public discussion
- **Documentation**: Check README.md and code comments

## 🙏 Recognition

Contributors are recognized in:
- CHANGELOG.md (with each version)
- Git commit history
- Future contributors page (planned)

Thank you for contributing to educational leadership! 🎓

---

**Remember**: No contribution is too small. Even fixing a typo helps!
