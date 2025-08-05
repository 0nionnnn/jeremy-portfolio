# Deployment Guide for Jeremy Aliermo's Portfolio

## 📦 What's Included in the ZIP File

Your portfolio has been successfully converted to a static site! The ZIP file contains:

- ✅ **Updated personal information** (Jeremy Aliermo, your email, phone, location)
- ✅ **Working social media links** (GitHub: 0nionnnn, LinkedIn profile)
- ✅ **GitHub Actions workflows** for automatic deployment
- ✅ **Optimized for GitHub Pages** deployment
- ✅ **Responsive React portfolio** with modern design

## 🚀 Step-by-Step Deployment to GitHub Pages

### 1. Create Your GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account (`0nionnnn`)
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository: `my-portfolio`
4. Make sure it's set to **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we have our own files)
6. Click "Create repository"

### 2. Upload Your Portfolio Files

1. Extract the `jeremy-aliermo-portfolio.zip` file to a folder on your computer
2. In your new GitHub repository, you'll see a page with upload instructions
3. Either:
   
   **Option A: Upload via GitHub Web Interface**
   - Click "uploading an existing file"
   - Drag and drop all the extracted files and folders
   - Make sure to include the `.github` folder (it contains the deployment workflow)
   - Write a commit message like "Initial portfolio setup"
   - Click "Commit new files"

   **Option B: Use Git Commands** (if you have Git installed)
   ```bash
   git clone https://github.com/0nionnnn/my-portfolio.git
   cd my-portfolio
   # Copy all extracted files to this folder
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

### 3. Enable GitHub Pages

1. Go to your repository settings (click "Settings" tab)
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
4. Save the settings

### 4. Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy React App to GitHub Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once it's done, your site will be available at: `https://0nionnnn.github.io/my-portfolio`

## 🎨 How to Customize Your Portfolio

### Updating Personal Information
All personal info is stored in `/frontend/src/data/mock.js`. Edit this file to update:
- About section description
- Skills and proficiency levels
- Contact information
- Social media links

### Adding/Editing Projects
In the same `mock.js` file, find the `projects` array. Each project has:
```javascript
{
  id: 1,
  title: "Your Project Name",
  description: "Project description...",
  technologies: ["React", "Node.js", "MongoDB"],
  features: ["Feature 1", "Feature 2"],
  screenshots: ["image-url-1", "image-url-2"],
  githubUrl: "https://github.com/0nionnnn/your-repo",
  liveUrl: "https://your-live-demo.com",
  category: "Web App" // or "Mobile App" or "Video Editing"
}
```

### Changing Images
Replace the URLs in the `screenshots` array with your own project images. You can use:
- Direct image URLs from cloud storage
- GitHub repository images (raw URLs)
- Free image services like Unsplash

### Updating Skills
Edit the `skills.categories` array in `mock.js` to:
- Add new skill categories
- Update skill names and levels (0-100)
- Modify existing categories

## 🔧 Development and Testing

If you want to test changes locally:

1. Make sure you have Node.js installed
2. Navigate to the `frontend` folder
3. Run:
   ```bash
   yarn install
   yarn start
   ```
4. Your site will open at `http://localhost:3000`
5. Make changes and test them before pushing to GitHub

## 📱 Your Portfolio Features

✅ **Fully Responsive** - Works on all devices
✅ **Modern Design** - Dark theme with red accents
✅ **Contact Form** - With toast notifications
✅ **Project Gallery** - Filterable by category
✅ **Skills Showcase** - Interactive progress bars
✅ **Smooth Animations** - Professional transitions
✅ **SEO Optimized** - Better search engine visibility

## 🆘 Troubleshooting

**Site not loading?**
- Check that GitHub Pages is enabled in repository settings
- Ensure the workflow completed successfully in the Actions tab
- Wait a few minutes for DNS propagation

**Changes not showing?**
- Make sure you pushed changes to the `main` branch
- Check the Actions tab to see if the deployment workflow ran
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)

**Need to update content?**
- Edit the files in your repository
- Commit and push changes
- GitHub Actions will automatically redeploy your site

## 📧 Your Updated Contact Information

- **Name**: Jeremy Aliermo
- **Email**: jeremyaliermo11@gmail.com
- **Phone**: +63-962-1834-168
- **Location**: Philippines, Luzon
- **GitHub**: https://github.com/0nionnnn
- **LinkedIn**: https://www.linkedin.com/in/jeremy-aliermo-7bb27836a

Your portfolio is now ready for the world to see! 🎉

---

**Questions?** Feel free to ask if you need help with any part of the deployment process.