# What2Eat – free marketing setup guide

Budget: $0. Everything below uses free tools only. No paid backlinks, no link farms, no fake reviews.
Nothing here guarantees rankings or AI recommendations. These steps make the site easy to find,
crawl and understand, and they give people real reasons to visit and link to it.

---

## 1. Google Search Console (do this first)

1. Open https://search.google.com/search-console and sign in with your Google account.
2. Click **Add property** → choose **URL prefix** → enter `https://fawwad345776.github.io/` → Continue.
   (The *Domain* option needs DNS access, which github.io does not give you.)
3. Choose the **HTML file** verification method and download the file (looks like `google1a2b3c.html`).
4. Upload that file to the root of the `fawwad345776.github.io` repo (same level as `index.html`). Commit.
5. Wait a minute, open `https://fawwad345776.github.io/google1a2b3c.html` to confirm it loads,
   then click **Verify** in Search Console.
   - Alternative: choose **HTML tag**, copy the `<meta name="google-site-verification" …>` line and
     paste it into the `<head>` of `index.html`, just under `<meta charset="utf-8">`.
6. Left menu → **Sitemaps** → enter `sitemap.xml` → Submit.
7. Left menu → **URL inspection** → paste `https://fawwad345776.github.io/` → **Request indexing**.
   Repeat for `/features/` and two or three blog articles. (There's a daily limit; spread it out.)
8. Check weekly:
   - **Pages**: are pages "Indexed"? Fix anything listed under "Why pages aren't indexed".
   - **Performance**: which search queries show your pages. Write new articles around queries that
     get impressions but few clicks.
   - **Enhancements**: Breadcrumbs, FAQ and other structured data reports.

Expect indexing to take from a few days to a few weeks for a new site.

## 2. Google Analytics 4 (optional)

1. https://analytics.google.com → Admin → **Create property** → name "What2Eat website",
   time zone Pakistan, currency PKR or USD.
2. Choose **Web** data stream → URL `https://fawwad345776.github.io` → Create.
3. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
4. Open `assets/js/main.js` and paste it: `var GA4_ID = "G-XXXXXXXXXX";` Commit.
5. In GA4 → Admin → Events, mark `play_store_click` as a **key event** (conversion).
6. Update the privacy policy to mention website analytics.
7. Link GA4 to Search Console: GA4 Admin → Product links → Search Console links.

## 3. Bing Webmaster Tools (also feeds Copilot and DuckDuckGo results)

1. https://www.bing.com/webmasters → sign in.
2. Choose **Import from Google Search Console** (fastest, after step 1 is done). Or add the site
   manually and verify with the XML file or meta tag method.
3. **Sitemaps** → submit `https://fawwad345776.github.io/sitemap.xml`.
4. Use **URL Submission** for the home page and features page.
5. Optional: enable **IndexNow** in Bing settings for faster discovery of new articles.

## 4. Google Business Profile – not eligible

Google Business Profile is for businesses that meet customers in person (a shop or office customers
visit, or a service area you travel to). An app-only brand with no customer-facing location does not
qualify, and creating one anyway risks suspension. Skip it. If MF Soft later operates from an office
that clients visit, a profile for **MF Soft** (not What2Eat) could be created then.

## 5. Pinterest business profile

Pinterest works well for food because people search it for meal ideas and save them for later.

Setup:
1. https://business.pinterest.com → create a free business account, name "What2Eat",
   profile picture = app logo, website = `https://fawwad345776.github.io/`.
2. Settings → **Claim** your website (HTML tag method, add the meta tag to `index.html`).
3. Create boards: *Easy Pakistani Dinners*, *Quick Breakfast Ideas*, *Weekly Meal Plans*,
   *Dawat & Guest Menus*, *Cook With What You Have*, *Ramadan & Eid Recipes*.

Pins (make them free in Canva, 1000 × 1500 px):
- One pin per blog article, linking to that article.
- List pins: "7 Pakistani dinners in 30 minutes", "What to cook with eggs, onion and tomato".
- Sample weekly plan pins (use the real Weekly Planner screenshot) linking to `/features/#weekly-planner`.
- Write keyword-rich pin titles and descriptions in plain language ("easy daal recipe for weeknights").
- Post 3–5 pins a week consistently rather than many at once.

## 6. Reddit content strategy

Reddit punishes self-promotion. The goal is to be genuinely helpful, and mention the app only when it
directly answers a question.

Relevant communities (read each one's rules first): r/MealPrepSunday, r/EatCheapAndHealthy,
r/IndianFood, r/pakistan, r/karachi, r/lahore, r/islamabad, r/Cooking, r/mealplanning,
r/androidapps (check its self-promotion rules).

Rules of thumb:
- Use your personal account, say clearly you built the app when you mention it.
- 9 helpful comments for every 1 that mentions What2Eat.
- Share full value in the post itself (e.g. a complete 7-day Pakistani meal plan as text), with the
  link as an optional extra.
- In r/androidapps or similar, post a short "I built this" post with what's free and what's PRO.
- Never ask friends to upvote, never use multiple accounts.

Post ideas: "A week of Pakistani dinners under 30 minutes", "How we stopped arguing about what to
cook", "What I learned building a meal decider app as a solo developer in Pakistan".

## 7. Instagram content strategy

Account: @what2eat.app (or the closest available handle). Bio: one line on what the app does +
link to the website (or a Linktree-style page pointing to the site and Play Store).

Content pillars (rotate):
1. **"What should we cook today?"** – daily Reel/story showing the app picking a dish (screen recording).
2. **Quick recipes** – 15–30 second Reels of real dishes from the library; caption with ingredients.
3. **Meal plans** – carousel of a week's lunches and dinners.
4. **Pantry rescue** – "We had tomatoes, onions and chicken. Here's dinner."
5. **Occasions** – Ramadan iftari ideas, Eid menus, dawat planning.
6. **Behind the build** – solo developer story, new features, honest updates.

Tips: post Reels 3–4 times a week; use Urdu/Roman Urdu captions for Pakistan posts and English for
global ones; use 5–10 specific hashtags (#pakistanifood #desifood #mealplanning #whattocook);
reply to every comment; collaborate with small home-cooking creators (offer free PRO, not payment).

## 8. Free, legitimate backlink opportunities

Quality and relevance matter more than quantity. Do not buy links or use link exchanges.

| Opportunity | How |
|---|---|
| Google Play listing | Add the website URL in Play Console store settings |
| GitHub profile | Add the website to your GitHub profile and the What2Eat repo's "About" website field |
| Old What2Eat GitHub Pages hub | Link from `docs/index.html` to the new site |
| Product Hunt | Launch What2Eat (free); include the website |
| AlternativeTo | Add What2Eat as an alternative to other meal planner apps |
| Indie developer directories | e.g. "Built with" / indie app showcases, Hacker News "Show HN" |
| LinkedIn & Facebook | Company page for MFApp/MF Soft linking to the site; share each new article |
| Your own portfolio | Add What2Eat as a case study on MF Soft's portfolio |
| Guest posts | Offer genuinely useful articles to Pakistani food and lifestyle blogs |
| Food bloggers | Offer free PRO access for an honest review (they choose whether to link) |
| Local tech press/communities | Pakistani startup newsletters, university tech societies, P@SHA community |
| Quora | Answer "what should I cook today" type questions with real advice; link when relevant |
| Medium / Dev.to | "How I built a meal decider app" developer story linking to the site |

## 9. GEO (AI search) – what's already done and what helps next

Done on the site:
- Clear, consistent facts about the app on every page (name, developer, platform, features, pricing model).
- Question-and-answer content (FAQ, "Quick answers" sections in articles).
- Structured data that names the app, publisher and features.
- `llms.txt` with a factual summary. (Some AI tools read it; none are obliged to. It doesn't
  guarantee indexing or recommendations.)

What helps next:
- Get mentioned on other trustworthy sites (Product Hunt, directories, articles, Reddit threads).
  AI assistants rely heavily on what other sources say.
- Keep facts identical everywhere: Play Store description, website, social bios.
- Publish one new genuinely useful article every 1–2 weeks.
- Encourage real users to leave honest Play Store reviews (in-app review prompt). Never write fake ones.

## 10. Play Store conversion (free)

- Make the first two screenshots show the Meal Decider result and the home screen.
- Put "Decide what to cook in seconds" style benefit text in the short description.
- Use the same feature names as the website (Meal Decider, Pantry Matcher, Guest Planner).
- Use Play Console **Store listing experiments** (free) to A/B test icon, screenshots and descriptions.
- Create **custom store listings** for Pakistan (Urdu/Roman Urdu text) if you want localized copy.
