# Skill Tech Software Solutions Pvt Ltd — Frontend Starter Project

A structured, responsive frontend starter project using **HTML5, CSS3, and vanilla JavaScript ES modules**.

## 1. Project overview

This project is the frontend only. It contains the public pages, styles, browser-side behavior, images/icons/fonts folders, and starter SEO files.

**Important architecture rule:** The browser communicates with a backend API over HTTP/HTTPS. It must never connect directly to MySQL. Do not place database passwords, private API keys, JWT signing secrets, or other confidential values in frontend files.

## 2. Folder structure

```text
Skill-Tech-Software-Solutions-Pvt-Ltd/
├── index.html
├── about.html
├── services.html
├── contact.html
├── 404.html
├── README.md
├── .gitignore
└── assets/
    ├── css/
    │   ├── reset.css
    │   ├── variables.css
    │   ├── global.css
    │   ├── layout.css
    │   ├── components.css
    │   ├── responsive.css
    │   └── pages/
    │       ├── home.css
    │       ├── about.css
    │       ├── services.css
    │       └── contact.css
    ├── js/
    │   ├── config.js
    │   ├── main.js
    │   ├── api/
    │   │   ├── http.js
    │   │   └── contact.api.js
    │   ├── components/
    │   │   ├── navbar.js
    │   │   └── footer.js
    │   ├── pages/
    │   │   ├── home.js
    │   │   ├── about.js
    │   │   ├── services.js
    │   │   └── contact.js
    │   └── utils/
    │       ├── dom.js
    │       └── validators.js
    ├── images/
    ├── icons/
    ├── fonts/
    └── videos/
├── robots.txt
├── sitemap.xml
├── favicon.svg
└── site.webmanifest
```

## 3. Folder and file explanation

### Root HTML pages
- `index.html`: Main landing page and overview of the company.
- `about.html`: Company introduction and working principles.
- `services.html`: Services provided by the company.
- `contact.html`: Contact form and contact information.
- `404.html`: Custom not-found page. Configure your hosting provider to use it for missing pages.

### `assets/css/`
- `reset.css`: Consistent browser baseline.
- `variables.css`: Shared design tokens such as colors, typography, spacing, and borders.
- `global.css`: Global typography, body, links, and common base styles.
- `layout.css`: Shared header, navigation, footer, container, and section layout.
- `components.css`: Reusable buttons, cards, forms, badges, and status messages.
- `responsive.css`: Shared mobile and tablet behavior.
- `pages/`: Styles used only by a specific page. This prevents page-specific CSS from becoming mixed into global styles.

### `assets/js/`
- `config.js`: Public configuration, including the backend API base URL. It must not contain secrets.
- `main.js`: Initializes shared frontend behavior and the mobile navigation.
- `api/http.js`: Central `fetch()` helper for JSON requests and HTTP errors.
- `api/contact.api.js`: Contact form API function.
- `components/navbar.js`: Mobile navigation interaction.
- `components/footer.js`: Shared footer utilities such as the current year.
- `pages/`: JavaScript initialization for individual pages.
- `utils/dom.js`: Small DOM helper functions.
- `utils/validators.js`: Client-side form validation helpers.

### `assets/images/`, `icons/`, `fonts/`, and `videos/`
Keep public media files in their relevant directories. Optimize images before production. Only use fonts and media that you own or are licensed to use.

### SEO files
- `robots.txt`: Crawler guidance for public pages.
- `sitemap.xml`: Canonical public page URLs to submit to Google Search Console. Replace the example domain before launch.
- `favicon.svg`: Browser tab icon.
- `site.webmanifest`: Optional web-app metadata.

## 4. Run the frontend locally

### Option A — VS Code Live Server
1. Open this main project folder in Visual Studio Code.
2. Install the Live Server extension if it is not already installed.
3. Right-click `index.html`.
4. Choose **Open with Live Server**.
5. Use the local URL shown by the extension.

### Option B — Python static server
If Python is installed, open a terminal in this folder and run:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

The contact form will validate the fields and attempt to call the configured API. If the backend has not been built or started, the page will show a friendly error message. The frontend does not store submissions by itself.

## 5. Connect a backend API

Edit `assets/js/config.js`:

```js
export const API_BASE_URL = "http://localhost:3000/api/v1";
```

When your Node.js backend is deployed, replace this with the actual HTTPS API URL, for example:

```js
export const API_BASE_URL = "https://api.your-real-domain.com/api/v1";
```

The contact form expects a backend endpoint:

```text
POST /contact
Content-Type: application/json
```

Example JSON request:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "phone": "optional phone number",
  "message": "The visitor's message"
}
```

Define and implement the matching route in the backend, validate the data on the server, apply spam/rate protection, and save it to MySQL if required. Browser validation is for usability only; server-side validation is mandatory.

## 6. Design and code conventions

1. Keep all CSS under `assets/css/` and all frontend JavaScript under `assets/js/`.
2. Use shared CSS variables in `variables.css` rather than duplicating brand colors.
3. Keep page-specific styles and logic in their `pages/` subfolders.
4. Use semantic HTML, meaningful headings, form labels, and keyboard-accessible controls.
5. Prefer `textContent` or safe DOM construction when displaying API data; avoid inserting untrusted values with `innerHTML`.
6. Keep the frontend independent from the database.
7. Keep production API endpoints on HTTPS.
8. Never commit secrets, private customer data, or production credentials.

## 7. Before production deployment

- [ ] Replace sample company content and contact details with approved business information.
- [ ] Set the correct production API URL in `assets/js/config.js`.
- [ ] Confirm the backend endpoint and JSON contract match.
- [ ] Test all links, forms, and responsive layouts.
- [ ] Add real contact details and any required privacy/legal pages.
- [ ] Replace example URLs in `sitemap.xml` and `robots.txt`.
- [ ] Set unique page titles, meta descriptions, and canonical URLs.
- [ ] Optimize images and test keyboard accessibility.
- [ ] Deploy over HTTPS and verify there are no mixed-content warnings.
- [ ] Submit the sitemap in Google Search Console after the real domain is live.

## 8. Hosting note

This is a static frontend project. Upload the contents of this folder to the document root for the selected website, commonly `public_html` on standard shared hosting. The Node.js API and MySQL database are deployed and configured separately, unless you intentionally configure a supported VPS/reverse-proxy architecture.

## 9. Brand details

The starter uses the project name **Skill Tech Software Solutions Pvt Ltd**. Review and replace all sample content, domain names, email addresses, and phone details before publishing.
