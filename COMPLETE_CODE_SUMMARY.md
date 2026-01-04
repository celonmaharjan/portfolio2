# 🚀 Complete Portfolio Code - Quick Access

## 📍 Your Portfolio is Live at: http://localhost:3000

---

## 📂 Complete File Structure

```
/app/frontend/src/
│
├── 📄 mockData.js              # ⭐ EDIT THIS to update all content
├── 📄 App.js                   # Main app component
├── 📄 App.css                  # Global app styles
├── 📄 index.css                # Global styles + fonts
│
├── 📁 pages/
│   └── 📄 Portfolio.jsx        # Main portfolio orchestrator
│
└── 📁 components/
    ├── 📄 Navigation.jsx       # Sticky nav bar
    ├── 📄 Navigation.css
    ├── 📄 Hero.jsx             # Hero section
    ├── 📄 Hero.css
    ├── 📄 About.jsx            # About section
    ├── 📄 About.css
    ├── 📄 Experience.jsx       # Experience timeline
    ├── 📄 Experience.css
    ├── 📄 Skills.jsx           # Skills grid
    ├── 📄 Skills.css
    ├── 📄 Projects.jsx         # Projects showcase
    ├── 📄 Projects.css
    ├── 📄 Contact.jsx          # Contact form (mocked)
    ├── 📄 Contact.css
    ├── 📄 Footer.jsx           # Footer
    └── 📄 Footer.css
```

---

## 🎯 To View Any File

```bash
# View a specific file
cat /app/frontend/src/mockData.js

# View a component
cat /app/frontend/src/components/Hero.jsx

# View CSS
cat /app/frontend/src/components/Hero.css

# View all components
ls -la /app/frontend/src/components/

# View pages
ls -la /app/frontend/src/pages/
```

---

## ✏️ Quick Edit Guide

### 1️⃣ Update Your Personal Info
```bash
nano /app/frontend/src/mockData.js
# or
vim /app/frontend/src/mockData.js
```

### 2️⃣ Customize Colors
Main accent color `#d9fb06` appears in:
- All *.css files in /app/frontend/src/components/
- /app/frontend/src/App.css

### 3️⃣ Add New Projects
Edit the `projects` array in `/app/frontend/src/mockData.js`

### 4️⃣ Update Experience
Edit the `experience` array in `/app/frontend/src/mockData.js`

---

## 📊 File Sizes

| File | Lines | Purpose |
|------|-------|---------|
| mockData.js | 122 | All your portfolio data |
| Portfolio.jsx | 53 | Main page orchestrator |
| Navigation.jsx | 67 | Sticky navigation |
| Hero.jsx | 68 | Hero section |
| About.jsx | 53 | About section |
| Experience.jsx | 73 | Experience timeline |
| Skills.jsx | 70 | Skills categories |
| Projects.jsx | 93 | Projects showcase |
| Contact.jsx | 167 | Contact form |
| Footer.jsx | 44 | Footer |

---

## 🎨 Color Palette

```css
/* Backgrounds */
#1a1c1b  /* Main black background */
#302f2c  /* Dark gray cards */
#0f0f10  /* Darker sections (Experience, Projects) */

/* Text */
#dfddd6  /* Light cream primary text */
#888680  /* Gray secondary text */

/* Accent (USE SPARINGLY - buttons, icons only) */
#d9fb06  /* Lime green */
```

---

## 🖼️ Design Features

✅ Responsive (Desktop, Tablet, Mobile)
✅ Smooth scroll navigation
✅ Active section highlighting
✅ Hover animations on cards
✅ Mobile hamburger menu
✅ Custom scrollbar
✅ Professional typography (Inter font)
✅ High contrast for readability
✅ Micro-animations throughout
✅ Timeline design for experience
✅ Grid layouts for skills/projects

---

## 🔄 Current Status

### ✅ COMPLETED (Frontend Only)
- All design and UI
- Mock data integration
- Responsive layouts
- Animations and interactions
- Navigation system
- Contact form UI (frontend only)

### ⏳ TO DO (Backend Required)
- Contact form submission to database
- Email notifications
- Backend API integration
- Form validation (server-side)

---

## 💻 Development Commands

```bash
# Restart frontend
sudo supervisorctl restart frontend

# View frontend logs
tail -f /var/log/supervisor/frontend.out.log

# Check if running
sudo supervisorctl status

# Access files
cd /app/frontend/src
ls -la
```

---

## 📦 View Complete Code Guide

For detailed documentation:
```bash
cat /app/PORTFOLIO_CODE_GUIDE.md
```

For comprehensive guide with customization tips, design principles, and more!

---

## 🌐 URLs

- **Live Portfolio**: http://localhost:3000
- **Backend API**: http://localhost:8001 (when backend is built)

---

**Ready to customize your portfolio!** 🎨

Edit `/app/frontend/src/mockData.js` to get started.
