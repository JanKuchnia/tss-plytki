# SEO Strategy — TSS Płytki (Władysław Kuchnia)

Local service business, registered in Węglówka (gmina Wiśniowa, powiat myślenicki, Małopolskie), but the bulk of actual work happens around Kraków and across Małopolska more broadly — the site should read as "based in Węglówka, working all over Małopolska, Kraków included" not "hyper-local village tradesman." One Google review found (5/5). Facebook page exists: facebook.com/tssplytki. No direct named competitors — the two businesses flagged in the original research pass (PSB Mrówka, eplytki.pl) are generic regional retailers, not competitors, and have been dropped from consideration.

## 1. Confirmed facts (client-verified 2026-07-22)

- Address: Węglówka 104, 32-412 Węglówka — real, registered address (siedziba), not the main work area
- Phone: 603 100 978 — real
- Email: tssplytki@gmail.com
- Facebook: https://www.facebook.com/tssplytki/
- Hours: Pon–Pt 07:00–17:00, Sob–Nd zamknięte
- Władysław Kuchnia: 25+ lat osobistego doświadczenia w branży (w różnych firmach); TSS Płytki jako firma działa od 2023
- Work area: registered in Węglówka, but most jobs are around Kraków and across Małopolska — lead with that in copy and in `areaServed`
- One review so far: Szymon Dudek, Google, 5/5, ~rok temu, "Polecam Porządna firma"
- No set/published prices — calculator and quote copy must stay in ranges/estimates, never fixed prices; labor cost specifically varies too much by tile/format/substrate to show even a range, calculator should route to a quote instead
- NIP: 681-135-28-13 — confirmed, use in footer and schema `identifier`/`vatID`
- Speed/efficiency is a real trait worth listing (25 years of practice → fewer stalls/rework, not a rushed job) — kept as a plain characteristic (hero badge, WhyUs bullet) rather than a specific day-count or head-to-head competitor comparison, since a concrete "we did in 2 days what they quoted 10" claim reads as corner-cutting to some readers and isn't independently verifiable.
- Site photos: this is a from-scratch rebuild, but real project photos already exist from the current site — use those instead of generated/stock placeholder images in `/public/images/`. Migrate and rename them with descriptive alt text (see gallery caption rule below) rather than sourcing new generated imagery.

Still open, not blocking launch: nothing.

## 2. Site architecture & keyword map

No blog, no city-specific landing pages — 8 towns is small enough to cover as a single "obszar działania" section + `areaServed` schema, not 8 separate location pages (the local-service template's own quality gate kicks in at 30+ pages; we're nowhere near needing that complexity). Adding one page per town here would be pure keyword-stuffing scaffolding for a one-person business — skip it.

Kraków carries far more search volume than any of the small towns, and it's confirmed as the center of gravity for actual jobs — it now leads the keyword set on every page rather than sitting as an afterthought.

| Page | Primary keyword | Secondary keywords | Intent |
|---|---|---|---|
| `/` (home) | glazurnik Kraków / płytkarz Kraków | remont łazienki Małopolska, układanie płytek Myślenice, Węglówka | navigational + commercial |
| `/uslugi` | usługi glazurnicze Kraków i Małopolska | płytkarz Myślenice, ekipa remontowa | commercial |
| `/uslugi/ukladanie-plytek-wielkoformatowych` | układanie płytek wielkoformatowych Kraków | płytki 120x120, gres wielkoformatowy montaż | commercial, high intent |
| `/uslugi/remonty-lazienek-pod-klucz` | remont łazienki pod klucz Kraków | remont łazienki cena, łazienka pod klucz Myślenice | commercial, high intent |
| `/uslugi/ciecie-45-gierowanie` | gierowanie płytek 45 stopni | cięcie płytek pod kątem, listwy bez profili | commercial, niche/differentiator |
| `/uslugi/wykonczenia-wnetrz-posadzki` | układanie płytek na podłodze salon kuchnia | fartuch kuchenny płytki, posadzki Kraków | commercial |
| `/uslugi/hydroizolacja-tarasy-balkony` | hydroizolacja tarasu Kraków | izolacja balkonu, płytki mrozoodporne taras | commercial, seasonal (spring peak) |
| `/uslugi/wylewki-samopoziomujace` | wylewki samopoziomujące | wypoziomowanie podłogi pod płytki | commercial, upsell/informational |
| `/realizacje` | realizacje glazurnik Kraków | zdjęcia remontów łazienek Małopolska | trust/proof |
| `/kalkulator` | kalkulator płytek m2 | ile płytek na m2, zapas na docinki | informational tool, link-bait |
| `/o-firmie` | Władysław Kuchnia TSS Płytki | glazurnik z 25-letnim doświadczeniem | brand/trust |
| `/kontakt` | kontakt glazurnik Kraków / Węglówka | telefon płytkarz Myślenice | navigational, conversion |

Internal linking rule: every service page links back to `/kontakt` (CTA), to `/kalkulator`, and to `/realizacje` filtered (or just linked) by relevant category. `/uslugi/index` links to all 6 subpages. Homepage links to all of the above once each — no orphans.

## 3. Schema plan

Single `HomeAndConstructionBusiness` JSON-LD in `Layout.astro`, present on every page (already drafted in the project brief — reuse it, don't rebuild per page). Add page-specific schema only where it earns its keep:

| Page | Additional schema |
|---|---|
| Every service subpage | `Service` object nested under the business, `areaServed` repeated |
| `/kontakt` | `ContactPage` wrapper (optional — LocalBusiness already carries phone/address) |
| `/realizacje` | `ImageObject` per photo if captions are unique (skip if generic) |
| `/faq` (section, not a page) | `FAQPage` with the accordion's actual Q&A — this is the highest-value schema addition available, use it |
| Home or footer (review) | `AggregateRating` (5/5, reviewCount: 1) + one `Review` node for Szymon Dudek's Google review — legitimate since it's a real, verifiable review; don't fabricate more to inflate the count |

`openingHours` is now confirmed — add to base schema: `Mo-Fr 07:00-17:00`. `priceRange` stays out: no set prices exist, so don't force a `$$` guess into schema. `NIP` is confirmed (681-135-28-13) — add as `taxID`/`vatID` on the base `HomeAndConstructionBusiness` node.

## 4. On-page basics per page

- One `<h1>` per page, matches primary keyword naturally (not exact-match stuffed)
- Title tag: `{Page keyword} | TSS Płytki` — 50–60 chars
- Meta description: 140–155 chars, includes phone-call or quote CTA
- Images: use the real project photos from the current site (client confirmed they exist), not generated/stock placeholders — rename to descriptive filenames and write Polish alt text describing material/room/technique (e.g. "gierowany narożnik prysznica, gres wielkoformatowy 120×60 cm"), not "gallery-5.jpg" or generic captions
- Service pages target 500–700 words of genuine content (scope, materials, process) — long enough for Google, short enough that a real customer reads it

## 5. Local SEO essentials (do these, they matter more than the website copy)

1. Create/claim Google Business Profile under "TSS Płytki — Władysław Kuchnia", matching NAP exactly to the site footer. Registered address is Węglówka, but set service-area to include Kraków explicitly (GBP allows a registered address in one place with a separate service-area radius/city list — use that, don't relocate the legal address).
2. Set GBP service area to Kraków + the other towns (cities/postal codes only — Google disallows whole-region service areas as of June 2025). Kraków should be listed first given it's where most jobs actually happen.
3. Only one Google review exists (Szymon Dudek, 5/5). Ask every completed client going forward for a review — this is still the biggest visibility gap, bigger than any on-page tweak.
4. Link the existing Facebook page (facebook.com/tssplytki) from the site footer/navbar and make sure its NAP matches exactly; get listed on Panorama Firm / Firmy.net / Cylex too.
5. `FAQPage` schema doubles as AI-answer bait (ChatGPT/Perplexity local recommendations lean on FAQ content) — write real answers, not marketing fluff, in `Faq.astro`.

## 6. What's deliberately not in this plan

- No blog/content calendar — a one-person tiling business gets more ROI from GBP + reviews than from monthly articles; revisit only if the owner wants ongoing content investment later.
- No per-town landing pages — `areaServed` + one service-area section covers 8 nearby towns without duplicate-content risk.
- No backlink/PR roadmap — first priority is existing NAP consistency and reviews, not link building, given the business has near-zero online footprint today.
- No paid keyword-volume data (DataForSEO not available in this pass) — keyword map above is built from category logic and Polish trade-search patterns, not verified search volume; sanity-check with Google Keyword Planner or Search Console once the site is live.

## 7. Copy

Full page-by-page and section-by-section copywriting lives in `docs/copy-write/` — one file per page, named after the route.
