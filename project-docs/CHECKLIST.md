# What2Eat website – launch checklist

Status as delivered on 17 November 2026.

## Completed

### Website
- [x] 7 required pages: Home, About, Features, How It Works, Blog, Contact, FAQ
- [x] 10 original blog articles, each with unique title, meta description, table of contents,
      H2/H3 structure, internal links, app references and Google Play CTAs
- [x] 404 page (noindex)
- [x] Mobile-first responsive layout (tested at 390 px and 1366 px wide)
- [x] Real app logo and 6 real app screenshots (no invented screens)
- [x] Brand palette taken from the app (orange, saffron, navy, green) on a cream background
- [x] Accessible: skip link, visible keyboard focus, alt text on all images, reduced-motion support
- [x] Contact form that opens the visitor's email app (no server, no paid service)
- [x] Privacy policy, terms and account deletion links in the footer and contact page

### SEO
- [x] Unique title and meta description on every page
- [x] Canonical URL on every page
- [x] Open Graph + Twitter card tags with a 1200×630 social image
- [x] One H1 per page, semantic HTML5 landmarks (header, nav, main, article, footer)
- [x] Breadcrumbs (visible + BreadcrumbList schema) on all inner pages
- [x] JSON-LD: Organization, WebSite, WebPage, MobileApplication, BlogPosting, Blog,
      BreadcrumbList, FAQPage (FAQ page only), HowTo, AboutPage, ContactPage
- [x] sitemap.xml (17 URLs), robots.txt, RSS feed, web manifest, favicons
- [x] Performance: no frameworks, ~14 KB CSS, ~4 KB JS, WebP screenshots with srcset,
      lazy loading below the fold, width/height on images to prevent layout shift
- [x] Google Play buttons with install referrer tracking on every page

### GEO
- [x] Consistent factual app description across pages and schema
- [x] FAQ and "Quick answers" sections in articles
- [x] llms.txt with app facts and page index

### Tests run
- [x] Internal links and in-page anchors: 0 broken
- [x] Images and srcset files exist
- [x] Metadata present and unique on all pages; title ≤ 70 chars, description 50–165 chars
- [x] JSON-LD parses on every page
- [x] Every sitemap URL exists and matches its page's canonical
- [x] Every page has a working Google Play link to com.aura.what2eat
- [x] Mobile menu, FAQ accordion and hero dish shuffle work with no JavaScript errors
- [x] No horizontal overflow on mobile

## Pending (needs you)

- [ ] Create repo `fawwad345776.github.io`, upload files, enable Pages (README steps)
- [ ] Verify the site in Google Search Console and submit the sitemap
- [ ] Add the site in Bing Webmaster Tools
- [ ] Optional: add GA4 Measurement ID in `assets/js/main.js` and update the privacy policy
- [ ] Add the website URL in Play Console and in the What2Eat GitHub repo "About" field
- [ ] Link the old `docs/index.html` hub to the new site
- [ ] Run the live URLs through https://search.google.com/test/rich-results and
      https://validator.schema.org (couldn't be run from the build environment, which has no internet)
- [ ] Run PageSpeed Insights on the live home page: https://pagespeed.web.dev
- [ ] Optional: replace the custom "Free on Google Play" button with Google's official badge from
      https://play.google.com/intl/en_us/badges/ (keep the same link and `data-play` attribute)
- [ ] Optional: add real food photos you own or that are free to use (e.g. your own cooking photos)
- [ ] Create Pinterest and Instagram accounts and follow `MARKETING-GUIDE.md`
- [ ] Publish a new article every 1–2 weeks and add it to sitemap, feed, blog index and llms.txt

## Notes
- MobileApplication schema has no rating. Google shows app rich results only with a real
  aggregateRating/review, and we did not add fake ones. Once the Play Store rating is meaningful you
  could add it, but it must match the real Play Store rating exactly.
- FAQ rich results are shown by Google only for a limited set of sites; the FAQPage markup is
  still valid and helps machines understand the page.
- No rankings or AI recommendations are guaranteed.
