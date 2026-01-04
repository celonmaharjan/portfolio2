# 🎨 Celon Maharjan's Portfolio - Complete Code Guide

## 📁 Project Structure

```
/app/frontend/src/
├── App.js                          # Main app component with routing
├── App.css                         # Global app styles
├── index.css                       # Global styles with Google Fonts
├── mockData.js                     # Portfolio data (edit this to update content)
│
├── pages/
│   └── Portfolio.jsx               # Main portfolio page orchestrator
│
└── components/
    ├── Navigation.jsx              # Sticky navigation with smooth scroll
    ├── Navigation.css
    ├── Hero.jsx                    # Hero section with CTA
    ├── Hero.css
    ├── About.jsx                   # About section with info cards
    ├── About.css
    ├── Experience.jsx              # Experience timeline
    ├── Experience.css
    ├── Skills.jsx                  # Skills organized by category
    ├── Skills.css
    ├── Projects.jsx                # Featured & other projects
    ├── Projects.css
    ├── Contact.jsx                 # Contact form (currently mocked)
    ├── Contact.css
    ├── Footer.jsx                  # Footer with social links
    └── Footer.css
```

---

## 🎯 Key Features

### ✅ Implemented (Frontend with Mock Data)
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Navigation**: Sticky header with scroll-to-section
- **Active Section Tracking**: Navigation highlights current section
- **Animated Elements**: Hover effects, transitions, and micro-animations
- **Professional Typography**: Inter font family with proper hierarchy
- **Color System**: Black background (#1a1c1b) with lime green accents (#d9fb06)
- **Mobile Menu**: Hamburger menu for mobile devices
- **Social Links**: GitHub, LinkedIn, Email integration
- **Project Links**: External links to live projects
- **Contact Form UI**: Beautiful form design (not yet functional)

### ⏳ To Be Implemented (Backend Required)
- **Contact Form Submission**: Save to MongoDB
- **Email Notifications**: Send emails when form is submitted
- **Form Validation**: Server-side validation
- **API Endpoints**: RESTful API for contact submissions

---

## 🎨 Design System

### Colors
```css
/* Primary Colors */
--background-dark: #1a1c1b;          /* Main black background */
--background-card: #302f2c;          /* Dark gray cards */
--background-darker: #0f0f10;        /* Darker alternate sections */

/* Text Colors */
--text-primary: #dfddd6;             /* Light cream text */
--text-secondary: #888680;           /* Gray supporting text */
--text-accent: #d9fb06;              /* Lime green accent */

/* Accent Color (Use Sparingly - 90/10 Rule) */
--accent-lime: #d9fb06;              /* Only for buttons, icons, small highlights */

/* Borders */
--border-subtle: rgba(63, 72, 22, 0.3);  /* Olive-tinted borders */
```

### Typography
- **Font Family**: Inter (400, 500, 600, 700, 900)
- **Headings**: Bold (700-900 weight), uppercase for impact
- **Body Text**: Medium (500 weight), comfortable line-height
- **Buttons**: Bold (600 weight), uppercase, letter-spacing

### Spacing
- Section padding: 120px vertical on desktop, 80px on mobile
- Card padding: 32px on desktop, 24px on mobile
- Grid gaps: 24-40px depending on content
- Button padding: 16px 32px (pill-shaped with border-radius: 10rem)

---

## 📝 How to Edit Content

### Update Your Information
Edit `/app/frontend/src/mockData.js`:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",              // Change your name
    title: "Your Title",            // Change your job title
    tagline: "Your tagline",        // Change your tagline
    email: "your@email.com",        // Update email
    phone: "1234567890",            // Update phone
    linkedin: "https://...",        // Update LinkedIn URL
    github: "https://...",          // Update GitHub URL
    bio: "Your bio here..."         // Update bio
  },
  
  // Add/edit experience entries
  experience: [...],
  
  // Add/edit skills by category
  skills: {
    frontend: [...],
    backend: [...],
    databases: [...],
    tools: [...],
    architecture: [...]
  },
  
  // Add/edit projects
  projects: [
    {
      title: "Project Name",
      description: "Project description",
      technologies: ["Tech1", "Tech2"],
      link: "https://...",
      github: "https://...",
      featured: true  // true = shows in featured section
    }
  ]
};
```

### Customize Colors
Edit CSS files to change colors:

**Hero Section** (`/app/frontend/src/components/Hero.css`):
```css
.hero-name {
  color: #d9fb06;  /* Change accent color */
}

.btn-primary {
  background: #d9fb06;  /* Change button color */
}
```

**Global Colors** (`/app/frontend/src/App.css`):
```css
::-webkit-scrollbar-thumb {
  background: #d9fb06;  /* Change scrollbar color */
}
```

---

## 🚀 Running the Portfolio

### Development Mode
```bash
# Frontend is already running on http://localhost:3000
# No restart needed for content changes in mockData.js
# CSS changes are hot-reloaded automatically
```

### Restart Frontend (if needed)
```bash
sudo supervisorctl restart frontend
```

### Check Logs
```bash
# Frontend logs
tail -f /var/log/supervisor/frontend.out.log
tail -f /var/log/supervisor/frontend.err.log

# Backend logs
tail -f /var/log/supervisor/backend.out.log
tail -f /var/log/supervisor/backend.err.log
```

---

## 📦 All Component Files

### 1. **mockData.js** (122 lines)
Contains all portfolio data - personal info, experience, skills, projects

### 2. **App.js** (19 lines)
Main application with React Router setup

### 3. **Portfolio.jsx** (53 lines)
Main portfolio page that orchestrates all components and handles scroll tracking

### 4. **Navigation.jsx** (67 lines)
Sticky navigation with smooth scroll and mobile menu

### 5. **Hero.jsx** (68 lines)
Hero section with name, title, CTAs, and social links

### 6. **About.jsx** (53 lines)
About section with 3 info cards (Who I Am, Location, Experience)

### 7. **Experience.jsx** (73 lines)
Timeline-based experience display with company details and achievements

### 8. **Skills.jsx** (70 lines)
Skills organized in categories with icons

### 9. **Projects.jsx** (93 lines)
Featured projects grid + other notable projects list

### 10. **Contact.jsx** (167 lines)
Contact form with methods (currently mocked - frontend only)

### 11. **Footer.jsx** (44 lines)
Footer with social links and copyright

---

## 🎨 All CSS Files

### Navigation.css (2,114 bytes)
Sticky navigation, scroll effects, mobile menu

### Hero.css (5,044 bytes)
Hero section with animations, decorations, scroll indicator

### About.css (1,582 bytes)
Info cards with hover effects

### Experience.css (3,288 bytes)
Timeline design with cards and tech badges

### Skills.css (1,647 bytes)
Skill category cards with hover animations

### Projects.css (3,594 bytes)
Project cards with gradient borders and hover effects

### Contact.css (2,873 bytes)
Contact form styling with methods cards

### Footer.css (1,792 bytes)
Footer layout with heartbeat animation

### App.css (586 bytes)
Global styles, scrollbar, selection colors

### index.css (3,762 bytes)
Google Fonts import, Tailwind setup, CSS variables

---

## 📊 Design Principles Used

### 1. **90/10 Color Rule**
- 90% black/gray backgrounds
- 10% lime green accents (buttons, icons, small highlights only)

### 2. **Hierarchy**
- Large bold headings with uppercase
- Clear visual separation between sections
- Consistent spacing throughout

### 3. **Contrast**
- High contrast text (#dfddd6) on dark background (#1a1c1b)
- Lime green accents pop against dark backgrounds

### 4. **Micro-Animations**
- Hover effects on all interactive elements
- Smooth transitions (0.3s ease)
- Scale transforms for buttons
- Slide transforms for cards

### 5. **Responsive Design**
- Mobile-first approach
- Breakpoints: 768px (tablet), 1024px (desktop)
- Flexible grid layouts
- Mobile-optimized navigation

---

## 🔧 Technology Stack

### Frontend
- **React 19.0.0**: Latest React with hooks
- **React Router 7.5.1**: Client-side routing
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Google Fonts**: Inter font family

### Backend (Not Yet Implemented)
- **FastAPI**: Python web framework
- **MongoDB**: NoSQL database
- **Motor**: Async MongoDB driver
- **Node Mailer** (planned): Email sending

---

## 📧 Next Steps - Backend Development

To make the contact form functional:

1. **Create Contact Model** in backend
2. **Add Contact API Endpoint** (`POST /api/contact`)
3. **Integrate Email Service** (SendGrid/NodeMailer)
4. **Update Contact.jsx** to call API instead of mock
5. **Add Success/Error Handling**
6. **Implement Rate Limiting** for spam prevention

---

## 💡 Customization Tips

### Change Accent Color
Find and replace all instances of `#d9fb06` with your color:
```bash
# Example: Change to blue (#0073e6)
grep -r "#d9fb06" /app/frontend/src/components/*.css
# Then manually replace in each file
```

### Add New Section
1. Create new component in `/app/frontend/src/components/`
2. Import in `Portfolio.jsx`
3. Add to navigation items in `Navigation.jsx`
4. Style with similar design patterns

### Modify Layout
- Edit grid columns in `*-grid` classes
- Adjust `max-width` in `*-container` classes
- Change padding values in section classes

---

## 📱 Responsive Breakpoints

```css
/* Mobile: default styles */

/* Tablet: 768px and up */
@media (min-width: 768px) { }

/* Desktop: 1024px and up */
@media (min-width: 1024px) { }

/* Large Desktop: 1200px and up */
@media (min-width: 1200px) { }
```

---

## ✨ Special Effects

### 1. Animated Decoration Circle
Located in Hero section - rotates continuously

### 2. Scroll Indicator
Animated line showing scroll direction

### 3. Timeline Dots
Lime green dots with gradient lines

### 4. Card Hover Effects
- translateY for Experience/Projects
- translateX for Contact methods
- Scale for buttons

### 5. Heartbeat Animation
Heart icon in footer pulses

---

## 📂 File Locations (Quick Reference)

- **All your data**: `/app/frontend/src/mockData.js`
- **Main page**: `/app/frontend/src/pages/Portfolio.jsx`
- **Components**: `/app/frontend/src/components/`
- **Global styles**: `/app/frontend/src/App.css` & `index.css`
- **Environment**: `/app/frontend/.env`

---

## 🎓 Learning Resources

To understand the code better:
- **React Hooks**: `useState`, `useEffect` used throughout
- **Component Props**: Data passed from parent to child
- **CSS Flexbox/Grid**: Modern layout techniques
- **CSS Transitions**: Smooth animations
- **Responsive Design**: Media queries

---

## 🆘 Common Issues & Fixes

### Issue: Changes not reflecting
**Fix**: Clear browser cache (Ctrl+Shift+R)

### Issue: Styling broken
**Fix**: Check if CSS file is imported in JSX file

### Issue: Navigation not working
**Fix**: Ensure section IDs match navigation items

### Issue: Mobile menu stuck
**Fix**: Click hamburger icon or refresh page

---

## 📞 Support

For questions or customizations:
- **GitHub**: https://github.com/demon-ora
- **LinkedIn**: https://www.linkedin.com/in/celon-maharjan-767a04243/
- **Email**: celonmaharjan1234@gmail.com

---

**Made with ❤️ and lots of coffee** ☕

Portfolio built using React, modern CSS, and best practices for 2025.
