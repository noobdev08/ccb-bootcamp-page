# Code & Create Bootcamp (CCB) Website Development Guide

## 🎯 Component Architecture: Reusable Vanilla JS

We are using a **"Vanilla JS Component"** pattern to build our common UI elements (Header and Footer). This method ensures that all pages share the exact same Header and Footer code, which is perfect for maintaining consistency and making site-wide updates instantly.

**This means you should NEVER copy/paste the Header or Footer HTML markup into your new page files.**

### How to Use Components on Your New Page

To integrate the Header and Footer into any new page (e.g., `tracks.html`), you only need to follow three steps, using the existing `About.html` and `scripts/about.js` files as your template.

| Step | Location | Action | Reference Example |
| :--- | :--- | :--- | :--- |
| **1. Create Mount Points** | Your new `.html` file | Add a placeholder `div` element where the component will be injected. | See `About.html`: `<div id="header"></div>` and `<div id="footer-container"></div>` |
| **2. Create Page Entry Script** | `scripts/your-page.js` | Create a new JavaScript file and place the `import` statements at the top. | See `scripts/about.js` |
| **3. Instantiate (The Call)** | `scripts/your-page.js` | Call the `createHeader` and `createFooter` functions, passing the ID of your mount points. | See `scripts/about.js`: `createHeader("header");` |

---

### **Template for Your New Page's JS (`scripts/tracks.js`)**

```javascript
// 1. Import the reusable component functions
import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

// 2. Call the functions to inject the components into your HTML
createHeader("header"); 
createFooter("footer-container");