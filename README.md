# What2Eat – official marketing website

Static website for the What2Eat Android app (`com.aura.what2eat`) by MFApp.
Plain HTML, CSS and JavaScript. No build step, no paid services, no dependencies.

Live URL (after deployment): **https://fawwad345776.github.io/**

---

## What's inside

```
/                         Home
/features/                Features (+ Free vs PRO)
/how-it-works/            How it works
/about/                   About What2Eat
/faq/                     FAQ (FAQPage schema)
/contact/                 Contact (email form, no server)
/blog/                    Blog index + RSS feed (/blog/feed.xml)
/blog/<10 articles>/      SEO articles
/404.html                 Not-found page (noindex)
/assets/css/style.css     All styles
/assets/js/main.js        Menu, hero dish shuffle, contact form, optional GA4
/assets/img/              Logo, real app screenshots (WebP), social image
robots.txt  sitemap.xml  llms.txt  site.webmanifest  favicon.ico  .nojekyll
/project-docs/            Marketing guide + checklist (blocked in robots.txt)
```

Every page has a unique title and meta description, a canonical URL, Open Graph and Twitter tags,
and JSON-LD structured data (Organization, WebSite, WebPage, MobileApplication, BreadcrumbList,
BlogPosting, FAQPage, HowTo, AboutPage, ContactPage).

---

## Deploy free on GitHub Pages (recommended)

The site uses root paths like `/features/`, so it must live at the root of a domain.
On GitHub that means a **user site** repository named exactly `fawwad345776.github.io`.

1. Sign in to GitHub as **Fawwad345776**.
2. Click **New repository**. Name it exactly: `fawwad345776.github.io` → Public → Create.
3. Click **uploading an existing file**. Unzip `what2eat-website.zip` on your computer, open the
   folder, select **everything inside it** (including `.nojekyll`, which may be hidden – on Windows
   enable *View → Hidden items*, on Mac press `Cmd + Shift + .`) and drag it into the browser.
4. Commit the files.
5. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**,
   branch **main**, folder **/ (root)** → Save.
6. Wait 1–3 minutes, then open https://fawwad345776.github.io/

Your existing pages keep working, because project sites stay under their own path:
- https://fawwad345776.github.io/What2Eat/privacy.html
- https://fawwad345776.github.io/What2Eat/terms.html
- https://fawwad345776.github.io/What2Eat/delete-account.html

### Using Git instead of the browser
```bash
git clone https://github.com/Fawwad345776/fawwad345776.github.io.git
cd fawwad345776.github.io
# copy all website files here (including .nojekyll)
git add -A
git commit -m "Launch What2Eat website"
git push
```

### Alternative: Cloudflare Pages (also free)
1. Push the files to any GitHub repo.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
3. Framework preset: **None**. Build command: *empty*. Output directory: `/`.
4. Deploy. If you use Cloudflare, replace every `https://fawwad345776.github.io` in the HTML files,
   `sitemap.xml`, `robots.txt`, `llms.txt` and `blog/feed.xml` with your new domain
   (any code editor's "Find and replace in files" does this in one step).

### Custom domain later (optional)
If you buy a domain (e.g. what2eat.app), add it in **Settings → Pages → Custom domain**, then
find-and-replace `https://fawwad345776.github.io` with `https://yourdomain` in all files.

---

## After deployment

1. **Google Search Console** – see `project-docs/MARKETING-GUIDE.md`, section 1.
2. **Google Analytics 4 (optional)** – create a property, copy the Measurement ID (`G-…`) and paste it
   into `GA4_ID = ""` at the top of `assets/js/main.js`. Clicks on Google Play buttons are then tracked
   as the `play_store_click` event. If you leave it empty, no analytics or cookies load at all.
   If you enable it, mention Google Analytics in your privacy policy.
3. **Play Console** – Store presence → Store settings → **Website**: `https://fawwad345776.github.io/`.
4. **Old landing page** – edit `docs/index.html` in the What2Eat repo to link to the new website.

## Install tracking
All Google Play buttons include a `referrer` parameter
(`utm_source=website&utm_medium=<button position>`). In Play Console →
*Statistics / Store performance → Traffic sources* you can see installs that came from the website.

## Editing content
- Text lives directly in the HTML files. Keep the `<title>`, `<meta name="description">`,
  `og:` and `twitter:` tags in sync when you change a page's topic.
- When you add a page, add its URL to `sitemap.xml` and link to it from at least one other page.
- When you add a blog article, add it to `/blog/index.html`, `sitemap.xml`, `blog/feed.xml` and `llms.txt`.
- New screenshots: export WebP at 360px and 720px wide into `assets/img/` with the same names.

## Contact
info.mfsoft@gmail.com
