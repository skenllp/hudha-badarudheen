# Badarudheen KP & Hudha Abdulsalam — Wedding Invitation Website

A premium, luxury Muslim wedding invitation website built with pure HTML5, CSS3, and Vanilla JavaScript.

## Structure

```
wedding-invitation/
├── index.html              # Main HTML file
├── css/
│   ├── style.css           # Main styles, variables, sections
│   ├── responsive.css      # Media queries (320px → 1440px+)
│   └── animations.css      # AOS-like scroll animations, keyframes
├── js/
│   ├── config.js           # Wedding details configuration
│   ├── main.js             # Gate/loading screen, nav, music player
│   ├── countdown.js        # Live countdown to the Nikah/Reception
│   └── animations.js       # Scroll reveal, parallax, gallery lightbox, RSVP
├── assets/
│   ├── images/
│   │   ├── couple.jpg       # Couple portrait (gate + opening section)
│   │   ├── hero-bg.jpg      # Background photo (hero/countdown/events)
│   │   └── og-image.png     # Social sharing image
│   └── music.mp3
├── og-image.jpg / og-image.png  # WhatsApp / social preview image
└── README.md
```

## Couple Details

- **Groom:** Badarudheen KP, S/o Mr. EV Muhammed Kunhi & Mrs. KP Subaida (Late)
  (KP House, Varamroad, Kannadiparamba, Kannur)
- **Bride:** Hudha Abdulsalam, D/o Mr. Abdulsalam K & Mrs. Jameela CM
  (Baithul Hamd, Noonheri)

## Events

| Event      | Date                     | Time              | Venue                                                      |
|------------|--------------------------|-------------------|------------------------------------------------------------|
| Nikah      | Sunday, 04 October 2026  | 10:00 AM          | Noonheri Juma Masjid, Noonheri                             |
| Reception  | Sunday, 04 October 2026  | Following Nikah   | Groom's Residence (KP House, Kannadiparamba, Kannur)       |

## Colors

| Token    | Value     |
|----------|-----------|
| Cream    | `#FAF6F0` |
| Rose     | `#C9385C` |
| Gold     | `#D4A017` |
| Blue     | `#3D6B99` |

## Fonts

- **Script (names):** Great Vibes
- **Serif (headings):** Playfair Display
- **Content (body):** Cormorant Garamond / Lato
- **Arabic:** Amiri

## Features

- ✅ Luxury tap-to-open gate with Bismillah + English translation
- ✅ Hero with parallax & entrance animations
- ✅ Live countdown to the Nikah, then to the Reception
- ✅ Bride & Groom / Family section
- ✅ Events card with Google Maps links for both venues
- ✅ Wedding programme timeline
- ✅ Quote section (Quran verse)
- ✅ Gallery with lightbox (ready to enable — add photos to `assets/images/gallery-*.jpg`)
- ✅ Background music player with mute toggle
- ✅ Scroll-reveal animations
- ✅ Fully responsive (320px → 1440px+)
- ✅ SEO meta tags, Open Graph & Twitter Card

## Notes

- Countdown targets are set in `js/config.js` under `countdown.nikkah.target` /
  `countdown.reception.target`, and mirrored in `js/countdown.js`'s fallback defaults.
- Google Maps links use search-query URLs for "Nandagokula Convention Centre, Hassan"
  and "Wind Valley Resort, Cherkala" — swap in exact share links once available
  (in `index.html` and `js/config.js`).
- `og:url` / `canonical` use a placeholder domain `https://sajjad-ayesha.wedding/` —
  update once the site is deployed to its real address.
