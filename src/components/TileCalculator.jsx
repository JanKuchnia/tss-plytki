import React, { useState } from 'react';
import { Calculator, Box, Percent, RefreshCw, FileText, Phone, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { withBase } from '../lib/base.js';

const TILE_SIZES = [
  { label: '60 × 60 cm', m2PerBox: 1.44, boxesEstimate: true },
  { label: '120 × 60 cm', m2PerBox: 1.44, boxesEstimate: true },
  { label: '120 × 120 cm', m2PerBox: 2.88, boxesEstimate: true },
  { label: '30 × 30 cm / Mozaika', m2PerBox: 1.08, boxesEstimate: true },
];

export default function TileCalculator() {
  const [area, setArea] = useState(25);
  const [reservePercent, setReservePercent] = useState(10);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  const selectedSize = TILE_SIZES[selectedSizeIndex];

  // Calculations
  const areaWithReserve = parseFloat((area * (1 + reservePercent / 100)).toFixed(1));
  const boxesNeeded = Math.ceil(areaWithReserve / selectedSize.m2PerBox);
  
  // Material price range estimation (average ceramic/gres prices in PL: 80 - 180 PLN/m2)
  const materialMin = Math.round(areaWithReserve * 80);
  const materialMax = Math.round(areaWithReserve * 180);

  return (
    <div className="calculator-card glass-card">
      <div className="calc-header">
        <div className="calc-badge">
          <Calculator size={16} className="text-gold" />
          <span>Kalkulator Zapotrzebowania Płytek</span>
        </div>
        <h3>Ile płytek potrzebujesz na swój projekt?</h3>
        <p>Oblicz zapas na docinki, liczbę kartonów oraz orientacyjny koszt materiału.</p>
      </div>

      <div className="calc-body">
        {/* Input 1: Area */}
        <div className="calc-group">
          <div className="group-label-row">
            <label>Metraż pomieszczenia (m²):</label>
            <span className="value-highlight">{area} m²</span>
          </div>
          <input 
            type="range" 
            min="3" 
            max="150" 
            value={area} 
            onChange={(e) => setArea(parseInt(e.target.value))}
            className="custom-range"
          />
        </div>

        {/* Input 2: Reserve Percent */}
        <div className="calc-group">
          <div className="group-label-row">
            <label>Zapas na docinki & wzór układania:</label>
            <span className="value-highlight">+{reservePercent}%</span>
          </div>
          <div className="reserve-buttons">
            {[
              { val: 5, label: '+5% (Standard)', desc: 'Układ prosty' },
              { val: 10, label: '+10% (Wielki format)', desc: 'Układ z przesunięciem' },
              { val: 15, label: '+15% (Skosy / Jodełka)', desc: 'Wiele docięć' },
            ].map((r) => (
              <button
                key={r.val}
                type="button"
                className={`reserve-btn ${reservePercent === r.val ? 'selected' : ''}`}
                onClick={() => setReservePercent(r.val)}
              >
                <strong>{r.label}</strong>
                <small>{r.desc}</small>
              </button>
            ))}
          </div>
        </div>

        {/* Input 3: Tile Format */}
        <div className="calc-group">
          <label className="group-label">Format płytek:</label>
          <div className="sizes-grid">
            {TILE_SIZES.map((size, idx) => (
              <button
                key={size.label}
                type="button"
                className={`size-btn ${selectedSizeIndex === idx ? 'selected' : ''}`}
                onClick={() => setSelectedSizeIndex(idx)}
              >
                <span>{size.label}</span>
                {selectedSizeIndex === idx && <Check size={14} className="text-gold" />}
              </button>
            ))}
          </div>
        </div>

        {/* Results Panel */}
        <div className="results-panel">
          <div className="result-metric">
            <span className="metric-label">
              <Percent size={16} className="text-gold" />
              <span>Łączny metraż z zapasem:</span>
            </span>
            <span className="metric-value">{areaWithReserve} m²</span>
          </div>

          <div className="result-metric">
            <span className="metric-label">
              <Box size={16} className="text-gold" />
              <span>Szacowana liczba kartonów:</span>
            </span>
            <span className="metric-value">{boxesNeeded} op. ({selectedSize.m2PerBox} m²/op.)</span>
          </div>

          <div className="result-metric highlight">
            <span className="metric-label">
              <FileText size={16} className="text-gold" />
              <span>Orientacyjny koszt materiału:</span>
            </span>
            <span className="metric-value text-gold">{materialMin.toLocaleString()} – {materialMax.toLocaleString()} zł</span>
          </div>
        </div>
      </div>

      <div className="calc-footer">
        <p className="calc-disclaimer">
          <ShieldCheck size={16} className="text-emerald" />
          <span>Robocizna zależy od podłoża i formatu płytek. Chcesz znać dokładny koszt montażu?</span>
        </p>

        <div className="calc-actions">
          <a href={withBase('/kontakt')} class="btn btn-primary btn-lg">
            <span>Darmowa wycena montażu</span>
            <ArrowRight size={18} />
          </a>
          <a href="tel:603100978" class="btn btn-secondary">
            <Phone size={18} />
            <span>Zadzwoń: 603 100 978</span>
          </a>
        </div>
      </div>

      <style>{`
        .calculator-card {
          padding: 2.5rem;
          max-width: 820px;
          margin: 0 auto;
        }

        .calc-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .calc-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.35rem 0.85rem;
          background: rgba(212, 163, 115, 0.12);
          border: 1px solid var(--border-gold);
          border-radius: var(--radius-full);
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--accent-travertine);
          margin-bottom: 0.75rem;
        }

        .calc-body {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .group-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .group-label {
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.6rem;
          display: block;
        }

        .value-highlight {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--accent-travertine);
        }

        .reserve-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .reserve-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.85rem 0.5rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-md);
          color: var(--text-main);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .reserve-btn:hover { border-color: var(--accent-travertine); }
        .reserve-btn.selected {
          border-color: var(--accent-travertine);
          background-color: rgba(212, 163, 115, 0.12);
          color: var(--accent-travertine);
        }

        .reserve-btn small {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 0.2rem;
        }

        .sizes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .size-btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-weight: 600;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .size-btn:hover { border-color: var(--accent-travertine); }
        .size-btn.selected {
          border-color: var(--accent-travertine);
          background-color: rgba(212, 163, 115, 0.12);
          color: var(--accent-travertine);
        }

        .results-panel {
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-md);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .result-metric {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.95rem;
        }

        .result-metric.highlight {
          padding-top: 0.85rem;
          border-top: 1px solid var(--border-stone);
          font-size: 1.1rem;
          font-weight: 700;
        }

        .metric-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-muted);
        }

        .metric-value {
          font-weight: 700;
          color: var(--text-main);
        }

        .calc-footer {
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-stone);
        }

        .calc-disclaimer {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          justify-content: center;
          text-align: center;
        }

        .calc-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 640px) {
          .calculator-card { padding: 1.5rem; }
          .reserve-buttons { grid-template-columns: 1fr; }
          .sizes-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
