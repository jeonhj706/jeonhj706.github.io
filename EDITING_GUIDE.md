# How to Edit Your Portfolio Website

This guide explains everything you need to know to update and maintain your website — no coding experience required. Read through it once before making any changes.

---

## Table of Contents

1. [Understanding the files](#1-understanding-the-files)
2. [Setting up GitHub (first time only)](#2-setting-up-github-first-time-only)
3. [How to edit text on your website](#3-how-to-edit-text-on-your-website)
4. [How to change your profile photo](#4-how-to-change-your-profile-photo)
5. [How to add a new academic project](#5-how-to-add-a-new-academic-project)
6. [How to add a new experience entry](#6-how-to-add-a-new-experience-entry)
7. [How to add photos to the Creative section](#7-how-to-add-photos-to-the-creative-section)
8. [How to change colors](#8-how-to-change-colors)
9. [How to change your social links](#9-how-to-change-your-social-links)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Understanding the files

Your website has this structure:

```
index.html          ← The main file — all your content lives here
css/
  style.css         ← Controls colors, fonts, layout
js/
  main.js           ← Makes the tabs and filters work (do not edit)
images/
  profile.jpg       ← Your profile photo
  making-01.jpg     ← Creative section images
  ...
EDITING_GUIDE.md    ← This file (the guide you are reading)
```

**The only file you will regularly edit is `index.html`.**  
Occasionally you may edit `css/style.css` to change colors.

---

## 2. Setting up GitHub (first time only)

### Step 1 — Create a GitHub account
1. Go to [https://github.com](https://github.com)
2. Click **Sign up** and follow the instructions
3. Choose a username (this becomes part of your website address, e.g. `jeonhj706`)

### Step 2 — Create your repository
1. After signing in, click the **+** icon in the top-right corner
2. Select **New repository**
3. Name it exactly: `[your-username].github.io`  
   Example: if your username is `jeonhj706`, name it `jeonhj706.github.io`
4. Set it to **Public**
5. Click **Create repository**

### Step 3 — Upload your files
1. On your new repository page, click **uploading an existing file** (or drag and drop)
2. Drag all your website files into the upload area:
   - `index.html`
   - The `css/` folder
   - The `js/` folder
   - The `images/` folder
   - `EDITING_GUIDE.md`
3. Scroll down and click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repository's **Settings** tab (top navigation)
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select `main` and click **Save**
5. Wait 1–2 minutes, then visit `https://[your-username].github.io`

Your site is now live!

---

## 3. How to edit text on your website

### Open the file
1. Go to your GitHub repository
2. Click on `index.html`
3. Click the **pencil icon** (Edit this file) in the top-right

### Find the text you want to change
The file has labels like this to help you find things:

```html
<!-- EDIT: Your name -->
<h1>Hyun-Jun Jeon</h1>
```

Change only the text **between** the tags (`<h1>` and `</h1>`), not the tags themselves.

**Safe to change:** everything between `>` and `<`  
**Do not change:** the tags themselves (the parts with `< >`)

### Save your changes
1. Scroll to the bottom of the editor
2. Click **Commit changes**
3. Wait 1–2 minutes for the site to update

---

## 4. How to change your profile photo

### Step 1 — Upload your photo to GitHub
1. Go to your repository and click the `images` folder
2. Click **Add file → Upload files**
3. Upload your photo — name it exactly `profile.jpg`
4. Click **Commit changes**

> **Tip:** The photo should ideally be square (same width and height) and at least 400×400 pixels. The site automatically makes it circular.

### Step 2 — Verify the filename matches
In `index.html`, find this line:
```html
<img src="images/profile.jpg" alt="Profile photo of Hyun-Jun Jeon" class="hero-photo" />
```
Make sure `profile.jpg` matches your uploaded filename exactly (including uppercase/lowercase letters).

---

## 5. How to add a new academic project

### Find the right tab section in index.html

- For **Bachelor's** projects: find `<div class="tab-panel active" id="tab-bachelor">`
- For **Master's** projects: find `<div class="tab-panel" id="tab-master">`
- For **UROP** projects: find `<div class="tab-panel" id="tab-urop">`

### Copy and paste the card block

Inside the tab section you want, find a block that looks like this:

```html
<!-- CARD START — copy this entire block to add a new project -->
<div class="card">
  <h3>Capstone Design Project</h3>
  <p class="card-meta">2021 – 2022 · Mechanical Engineering, KAIST</p>
  <p>
    Description of the project goes here.
  </p>
</div>
<!-- CARD END -->
```

1. Select everything from `<!-- CARD START -->` to `<!-- CARD END -->`
2. Copy it
3. Paste it directly below the last `<!-- CARD END -->` in that tab
4. Change the title, dates, and description text

---

## 6. How to add a new experience entry

In `index.html`, find the experience section (look for `id="experience"`).

Inside the `<div class="timeline">`, find a block like this:

```html
<!-- ENTRY START — copy this block to add a new entry -->
<div class="timeline-entry">
  <h3>Research Intern</h3>
  <p class="org">[Company / Lab / Organization Name]</p>
  <p class="dates">Jun 2022 – Aug 2022</p>
  <p>
    Description of what you did.
  </p>
</div>
<!-- ENTRY END -->
```

Copy everything from `<!-- ENTRY START -->` to `<!-- ENTRY END -->`, paste it below the last entry, and fill in your details.

---

## 7. How to add photos to the Creative section

### Step 1 — Upload your image to GitHub
1. Go to your repository → `images` folder
2. Click **Add file → Upload files**
3. Upload your image (JPG or PNG)
4. Note the exact filename (e.g. `photo-04.jpg`)
5. Click **Commit changes**

### Step 2 — Add the image block in index.html

In `index.html`, find the Creative section (look for `id="creative"`).

Find a block like this:

```html
<!-- ITEM START — change data-category="photography" for Photography items -->
<figure class="creative-item" data-category="photography">
  <img src="images/photo-01.jpg" alt="Photograph 1" />
  <figcaption class="creative-caption">
    <span class="creative-category-tag">Photography</span><br />
    [Location, subject, or series name]
  </figcaption>
</figure>
<!-- ITEM END -->
```

Copy it, paste it below the last `<!-- ITEM END -->`, then:
- Change `data-category` to: `making`, `drawing`, or `photography`
- Change `src="images/photo-01.jpg"` to your uploaded filename
- Change the caption text
- Change `<span class="creative-category-tag">Photography</span>` to match your category

---

## 8. How to change colors

Open `css/style.css`. At the very top of the file you will see:

```css
:root {
  --bg:      #f7f8fc;   /* page background — off-white */
  --surface: #ffffff;   /* card/panel background — white */
  --text:    #1c2340;   /* main text color — deep navy */
  --accent:  #3a6bc9;   /* accent color — slate blue */
  --muted:   #6b7280;   /* secondary text — gray */
  --border:  #e2e8f0;   /* borders and dividers */
}
```

Change the color codes (the `#xxxxxx` values) to any color you like.  
You can find color codes at [https://colorpicker.me](https://colorpicker.me) or [https://coolors.co](https://coolors.co).

**Example — change accent to deep green:**
```css
--accent: #1a7a4a;
```

After changing one value, all buttons, links, and highlights update automatically.

---

## 9. How to change your social links

In `index.html`, find the hero links section:

```html
<div class="hero-links">
  <a href="mailto:jeonhj@kaist.ac.kr" class="hero-link">✉ Email</a>
  <a href="https://github.com/jeonhj706" class="hero-link" target="_blank">GitHub</a>
</div>
```

- **Email:** change `mailto:jeonhj@kaist.ac.kr` to `mailto:your@email.com`
- **GitHub:** change the URL to your GitHub profile URL
- **Add LinkedIn:** remove the `<!--` and `-->` around the LinkedIn line to make it visible
- **Add CV:** remove the `<!--` and `-->` around the CV line and replace `YOUR_CV_LINK_HERE` with the URL to your CV (e.g. a Google Drive link)

---

## 10. Troubleshooting

### My image is not showing
- Check that the filename in `src="images/..."` matches the uploaded filename **exactly** (including uppercase/lowercase)
- Make sure the image is in the `images` folder, not the root folder
- Wait 1–2 minutes after uploading — GitHub Pages takes a moment to update

### My changes are not showing on the live site
- GitHub Pages can take 1–5 minutes to update after you commit changes
- Try hard-refreshing the page: press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Check that you clicked **Commit changes** and did not just close the editor

### A section is not visible / page looks broken
- Make sure you did not accidentally delete a `>` or `<` character from a tag
- If something breaks, GitHub keeps a history of all changes. Go to your repository → click **History** → click the last working version → click **Revert**

### The Creative filter buttons are not working
- Make sure `data-category` in your image block matches one of: `making`, `drawing`, `photography` (all lowercase, no spaces)
- The file `js/main.js` must be present in the `js` folder

---

*Last updated: 2025 · Built with plain HTML, CSS, and JavaScript on GitHub Pages*
