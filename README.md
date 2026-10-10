# KOVA Kombucha — Multi-page Website Starter

A responsive, conventional multi-page website concept based on the supplied KOVA/Craft Kombucha source and requested redevelopment brief. It includes Home, Our Story, Flavours & Bottles, Taproom, Wholesale, and Contact pages.

## Included

- `index.html` — homepage with flavour lineup, brewing story, seasonal release, taproom and find-us CTAs
- `home2.html` — alternative single-page editorial craft showcase homepage with full interactive experience
- `story.html` — brewing philosophy and process
- `products.html` — four signature flavours, bottled range, seasonal releases
- `taproom.html` — experience, sample hours/address, tasting options
- `wholesale.html` — partner options and wholesale enquiry form
- `contact.html` — contact details, location placeholder, enquiry form
- `css/styles.css` — responsive styles, typography, layout and image-led sections
- `js/script.js` — mobile navigation, current-page state, back-to-top, email-form handling
- `original-source/` — copies of the three files supplied for review

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a browser, or run a local static server from this folder (for example, `python -m http.server 8000`) and visit `http://localhost:8000`.
3. The Google Fonts and image URLs use external services, so an internet connection is needed to load those resources. Replace the remote image URLs with licensed, locally stored brand photography before production if you need a self-contained deployment.

## Important launch checklist

This is a front-end starter, not a deployed business system. Before publishing:

1. **Verify business information.** `18 Market Lane, Your City`, `+91 00000 00000`, and the stated taproom hours are sample placeholders carried forward from the reviewed source. Replace with confirmed details.
2. **Verify the brand and product details.** Confirm product names, ingredients, claims, availability, packaging formats and any health/nutrition wording. Avoid unverified health claims.
3. **Replace imagery appropriately.** The current pages use externally hosted Unsplash image URLs for design preview. Confirm each image is appropriate and its licence/usage terms; replace with your own product, brewing, bottle and taproom photography for the final site. The CSS can mock up can artwork as a visual placeholder; it is not production packaging artwork.
4. **Connect forms.** Contact and wholesale forms open a pre-filled email using `mailto:`. They do not submit to a database or guarantee delivery. Connect a secure backend or reputable form service, add spam protection and test submissions.
5. **Connect ordering.** There is no cart, payment gateway, stock management, shipping logic or order API. Add an e-commerce provider before advertising “Order Online” as a live checkout.
6. **Set the real map location.** The contact page intentionally uses a map-style placeholder rather than embedding an unverified address.
7. **Production readiness.** Add real social links, privacy policy, cookie/analytics choices as applicable, accessibility checks, SEO/social metadata, analytics, hosting and domain configuration.

## Technology

Semantic HTML5, CSS3 and vanilla JavaScript. No framework or build step required.

## Image sources

The stylesheet references images hosted by `images.unsplash.com`. These are illustrative photo selections for the prototype. For a commercial launch, verify rights and replace with approved assets. No image files are bundled locally in this starter because network access was unavailable when the package was assembled.
