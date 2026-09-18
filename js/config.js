/**
 * ============================================================
 *  WEDDING CONFIGURATION — BADARUDHEEN KP & HUDHA ABDULSALAM
 *  Edit this file to update all wedding details across the site
 * ============================================================
 */
window.WEDDING_CONFIG = {

  /* ── SEO & METADATA ─────────────────────────────────────── */
  seo: {
    title:             'Badarudheen KP & Hudha Abdulsalam | Wedding Invitation',
    description:       'With the blessings of Allah, join us in celebrating the Nikah and Wedding Celebration of Badarudheen KP & Hudha Abdulsalam — Nikah at Noonheri Juma Masjid, and Reception at Groom\'s Residence, Kannadiparamba, Kannur on Sunday, 04 October 2026.',
    ogTitle:           'Badarudheen KP & Hudha Abdulsalam | Wedding Invitation',
    ogDescription:     'You are warmly invited to join us for the Nikah and Wedding Celebration of Badarudheen KP & Hudha Abdulsalam — Sunday, 04 October 2026.',
    ogImage:           'og-image.jpg',
    canonicalUrl:      'https://badarudheen-hudha.vercel.app/',
    themeColor:        '#C8A96A',
  },

  /* ── COUPLE ─────────────────────────────────────────────── */
  groom: {
    firstName:         'Badarudheen',
    fullName:          'Badarudheen KP',
    role:              'The Groom',
    parentLabel:       'Beloved Son of',
    parents: [
      { name: 'Mr. EV Muhammed Kunhi',      prefix: '' },
      { name: 'Mrs. KP Subaida (Late)',     prefix: '&' },
    ],
  },

  bride: {
    firstName:         'Hudha',
    fullName:          'Hudha Abdulsalam',
    role:              'The Bride',
    parentLabel:       'Beloved Daughter of',
    parents: [
      { name: 'Mr. Abdulsalam K',           prefix: '' },
      { name: 'Mrs. Jameela CM',            prefix: '&' },
    ],
  },

  /* ── HOSTING FAMILY ─────────────────────────────────────── */
  host: {
    familyName:        'KP FAMILY',
    hostName:          'Mr. EV Muhammed Kunhi & Mrs. KP Subaida (Late)',
    hostTitle:         'Invite you to join us for the Nikah and Wedding Celebration of our son',
    inviteIntro:       'on the occasion of the Nikah and Wedding Celebration of our son',
    navLogo:           'B & H',
  },

  /* ── DATES ───────────────────────────────────────────────── */
  dates: {
    displayRange:      '04 October 2026',
    displayDot:        '04 · 10 · 2026',
  },

  /* ── COUNTDOWN ───────────────────────────────────────────── */
  countdown: {
    nikkah: {
      label:   'Nikah Ceremony',
      target:  '2026-10-04T11:00:00',
    },
    reception: {
      label:   'Reception',
      target:  '2026-10-04T12:00:00',
    },
  },

  /* ── EVENTS ──────────────────────────────────────────────── */
  events: [
    {
      id:        'nikah',
      type:      'Sacred Ceremony',
      title:     'Nikah',
      icon:      'fas fa-mosque',
      dayName:   'Sunday',
      date:      '04 October 2026',
      hijriDate: '1448, Rabi al-Thani',
      time:      '11:00 AM',
      venue: {
        name:    'NOONHERI JUMA MASJID',
        address: 'Noonheri, Kannur',
      },
      mapsUrl:   'https://www.google.com/maps/search/?api=1&query=Noonheri+Juma+Masjid+Kannur',
      mapsLabel: 'Open Google Maps',
    },
    {
      id:        'reception',
      type:      'Celebration',
      title:     'Reception',
      icon:      'fas fa-star',
      dayName:   'Sunday',
      date:      '04 October 2026',
      hijriDate: '1448, Rabi al-Thani',
      time:      'Following Nikah',
      venue: {
        name:    "GROOM'S RESIDENCE",
        address: 'KP House, Varamroad, Kannadiparamba, Kannur',
      },
      mapsUrl:   "https://www.google.com/maps/search/?api=1&query=11%C2%B056'25.9%22N+75%C2%B025'22.2%22E",
      mapsLabel: 'Open Google Maps',
    },
  ],

  /* ── GALLERY IMAGES ──────────────────────────────────────── */
  gallery: [
    { src: 'assets/images/gallery-1.jpg', alt: 'Badarudheen & Hudha — Photo 1' },
    { src: 'assets/images/gallery-2.jpg', alt: 'Badarudheen & Hudha — Photo 2' },
    { src: 'assets/images/gallery-3.jpg', alt: 'Badarudheen & Hudha — Photo 3' },
    { src: 'assets/images/gallery-4.jpg', alt: 'Badarudheen & Hudha — Photo 4' },
    { src: 'assets/images/gallery-5.jpg', alt: 'Badarudheen & Hudha — Photo 5' },
  ],

  /* ── MUSIC ───────────────────────────────────────────────── */
  music: {
    src:    'assets/music.mp3',
    volume: 0.45,
  },

  /* ── REGARDS SECTION ─────────────────────────────────────── */
  regards: {
    heading: 'WITH LOVE FROM',
    columns: [
      {
        role:   "Groom's Family",
        names:  ['Mr. EV Muhammed Kunhi & Mrs. KP Subaida (Late)', 'KP House, Varamroad, Kannadiparamba, Kannur'],
      },
      {
        role:   "Bride's Family",
        names:  ['Mr. Abdulsalam K & Mrs. Jameela CM', 'Baithul Hamd, Noonheri'],
      },
    ],
  },

  /* ── FOOTER ──────────────────────────────────────────────── */
  footer: {
    message:     'We look forward to celebrating this special day with you.',
    tagline:     'Best compliments from: Family & friends',
  },

  /* ── ADMIN (Wishes Wall moderation) ─────────────────────────
     Visit the site with ?admin=1 added to the URL, e.g.:
       https://your-site.com/?admin=1
     You'll be asked for this password once per browser session.
     CHANGE THIS to something only you know before sharing the link. */
  admin: {
    password: 'BadarudheenHudha2026',
  },

};
