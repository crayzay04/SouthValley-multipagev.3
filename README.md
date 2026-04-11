# South Valley Surf Soccer Club

Official website for **South Valley Surf** — Bakersfield's premier youth soccer club, part of the Surf Soccer Nation network.

## Tech Stack

- **React 18** + **React Router v6**
- **Tailwind CSS v3**
- **Vite** (build tool)
- Google Fonts: Bebas Neue (headings) + Inter (body)

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky navbar with hamburger menu
│   ├── Footer.jsx          # Full footer with newsletter input
│   ├── HeroSection.jsx     # Reusable page hero with wave decoration
│   ├── StatBar.jsx         # Blue stats highlight bar
│   ├── BlogCard.jsx        # News post card
│   ├── CoachCard.jsx       # Coach profile card
│   ├── QuickLinkGrid.jsx   # 6-tile icon quick-link grid
│   └── FAQAccordion.jsx    # Animated accordion FAQ
├── data/
│   ├── posts.js            # News/blog posts
│   ├── coaches.js          # Boys & girls coaching staff
│   ├── tryouts.js          # Tryout schedule by age group
│   └── faqs.js             # Tryout FAQ items
├── pages/
│   ├── Home.jsx            # Homepage with hero, stats, mission, news preview
│   ├── Tryouts.jsx         # Tryout schedule, FAQ, contact CTA
│   ├── Coaches.jsx         # Boys & girls coaching staff
│   ├── Contact.jsx         # Contact form + club info + map placeholder
│   ├── News.jsx            # Filtered news listing
│   └── NewsPost.jsx        # Individual post with More News section
├── App.jsx                 # Router + page fade-in transition
├── main.jsx                # React entry point
└── index.css               # Tailwind directives + custom animations
```

## Club Details

- **Club:** South Valley Surf Soccer Club
- **Location:** 5001 Fruitvale Avenue, Bakersfield, CA 93308
- **Phone:** (661) 599-1108
- **Registrar:** Dana Hamilton
- **Network:** Surf Soccer Nation
- **Fan Wear:** surf.soccerpost.com
