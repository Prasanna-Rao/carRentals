# Adigyogi Car Rentals — React website V5

A responsive, animated, elegant car-rental frontend focused on Solapur, Tuljapur, Akkalkot, Pandharpur, Shirdi, and Trimbakeshwar, near Nashik. The original **ivory / saffron / warm terracotta / dark chocolate** theme is preserved.

## Run in VS Code

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (usually `http://localhost:5173`). For publishing with a Vite host such as Vercel use `npm run build`; the output is `dist/`. The pages are hash-routed, so direct links work on static hosts.

To open a preview with no Node installation, use `Adigyogi_Car_Rentals_V5_Interactive_Demo.html`. This HTML contains the code, styling, image fallback assets and licensed React distribution. It needs no extra install.

## Features and changes in V5

- **Fleet:** Comfort Sedan (Dzire/similar), Family MPV (Ertiga/similar), Premium SUV (Innova Crysta/similar). Tempo Traveller is removed everywhere from vehicle cards, filters, booking options and comparison tables. Passenger count for the demo is 1–6.
- **Destinations:** Tulja Bhavani Temple (Tuljapur), Siddheshwar Temple (Solapur), Swami Samarth (Akkalkot), Vitthal–Rukmini (Pandharpur), Sai Baba Samadhi Mandir (Shirdi), and Trimbakeshwar Shiva Temple (Trimbak/Nashik).
- **Plan Ride:** A large temple visual, title and region appear at the top of the booking dialog. Selecting a different destination instantly updates this picture and the trip snapshot photo. Custom/multiple destinations use a neutral travel image.
- **Contact:** WhatsApp share, email compose, callback / enquiry fields and a floating WhatsApp shortcut. The map is **removed from Contact**, but destination route information is still available under Destinations.
- **Footer:** Clean © year + Adigyogi Car Rentals + All rights reserved; no “website concept.”
- **Motion:** SVG lotus / mandala ornamentation, gently breathing translucent Om glyphs, subtle sparkles, photo reveals, smooth navigation transitions, responsive car and destination hover effects. Text is stationary (no marquee). Animations respect `prefers-reduced-motion`.

## Correct real temple photo references — important

The website tries these **authentic, attributed Wikimedia Commons photographs** directly in the browser:

- [Shirdi Sai Baba Samadhi Mandir complex (2024), by Nitin3009, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Sri_Sai_Baba_Temple_,_Shirdi.jpg). Actual grey-stone Shirdi complex and distinctive gold spire, **not** a generic riverfront temple.
- [Trimbakeshwar Shiva Temple (2019), by Abhideo21, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Trimbakeshwar_Temple-Nashik-Maharashtra-1.jpg). Actual ancient black basalt Trimbakeshwar shrine, **not** an unrelated gateway.
- [Tulja Bhavani Temple's Raje Shahaji Mahadwar, Tuljapur](https://commons.wikimedia.org/wiki/File:Raje_Shahaji_Mahadwar_of_Tulja_Bhavani_Temple.jpg) — image and licensing details on Wikimedia Commons.
- [Siddheshwar Temple, Solapur](https://commons.wikimedia.org/wiki/File:Siddheshwar_temple_02.JPG).
- [Vitthal-Rukmini Temple, Pandharpur](https://commons.wikimedia.org/wiki/File:Vitthal_Rukmini_Temple_,pandharpur.jpg).
- [Swami Samarth site, Akkalkot](https://commons.wikimedia.org/wiki/File:Swami_Samarth_Akkalkot.jpg).

**Offline note / distinction:** The bundled `public/images/*.webp` are attractive AI-produced *illustrations* used as offline/broken-image fallback, **not documentary photos of named temples**. Accurate actual temple photographs load only when the remote photo server is reachable. The bundled white vehicle visuals are high-resolution **representative renders**, not photographs of owned fleet vehicles. Before publishing commercially, acquire/download permitted authentic photographs and replace the local fallbacks, and check all reuse/attribution requirements (especially those of CC BY-SA photos).

## Set up real business communications

In `src/App.jsx` find `CONTACT_CONFIG` and fill only real verified business values:

```js
const CONTACT_CONFIG = {
  whatsapp: '91XXXXXXXXXX', // numeric country code + mobile number, no spaces
  email: 'hello@your-domain.in',
  phone: '91XXXXXXXXXX',
};
```

Until configured, WhatsApp opens a share flow with **no preselected recipient**, email opens a compose draft without a recipient, and enquiries are saved only in the current browser. **No actual reservation, payment, dispatch, fare quotation or delivery backend has been implemented.** Do not use in production without confirming inventory, driver, pricing, privacy/data handling and contact details.

## Files

- `src/App.jsx`: all React pages, data, photo URLs and fallback selection, booking logic, form and interactions.
- `src/styles.css`: full responsive design system, decorative animations, accessible reduced-motion support.
- `public/images/`: offline illustrative temple visuals and high-quality car renders.
- `build_v5.cjs` and `standalone/vendor/`: optional offline demo builder (`node build_v5.cjs`).
- `Adigyogi_Car_Rentals_V5_Interactive_Demo.html`: interactive standalone artifact for immediate viewing.

## Testing

Standalone demo tested using a real browser at 1440 px desktop and 390 px mobile. Verified navigation, loaded fallback images, changing Shirdi→Trimbakeshwar inside the booking dialog, 3 fleet entries, absence of a Contact map, footer text, and scroll/width behavior. Runtime in this environment cannot download npm packages or remotely hosted photographs, so a Vite production bundle and the authenticated remote-photo loading were not directly tested.
