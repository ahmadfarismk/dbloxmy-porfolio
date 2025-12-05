# Content Editing Guide

Since you are familiar with HTML/JS, editing this React project will be straightforward. React just mixes HTML-like syntax (JSX) with JavaScript logic.

## 1. Where is the content?
All the visible content is located in the `src/pages/` directory.
- **Home Page**: `src/pages/Home.jsx`
- **About Page**: `src/pages/About.jsx`
- **Services Page**: `src/pages/Services.jsx`
- **Projects Page**: `src/pages/Projects.jsx`
- **Gallery Page**: `src/pages/Gallery.jsx`
- **Contact Page**: `src/pages/Contact.jsx`

## 2. How to Change Text
Open any `.jsx` file. You will see code that looks like HTML.
**Example (`src/pages/Home.jsx`):**
```jsx
<h2 className="text-gradient">Our Expertise</h2>
<p>Comprehensive solutions for your Roblox success.</p>
```
Simply change the text between the tags, just like HTML:
```jsx
<h2 className="text-gradient">Our Amazing Services</h2>
<p>We build the best games on Roblox.</p>
```

## 3. How to Change Images
Images are usually passed as strings (URLs) or imported files.
**Example (`src/pages/About.jsx`):**
```jsx
<img src="https://placehold.co/600x400..." alt="Our Studio" />
```
To use your own image:
1.  Put your image file (e.g., `office.jpg`) in the `public/` folder (create one if it doesn't exist) or `src/assets/`.
2.  Update the `src` attribute:
    ```jsx
    <img src="/office.jpg" alt="My Office" />
    ```

## 4. How to Add New Items (e.g., a new Project)
Most lists (Projects, Services, Team Members) are stored in **Arrays** at the top of the component function.
**Example (`src/pages/Projects.jsx`):**
Look for the `const projects = [...]` array.
```javascript
const projects = [
    {
        id: 1,
        title: 'Neon City Tycoon',
        category: 'Tycoon',
        image: '...'
    },
    // ... other projects
];
```
To add a new project, just add a new object to this list:
```javascript
    {
        id: 7, // Make sure ID is unique
        title: 'My New Game',
        category: 'Adventure',
        image: 'https://example.com/my-game-image.jpg'
    }
```
The code automatically loops through this array and creates the HTML for you!

## 5. Saving Changes
1.  Save the file (`Ctrl + S`).
2.  The browser will **automatically reload** with your changes (thanks to Vite).
