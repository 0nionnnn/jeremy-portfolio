# Developer Portfolio

A modern, responsive developer portfolio built with React, featuring a sleek dark theme with red accents.

## 🌟 Features

- **Responsive Design**: Works perfectly on all device sizes
- **Modern UI**: Dark theme with animated elements and smooth transitions
- **Skills Showcase**: Interactive grid layout displaying technical skills
- **Project Gallery**: Filterable project showcase with category tags
- **Contact Form**: Functional contact form with toast notifications
- **Smooth Animations**: CSS animations and hover effects throughout

## 🚀 Quick Start

### Development
```bash
cd frontend
yarn install
yarn start
```

### Build for Production
```bash
cd frontend
yarn build
```

## 📦 GitHub Pages Deployment

This repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to Main Branch**:
   - The workflow will automatically trigger on push to `main`
   - Your site will be deployed to `https://yourusername.github.io/repository-name`

3. **Custom Domain** (Optional):
   - Add a `CNAME` file to the `frontend/public/` directory
   - Configure your domain in repository settings

### Workflow Features:
- ✅ Automatic builds on push to main
- ✅ Node.js 18 environment
- ✅ Yarn package manager
- ✅ Optimized production build
- ✅ Single Page Application (SPA) routing support

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Build Tool**: Create React App with CRACO
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions workflows
├── frontend/            # React application
│   ├── public/         # Public assets
│   ├── src/            # Source code
│   │   ├── components/ # React components
│   │   ├── data/      # Mock data
│   │   └── hooks/     # Custom hooks
│   └── build/         # Production build (generated)
└── README.md          # This file
```

## 🎨 Customization

### Skills Section
The skills are defined in `frontend/src/components/Skills.jsx`. You can customize:
- Skills list and proficiency levels
- Icons (using emoji or icon libraries)
- Colors and animations

### Personal Information
Update the fallback data in:
- `Hero.jsx` - Name, title, and description
- `About.jsx` - About section and stats
- `Contact.jsx` - Contact information

### Styling
The project uses Tailwind CSS with a custom color scheme. Main theme colors:
- Primary: Red (`#ef4444`)
- Background: Black/Gray (`#000000`, `#111827`)
- Text: White/Gray (`#ffffff`, `#d1d5db`)

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Adaptive grid layouts
- Mobile-friendly navigation
- Touch-optimized interactions
- Optimized typography scaling

## ⚡ Performance

- Optimized bundle size with code splitting
- Lazy loading for better performance
- Compressed assets and images
- Fast loading animations

## 🔧 Development Scripts

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test
```

---

**Made with ❤️ using React and Tailwind CSS**
