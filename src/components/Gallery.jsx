import React, { useState } from 'react';
import { Filter, ZoomIn, Tag, Calendar, MapPin, X, ArrowRight, Phone } from 'lucide-react';
import { withBase } from '../lib/base.js';

const GALLERY_ITEMS = [
  {
    id: 1,
    image: '/images/gallery-1.webp',
    title: 'Łazienka w marmurze i spiekach',
    category: 'lazienki',
    categoryLabel: 'Łazienki Pod Klucz',
    location: 'Kraków — Wola Justowska',
    desc: 'Czyste gierowanie narożników 45° bez listw, płyty gresowe 120x60 cm i ukryty odpływ liniowy.'
  },
  {
    id: 2,
    image: '/images/gallery-2.webp',
    title: 'Wielki Format 120x120 cm w strefie dziennej',
    category: 'wielki-format',
    categoryLabel: 'Wielki Format',
    location: 'Kraków — Podgórze',
    desc: 'Montaż próżniowy płyt gresowych na podłogowym ogrzewaniu z wąską spoiną 1.5 mm.'
  },
  {
    id: 3,
    image: '/images/gallery-3.webp',
    title: 'Prysznic walk-in z gierowaną wnęką',
    category: 'lazienki',
    categoryLabel: 'Łazienki Pod Klucz',
    location: 'Myślenice',
    desc: 'Pełna hydroizolacja taśmowa, wnęka kosmetyczna docinana pod kątem 45°.'
  },
  {
    id: 4,
    image: '/images/gallery-4.webp',
    title: 'Nowoczesna łazienka z podświetleniem LED',
    category: 'lazienki',
    categoryLabel: 'Łazienki Pod Klucz',
    location: 'Kraków — Bronowice',
    desc: 'Połączenie struktury drewna i ciemnego gresu z precyzyjnym docięciem przy armaturze.'
  },
  {
    id: 5,
    image: '/images/gallery-5.webp',
    title: 'Posadzka gresowa w salonie',
    category: 'posadzki',
    categoryLabel: 'Kuchnie & Posadzki',
    location: 'Dobczyce',
    desc: 'Idealne wypoziomowanie laserowe podłoża i montaż wielkoformatowych płyt.'
  },
  {
    id: 6,
    image: '/images/gallery-6.webp',
    title: 'Precyzyjna linia fugi i symetria',
    category: 'wielki-format',
    categoryLabel: 'Wielki Format',
    location: 'Rabka-Zdrój',
    desc: 'Idealne dopasowanie rysunku żył na łączeniach płyty marmurowej.'
  },
  {
    id: 7,
    image: '/images/gallery-7-hotel-tribe-krakow.webp',
    title: 'Hotel TRIBE Kraków — Realizacja komercyjna',
    category: 'komercyjne',
    categoryLabel: 'Tarasy & Komercyjne',
    location: 'Kraków — Stare Miasto',
    desc: 'Kompleksowe prace glazurnicze w obiekcie hotelowym TRIBE w Krakowie.'
  },
  {
    id: 8,
    image: '/images/gallery-8.webp',
    title: 'Fartuch kuchenny z mozaiką',
    category: 'posadzki',
    categoryLabel: 'Kuchnie & Posadzki',
    location: 'Mszana Dolna',
    desc: 'Fuga epoksydowa odporna na tłuszcz i plamy, cięcie przy gniazdkach elektrycznych.'
  },
  {
    id: 9,
    image: '/images/gallery-9.webp',
    title: 'Taras zewnętrzny z gresu mrozoodpornego',
    category: 'komercyjne',
    categoryLabel: 'Tarasy & Komercyjne',
    location: 'Węglówka',
    desc: 'Dwuskładnikowa hydroizolacja podpłytkowa z profilami okapowymi odpornymi na mróz.'
  },
  {
    id: 10,
    image: '/images/gallery-10.webp',
    title: 'Wykończenie strefy umywalkowej',
    category: 'lazienki',
    categoryLabel: 'Łazienki Pod Klucz',
    location: 'Wiśniowa',
    desc: 'Montaż płyt strukturalnych i bezfugi wokół szafki wiszącej.'
  },
  {
    id: 11,
    image: '/images/gallery-11.webp',
    title: 'Gierowanie krawędzi 45° na słupie',
    category: 'wielki-format',
    categoryLabel: 'Wielki Format',
    location: 'Kraków — Krowodrza',
    desc: 'Idealnie ostre połączenie narożne bez najmniejszego uszczerbku szkliwa.'
  },
  {
    id: 12,
    image: '/images/gallery-12.webp',
    title: 'Wylewka samopoziomująca i laser',
    category: 'posadzki',
    categoryLabel: 'Kuchnie & Posadzki',
    location: 'Limanowa',
    desc: 'Przygotowanie podłoża z idealną płaszczyzną pod spiek kwarcowy.'
  },
  {
    id: 13,
    image: '/images/gallery-13.webp',
    title: 'Hydroizolacja płynną folią i taśmami',
    category: 'lazienki',
    categoryLabel: 'Łazienki Pod Klucz',
    location: 'Kraków — Ruczaj',
    desc: 'Krytyczny etap szczelności strefy mokrej przed ułożeniem płytek.'
  },
  {
    id: 14,
    image: '/images/gallery-14.webp',
    title: 'Schody wewnętrzne wykończone gresem',
    category: 'posadzki',
    categoryLabel: 'Kuchnie & Posadzki',
    location: 'Myślenice',
    desc: 'Gierowane stopnice i podstopnice z antypoślizgową krawędzią.'
  },
  {
    id: 15,
    image: '/images/gallery-15.webp',
    title: 'Obudowa kominka z wielkoformatowych płyt',
    category: 'wielki-format',
    categoryLabel: 'Wielki Format',
    location: 'Kraków — Dębniki',
    desc: 'Montaż płyt żaroodpornych z dylatacją termiczną.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Wszystkie realizacje' },
  { id: 'lazienki', label: 'Łazienki Pod Klucz' },
  { id: 'wielki-format', label: 'Wielki Format' },
  { id: 'posadzki', label: 'Kuchnie & Posadzki' },
  { id: 'komercyjne', label: 'Tarasy & Komercyjne' },
];

export default function Gallery({ limit }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <div className="gallery-section-wrapper">
      {/* Category Filter Tabs */}
      <div className="filter-tabs">
        <div className="filter-badge">
          <Filter size={16} className="text-gold" />
          <span>Filtruj wg kategorii:</span>
        </div>
        <div className="tabs-row">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="gallery-grid">
        {displayedItems.map(item => (
          <div 
            key={item.id} 
            className="gallery-card glass-card"
            onClick={() => setSelectedImage(item)}
          >
            <div className="card-image-wrap">
              <img 
                src={withBase(item.image)}
                alt={item.title} 
                loading="lazy"
              />
              <div className="image-overlay">
                <span className="zoom-btn">
                  <ZoomIn size={20} />
                  <span>Powiększ</span>
                </span>
              </div>
              <span className="card-category-tag">{item.categoryLabel}</span>
            </div>
            
            <div className="card-content">
              <h4>{item.title}</h4>
              <p className="card-location">
                <MapPin size={14} className="text-gold" />
                <span>{item.location}</span>
              </p>
              <p className="card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-modal glass-card-static" onClick={e => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Zamknij podgląd"
            >
              <X size={24} />
            </button>

            <div className="lightbox-image-wrap">
              <img src={withBase(selectedImage.image)} alt={selectedImage.title} />
            </div>

            <div className="lightbox-info">
              <span className="badge badge-gold">{selectedImage.categoryLabel}</span>
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-location">
                <MapPin size={16} className="text-gold" />
                <span>{selectedImage.location}</span>
              </p>
              <p className="lightbox-desc">{selectedImage.desc}</p>

              <div className="lightbox-cta-row">
                <a href={withBase('/kontakt')} className="btn btn-primary btn-sm">
                  <span>Chcę podobny projekt</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:603100978" className="btn btn-secondary btn-sm">
                  <Phone size={16} />
                  <span>603 100 978</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-section-wrapper {
          width: 100%;
        }

        .filter-tabs {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .filter-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .tabs-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.65rem;
        }

        .filter-btn {
          padding: 0.6rem 1.2rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-full);
          color: var(--text-muted);
          font-family: var(--font-body);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .filter-btn:hover {
          border-color: var(--accent-travertine);
          color: var(--accent-travertine);
        }

        .filter-btn.active {
          background-color: var(--accent-travertine);
          border-color: var(--accent-travertine);
          color: #0D1117;
          box-shadow: 0 4px 15px rgba(212, 163, 115, 0.3);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.75rem;
        }

        .gallery-card {
          cursor: pointer;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .card-image-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background-color: #000;
        }

        .card-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-card:hover .card-image-wrap img {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(13, 17, 23, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-normal);
          backdrop-filter: blur(4px);
        }

        .gallery-card:hover .image-overlay {
          opacity: 1;
        }

        .zoom-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background-color: var(--accent-travertine);
          color: #0D1117;
          border-radius: var(--radius-full);
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: var(--shadow-lg);
        }

        .card-category-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 0.3rem 0.75rem;
          background: rgba(13, 17, 23, 0.85);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--accent-travertine);
        }

        .card-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex: 1;
        }

        .card-content h4 {
          font-size: 1.1rem;
          color: var(--text-main);
        }

        .card-location {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.825rem;
          color: var(--text-muted);
        }

        .card-desc {
          font-size: 0.875rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Lightbox */
        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(5, 7, 10, 0.88);
          backdrop-filter: blur(12px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .lightbox-modal {
          position: relative;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 0;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .lightbox-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 10;
          background: rgba(13, 17, 23, 0.85);
          color: var(--text-main);
          border: 1px solid var(--border-stone);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color var(--transition-fast);
        }

        .lightbox-close-btn:hover {
          background: var(--bg-card-hover);
          color: var(--accent-travertine);
        }

        .lightbox-image-wrap {
          width: 100%;
          height: 100%;
          min-height: 350px;
          background: #000;
        }

        .lightbox-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .lightbox-info {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          justify-content: center;
          width: 100%;
          box-sizing: border-box;
        }

        .lightbox-info .badge {
          align-self: flex-start;
          width: fit-content;
        }

        .lightbox-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
        }

        .lightbox-desc {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .lightbox-cta-row {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .lightbox-backdrop {
            padding: 1rem 0.75rem;
          }

          .lightbox-modal {
            grid-template-columns: 1fr;
            max-height: 85vh;
          }

          .lightbox-image-wrap {
            min-height: 200px;
            max-height: 260px;
          }

          .lightbox-info {
            padding: 1.25rem 1rem;
            gap: 0.75rem;
          }

          .lightbox-cta-row {
            flex-direction: column;
            width: 100%;
            gap: 0.6rem;
          }

          .lightbox-cta-row .btn {
            width: 100%;
            justify-content: center;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
