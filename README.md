# Adigyogi Car Rentals — V6 React Website

This is an **additive upgrade to V5**. Its saffron, ivory, terracotta and dark-brown palette, text-only brand, Home / Destinations / Cars / About / Contact pages, animated Om ornaments and overall layout remain intact. V6 adds three temple destinations, three group-travel vehicle categories, a verified-by-owner contact number, a genuine multi-stop enquiry workflow, and extra photo/page motion.

## Run in VS Code

Extract the ZIP. Open the `Adigyogi_Car_Rentals_V6` directory in VS Code. In the integrated terminal:

```bash
npm install
npm run dev
```

Visit the address Vite prints, normally `http://localhost:5173`. For deployment, run `npm run build`; host the generated `dist/` directory on Vercel, Netlify or another static host. Navigation uses hash routes, so static hosting needs no redirect configuration.

**No installation preview:** Open the included `Adigyogi_Car_Rentals_V6_Interactive_Demo.html` in a browser. React, CSS and all illustrative fallback images are self-contained in that file. Remote authentic Wikimedia temple images and Google Fonts are optional, and only load while online.

## Additions in V6

### New destination pages, featured visuals, booking selections and map locations

- **Ganagapur — Shri Dattatreya Temple / Nirgun Math**, Kalaburagi district, Karnataka. Source: [Kalaburagi District Government — Places of Interest](https://kalaburagi.nic.in/en/places-of-interest/). Ganagapur is in **Karnataka**, not Maharashtra.
- **Jejuri — Khandoba Temple**, Pune district, Maharashtra. Source: [Maharashtra Department of Tourism — Jejuri](https://maharashtratourism.gov.in/temple/jejuri/).
- **Kolhapur — Ambabai Mahalakshmi Temple**, Kolhapur district, Maharashtra. Source: [Maharashtra Department of Tourism — Mahalaxmi](https://maharashtratourism.gov.in/temple/mahalaxmi/).

The homepage retains its original six-tile destination mosaic and adds a visually matching row of three destination cards below it. All nine sites appear on the Destinations page, in the hero-image rotation, in the destination modal, in ride planning and on the destinations map. The contact page **still has no map**, as requested in V5.

### New vehicle categories

- **Force Tempo Traveller** — sample 12-passenger configuration; group journeys.
- **Force Urbania** — sample 16-passenger configuration; premium larger-group travel.
- **Force Trax Cruiser** — sample 9-passenger configuration; utility group vehicle.

They appear on the Home fleet section, full Cars page, filters, comparison table and booking form. These capacities are **representative only**; actual models/variants have different layouts. Source: [Force Motors vehicle catalogue](https://www.forcemotors.com/vehicles/) and [Trax Cruiser](https://www.forcemotors.com/vehicles/trax-cruiser/). They **are not verified fleet vehicles or a promise of stock**. The 3 original V5 vehicles are retained. All car images are locally bundled, crisp illustrative representative renders (not documentary fleet photographs).

### Contact — the number you supplied

The public mobile number is **9657469781**. It appears in the desktop header, Contact page, WhatsApp and phone links, and footer. Set in `src/App.jsx` as:

```js
const CONTACT_CONFIG = {
  whatsapp: '919657469781', // country code for wa.me
  email: '',                // enter a verified business email if needed
  phone: '9657469781'
};
```

WhatsApp enquiry actions pre-address that number; tap-to-call uses `tel:+919657469781`. **Please confirm this number is activated for WhatsApp** before publishing. Email is still deliberately unconfigured; don't put an invented email address in the site.

### New multi-temple trip planner

- **Plan a multi-temple trip** entry point below the existing home search, and another on the Destinations page.
- Also available from **Trip type → Multi-temple trip**, or **Destination → Multiple destinations** in the booking form.
- Select **two or more** of the nine temples in the interactive picture-based chooser.
- The itinerary appears as ordered numbered stops; tap any selected stop to preview its matching temple photo in the modal hero and trip snapshot.
- Choose a car, specify 1–16 travellers depending on vehicle capacity, enter pickup / travel date / time / traveller details. If invalid, the form shows specific validation messages.
- The prepared enquiry contains the **ordered temple route** and chosen vehicle and can be copied or sent through WhatsApp to the number provided. The browser saves drafts locally.

### Cinematic motion

- Image curtain reveal / slow push-in on hero and booking visuals.
- Soft scene-transition entrances between the **existing pages**.
- Tactile motion on the new temple photo choices, multi-stop itinerary, vehicle cards and call-to-action buttons.
- Subtle moving Om ornaments / sunlit shimmer aligned to the existing color palette.
- Respects `prefers-reduced-motion`; no scrolling-text marquees.

## Authentic temple photo references & fallback distinction

The three added temples try to show **actual Wikimedia Commons photographs while online**:

- [Ganagapur Dattatreya Temple photo](https://commons.wikimedia.org/wiki/File:Ganagapur_Dattatreya_Temple_Sri_Kshetra_Ganagapur.jpg) — FailedEngineer2027, CC BY-SA 4.0.
- [Khandoba Temple, Jejuri photo](https://commons.wikimedia.org/wiki/File:Jejuri.JPG) — PratibhaS Pawar; check the specific file-page license before commercial publishing.
- [Mahalaxmi Temple, Kolhapur photo](https://commons.wikimedia.org/wiki/File:Mahalaxmi_temple_kolhapur.jpg) — RT Creation, CC BY-SA 4.0.

The six V5 sources and credits are unchanged in `PHOTO_CREDITS` in `src/App.jsx` and the in-app credits dialog.

**Reliability:** Since direct image downloads were not available in the build environment, genuine temple photos have not been bundled. The three new `public/images/ganagapur.webp`, `jejuri.webp`, `kolhapur.webp` are **illustrative, location-inspired artwork, not photographs of the real buildings**, and are displayed offline or when a remote image cannot load. The extra vehicle images `force-*.webp` are also illustrative representations. For fully offline authenticity, obtain appropriately licensed genuine photos, bundle them in `public/images`, and update `LOCAL` mappings after checking attribution and reuse terms. Never present illustrations as verifiable site photographs.

## Files

- `src/App.jsx`: data for nine places and six vehicles, all pages and form behaviour, contact settings, photo-source references.
- `src/styles.css`: untouched V5 styles plus additive V6 layout, multi-stop components, and cinematic transitions at the end.
- `public/images/`: V5 assets plus six new illustrative WebP assets.
- `build_v6.cjs`: optional bundled standalone HTML builder (requires `npm install` for TypeScript).
- `Adigyogi_Car_Rentals_V6_Interactive_Demo.html`: ready-to-open, self-contained React demo.

## Testing & readiness

JSX compiled; the standalone React demo was checked in a Chromium browser at **1440px desktop and 390px mobile**. Confirmed nine destinations, six cars, local image loading, correct destination photo selection, new filter buttons, 10 location map pins including Nashik, multi-temple selection, 11-traveller Traveller enquiry success, full route in prepared enquiry, tap-to-call and WhatsApp links, and contact map remaining absent. No page exceptions or horizontal overflow were observed on those test views.

**This remains a frontend enquiry demo**, not a live reservation service. Sending or preparing a request does not guarantee a vehicle, driver, route, availability, price, or payment. Confirm fleet availability, route feasibility, fares, licensing, accessibility, and privacy/data-handling terms before live deployment. Production Vite build still needs to be run on a machine with npm dependencies available.
