SM GOLD SARGODHA  FULL WEBSITE PACKAGE
==========================================

WHAT'S INSIDE  15 PAGES (in /dist, ready to deploy)
- index.html                     Home
- gold-rate.html                 Today's Gold Rate (24K/22K/21K/18K + gold guide)
- services.html                  Services overview + "how it works" process
- custom-jewelry-making.html     Service detail page
- bridal-gold-sets.html          Service detail page
- gold-polishing-repair.html     Service detail page
- daily-wear-collection.html     Service detail page
- gallery.html                   Jewelry gallery (filterable by category)
- about.html                     Full brand story, timeline, values
- faq.html                       Full FAQ library, grouped by topic
- contact.html                   Contact form, map, hours, phone/WhatsApp
- sitemap.html                   Visible page index (links to every page)
- privacy-policy.html / terms-of-service.html   Legal pages
- 404.html                       Custom "page not found"

- css/style.css   All styling  black/gold/cream jewelry theme, fully responsive
- js/script.js    Nav menu, dropdown, scroll reveal, back-to-top, gallery filters
- robots.txt       Crawl rules
- sitemap.xml      All pages listed for Google Search Console

FOLDER LAYOUT
  smgold-website/
    netlify.toml        <- Netlify config (points to dist/, sets cache headers)
    README.txt           <- this file
    dist/                <- THE DEPLOYABLE SITE  everything above lives here
      index.html, about.html, ... css/, js/, robots.txt, sitemap.xml

DEPLOYING TO NETLIFY (FREE)
Option A  Drag and drop (fastest, no account setup beyond signing in):
  1. Go to app.netlify.com and log in (free plan is enough).
  2. On the "Sites" tab, drag the "dist" folder straight onto the page.
  3. Netlify uploads it and gives you a live *.netlify.app URL instantly.
  4. Later, add your own domain (smgold.sargodha.pk) under Site settings ->
     Domain management, free of charge on Netlify's side (you only pay your
     domain registrar for the domain itself).

Option B  Connect a Git repository (auto-redeploys on every push):
  1. Push this whole "smgold-website" folder (including netlify.toml) to a
     GitHub/GitLab/Bitbucket repo.
  2. In Netlify: Add new site -> Import an existing project -> pick the repo.
  3. Netlify reads netlify.toml automatically: publish directory "dist",
     no build command needed since this is a plain static site.
  4. Every future push redeploys the site automatically.

Netlify also auto-serves dist/404.html for any broken/missing URL, so the
custom 404 page works with zero extra configuration.

DESIGN NOTES
Every page shares the same header  black utility bar (phone, WhatsApp,
address, "Open 24 Hours") plus the daily gold rate ticker, sticky nav with
a Services dropdown  plus a matching footer and a mobile-only sticky
Call + WhatsApp bar at the bottom of the screen. Sections fade in on
scrolland every page was checked for: single H1, working internal
links, valid structured dataand responsive grid breakpoints at tablet
(960px) and mobile (720px/480px) widths.

CONTACT DETAILS USED SITE-WIDE
- Address: 1st Floor, Alfalah Market, Sarafa Bazar, Sargodha
- Email: Services.smgold@gmail.com
- Phone/WhatsApp: 0323 6069069
These live in one place in the generator script and are pulled into every
page, the footer, the contact form actionand the JewelryStore schema 
so if either ever changes again, only one constant needs updating.

KEYWORD-DRIVEN COPY UPDATE
Page copy across Home, Gold Rate, Services, all 4 service detail pages,
Gallery, About, FAQ and Contact was revised to naturally work in the
keyword set from SM-Gold-Keyword-Research-and-SEO-Analysis.xlsx  matched
to each page by search intent (local "near me" terms on Contact/About,
gold-rate terms on Gold Rate, product terms on Gallery/Daily Wear, bridal
terms on Bridal Gold Sets, etc.) rather than stuffed in one place. A new
"Gold in Sargodha & Pakistan" section was added to About with sourced
market stats (population, jewellery market size, price-volatility and
local-search behaviour) framed as genuine customer-facing context, with
sources cited at the bottom of the section.

HOW TO ADD YOUR OWN PHOTOS
No stock or AI-generated images were used, so nothing here misrepresents
your actual jewelry. The gallery page and bridal section use elegant
placeholder tiles instead. To upgrade:
1. Put image files in an "images" folder inside dist/, next to index.html.
2. Replace the ".bridal-visual" div (index.html) and ".gallery-tile"
   divs (gallery.html) with <img> tags pointing at real photos.
3. Update the og:image / twitter:image URLs in each page's <head>.

BEFORE YOU GO LIVE
1. Contact form (contact.html) posts to FormSubmit (formsubmit.co) using
   Services.smgold@gmail.com. The first submission triggers a one-time
   confirmation email  click the link inside it to activate the form.
   Free, no sign-up needed.
2. Gold rates: rate numbers are static placeholders in index.html and
   gold-rate.html (search "rate-value"). Update them each time prices
   change, or connect a live rate feed later.
3. Canonical/OG URLs point to https://smgold.sargodha.pk/  update the
   SITE constant if you deploy under a different domain, then resubmit
   sitemap.xml in Google Search Console.
4. Privacy Policy / Terms pages are a generic template, not legal advice 
   have them reviewed by a professional before relying on them.
5. If you edit any page by hand later, remember to copy the change into
   both the page in dist/ (what Netlify serves)  that's the only copy
   that matters once deployed.

SEO & STRUCTURED DATA (for full-site indexing in Google)
- Every page has a unique title, meta description, canonical URLand
  Open Graph/Twitter tags.
- JSON-LD structured data now covers the whole site:
  - WebSite schema (with SearchAction) + JewelryStore + FAQPage on the
    homepage.
  - Service + BreadcrumbList schema on every service page.
  - FAQPage schema on faq.html.
  - BreadcrumbList schema on every interior page, including the legal
    pages, so Google understands how pages relate to each other.
  - ItemList schema on the new sitemap.html, explicitly listing every
    page on the site  plus it's a real, visible page linked from every
    footer, so both users and search engines can find everything in one
    click.
- Note on "showing all pages in Google": no schema markup can force
  Google to display every URL in search results  that's Google's own
  ranking/sitelinks decision. What this setup does is give Google every
  signal it uses to fully crawl, understand and (most likely) index all
  15 pages: a complete XML sitemap, a linked HTML sitemap, breadcrumbs
  everywhereand clean internal linking between every page.
- After deploying: submit both sitemap.xml and the live site to Google
  Search Console and Bing Webmaster Toolsand use "Request Indexing" on
  the homepage to speed things up.
- Dedicated gold-rate.html and 4 separate service pages exist specifically
  so each can rank for its own long-tail keyword (e.g. "gold rate Sargodha
  today", "bridal gold sets Sargodha", "gold polishing repair Sargodha")
  rather than competing against each other on one page.
- Keep gold-rate.html numbers current  freshness helps it rank for
  "today's gold rate Sargodha" searches.
