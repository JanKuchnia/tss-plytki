import React, { useState } from 'react';
import { 
  Check, ChevronRight, ChevronLeft, Camera, UploadCloud, 
  Trash2, Send, Mail, Bath, Utensils, Home, Sun, Sparkles, 
  Ruler, Grid, Wrench, Phone, User, MapPin
} from 'lucide-react';

const ROOM_TYPES = [
  { id: 'lazienka', label: 'Łazienka / WC', icon: Bath },
  { id: 'kuchnia', label: 'Kuchnia / Fartuch', icon: Utensils },
  { id: 'salon', label: 'Salon / Posadzka', icon: Home },
  { id: 'taras', label: 'Taras / Balkon / Schody', icon: Sun },
  { id: 'inne', label: 'Inne / Cały dom', icon: Sparkles },
];

const TILE_FORMATS = [
  { id: 'standard', label: 'Standardowy (np. 30x30, 60x60 cm)', desc: 'Klasyczne płytki ścienne i podłogowe' },
  { id: 'wielki', label: 'Wielki Format (120x60, 120x120 cm+)', desc: 'Ekskluzywne płyty gresowe i spieki' },
  { id: 'mozaika', label: 'Mozaika / Klinkier / Jodełka', desc: 'Precyzyjne drobne układy dekoracyjne' },
  { id: 'doradzcie', label: 'Nie wiem jeszcze — doradźcie', desc: 'Dobierzemy materiał podczas pomiaru' },
];

const ROOM_CONDITIONS = [
  { id: 'do_skucia', label: 'Stare płytki do skucia', desc: 'Wymagany demontaż i przygotowanie ścian' },
  { id: 'deweloperski', label: 'Gołe ściany / Stan deweloperski', desc: 'Gotowe pod podkład i hydroizolację' },
  { id: 'wylewka_potrzebna', label: 'Wyrównanie podłoża / Wylewka', desc: 'Wymaga wylewki samopoziomującej' },
];

export default function ProjectWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    roomType: 'lazienka',
    area: '15',
    tileFormat: 'wielki',
    condition: 'deweloperski',
    name: '',
    phone: '',
    city: 'Kraków',
    notes: '',
    photos: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const newPhotos = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setFormData(prev => ({
      ...prev,
      photos: [...prev.photos, ...newPhotos]
    }));
  };

  const removePhoto = (index) => {
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format mailto body
    const roomName = ROOM_TYPES.find(r => r.id === formData.roomType)?.label || formData.roomType;
    const formatName = TILE_FORMATS.find(f => f.id === formData.tileFormat)?.label || formData.tileFormat;
    const condName = ROOM_CONDITIONS.find(c => c.id === formData.condition)?.label || formData.condition;

    const subject = encodeURIComponent(`Zapytanie o wycenę — ${formData.name || 'Klient'} (${formData.city})`);
    const body = encodeURIComponent(
      `Dzień dobry,\n\nProszę o wycenę projektu remontowego:\n\n` +
      `• Pomieszczenie: ${roomName}\n` +
      `• Orientacyjny metraż: ${formData.area} m²\n` +
      `• Format płytek: ${formatName}\n` +
      `• Stan obecny: ${condName}\n` +
      `• Miejscowość: ${formData.city}\n` +
      `• Telefon: ${formData.phone}\n` +
      `• Imię: ${formData.name}\n` +
      (formData.notes ? `• Uwagi / Opis: ${formData.notes}\n` : '') +
      (formData.photos.length > 0 ? `\n(Załączono ${formData.photos.length} zdjęć w formularzu)\n` : '') +
      `\nPozdrawiam,\n${formData.name}`
    );

    window.location.href = `mailto:tssplytki@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="wizard-card glass-card-static">
      <div className="wizard-header">
        <div className="wizard-badge">
          <Sparkles size={16} className="text-gold" />
          <span>Kreator Projektu & Wyceny</span>
        </div>
        <h3>Dostań darmową wycenę w 1 minutę</h3>
        <p>Wypełnij formularz — zapytanie trafi bezpośrednio do Władysława Kuchni.</p>

        {/* Step Indicator */}
        <div className="step-indicator">
          {[1, 2, 3, 4].map(s => (
            <div 
              key={s} 
              className={`step-dot ${step === s ? 'active' : ''} ${step > s ? 'completed' : ''}`}
              onClick={() => s < step && setStep(s)}
            >
              {step > s ? <Check size={14} /> : s}
            </div>
          ))}
        </div>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="wizard-body">
          {/* STEP 1: Room & Area */}
          {step === 1 && (
            <div className="step-pane">
              <h4 className="step-title">1. Jakie pomieszczenie planujesz wykończyć?</h4>
              
              <div className="options-grid">
                {ROOM_TYPES.map(item => {
                  const Icon = item.icon;
                  const isSelected = formData.roomType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={`option-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setFormData({ ...formData, roomType: item.id })}
                    >
                      <Icon size={24} className={isSelected ? 'text-gold' : 'text-muted'} />
                      <span>{item.label}</span>
                      {isSelected && <Check size={16} className="check-badge" />}
                    </button>
                  );
                })}
              </div>

              <div className="form-group margin-top">
                <label className="input-label">
                  <Ruler size={16} className="text-gold" />
                  <span>Orientacyjny metraż pomieszczenia (m²):</span>
                </label>
                <div className="range-wrap">
                  <input 
                    type="range" 
                    min="3" 
                    max="100" 
                    value={formData.area} 
                    onChange={e => setFormData({ ...formData, area: e.target.value })}
                    className="custom-range"
                  />
                  <div className="range-badge">{formData.area} m²</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Format & Condition */}
          {step === 2 && (
            <div className="step-pane">
              <h4 className="step-title">2. Format płytek & stan obecny</h4>
              
              <label className="input-label">
                <Grid size={16} className="text-gold" />
                <span>Preferowany format płytek:</span>
              </label>
              <div className="formats-list">
                {TILE_FORMATS.map(f => (
                  <button
                    key={f.id}
                    type="button"
                    className={`format-card ${formData.tileFormat === f.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, tileFormat: f.id })}
                  >
                    <div className="format-text">
                      <strong>{f.label}</strong>
                      <small>{f.desc}</small>
                    </div>
                    {formData.tileFormat === f.id && <Check size={18} className="text-gold" />}
                  </button>
                ))}
              </div>

              <label className="input-label margin-top">
                <Wrench size={16} className="text-gold" />
                <span>Obecny stan pomieszczenia:</span>
              </label>
              <div className="formats-list">
                {ROOM_CONDITIONS.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    className={`format-card ${formData.condition === c.id ? 'selected' : ''}`}
                    onClick={() => setFormData({ ...formData, condition: c.id })}
                  >
                    <div className="format-text">
                      <strong>{c.label}</strong>
                      <small>{c.desc}</small>
                    </div>
                    {formData.condition === c.id && <Check size={18} className="text-gold" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Photos & Notes */}
          {step === 3 && (
            <div className="step-pane">
              <h4 className="step-title">3. Dołącz zdjęcia / rzut pomieszczenia (opcjonalnie)</h4>
              <p className="step-desc">Zdjęcia obecnego stanu pozwolą na znacznie dokładniejszą wstępną wycenę.</p>

              <div className="upload-dropzone">
                <input 
                  type="file" 
                  multiple 
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  id="wizard-photos"
                  className="file-input-hidden"
                />
                <label htmlFor="wizard-photos" className="dropzone-label">
                  <UploadCloud size={36} className="text-gold" />
                  <span>Kliknij lub przeciągnij zdjęcia (JPG, PNG)</span>
                  <small>Możesz dodać kilka plików</small>
                </label>
              </div>

              {formData.photos.length > 0 && (
                <div className="photos-preview-grid">
                  {formData.photos.map((photo, i) => (
                    <div key={i} className="photo-preview-item">
                      <img src={photo.url} alt={`Załącznik ${i + 1}`} />
                      <button 
                        type="button" 
                        className="remove-photo-btn"
                        onClick={() => removePhoto(i)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="form-group margin-top">
                <label className="input-label">Dodatkowe uwagi lub opis prac:</label>
                <textarea 
                  rows={3} 
                  placeholder="np. prysznic walk-in, gierowanie narożników przy oknie, wylewka pod ogrzewanie podłogowe..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="custom-textarea"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Contact info & Submit */}
          {step === 4 && (
            <div className="step-pane">
              <h4 className="step-title">4. Twoje dane kontaktowe</h4>
              <p className="step-desc">Dokąd mamy przesłać odpowiedź i oddzwonić?</p>

              <div className="inputs-grid">
                <div className="form-group">
                  <label className="input-label">
                    <User size={16} className="text-gold" />
                    <span>Imię i nazwisko:</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="np. Jan Kowalski"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="custom-input"
                  />
                </div>

                <div className="form-group">
                  <label className="input-label">
                    <Phone size={16} className="text-gold" />
                    <span>Numer telefonu:</span>
                  </label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="np. 600 000 000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="custom-input"
                  />
                </div>

                <div className="form-group full-width">
                  <label className="input-label">
                    <MapPin size={16} className="text-gold" />
                    <span>Miejscowość realizacji (np. Kraków, Myślenice, Węglówka):</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="np. Kraków — Podgórze"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    className="custom-input"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Wizard Controls */}
          <div className="wizard-controls">
            {step > 1 ? (
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setStep(step - 1)}
              >
                <ChevronLeft size={18} />
                <span>Wstecz</span>
              </button>
            ) : <div />}

            {step < 4 ? (
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => setStep(step + 1)}
              >
                <span>Dalej</span>
                <ChevronRight size={18} />
              </button>
            ) : (
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
              >
                <Send size={18} />
                <span>Wyślij zapytanie o wycenę</span>
              </button>
            )}
          </div>
        </form>
      ) : (
        <div className="submitted-view">
          <div className="success-icon">
            <Check size={36} />
          </div>
          <h4>Dziękujemy za przesłanie zapytania!</h4>
          <p>Otworzyliśmy Twój program pocztowy z przygotowaną wiadomością. Władysław Kuchnia skontaktuje się z Tobą najszybciej jak to możliwe.</p>
          <div className="direct-call-box">
            <p>Możesz też zadzwonić od razu:</p>
            <a href="tel:603100978" className="btn btn-primary">
              <Phone size={18} />
              <span>Zadzwoń: 603 100 978</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        .wizard-card {
          padding: 2.5rem;
          max-width: 780px;
          margin: 0 auto;
          box-shadow: var(--shadow-lg);
        }

        .wizard-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .wizard-badge {
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

        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.5rem;
          position: relative;
        }

        .step-dot {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--bg-surface);
          border: 2px solid var(--border-stone);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--text-muted);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .step-dot.active {
          border-color: var(--accent-travertine);
          color: var(--accent-travertine);
          background-color: rgba(212, 163, 115, 0.15);
          box-shadow: 0 0 15px rgba(212, 163, 115, 0.3);
        }

        .step-dot.completed {
          background-color: var(--accent-travertine);
          border-color: var(--accent-travertine);
          color: #0D1117;
        }

        .step-pane {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .step-title {
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .step-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: -0.75rem;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 0.75rem;
        }

        .option-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.25rem 0.85rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-md);
          color: var(--text-main);
          font-weight: 600;
          font-size: 0.875rem;
          cursor: pointer;
          position: relative;
          transition: all var(--transition-normal);
        }

        .option-card:hover {
          border-color: var(--accent-travertine);
          background-color: var(--bg-card-hover);
        }

        .option-card.selected {
          border-color: var(--accent-travertine);
          background-color: rgba(212, 163, 115, 0.12);
          color: var(--accent-travertine);
        }

        .check-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          color: var(--accent-travertine);
        }

        .margin-top { margin-top: 1rem; }

        .input-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.925rem;
          color: var(--text-main);
          margin-bottom: 0.4rem;
        }

        .range-wrap {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .custom-range {
          flex: 1;
          accent-color: var(--accent-travertine);
          height: 6px;
          border-radius: 3px;
          background: var(--border-stone);
          cursor: pointer;
        }

        .range-badge {
          padding: 0.5rem 1rem;
          background: var(--bg-surface);
          border: 1px solid var(--accent-travertine);
          border-radius: var(--radius-sm);
          font-weight: 700;
          color: var(--accent-travertine);
          font-size: 1.1rem;
        }

        .formats-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .format-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-md);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .format-card:hover {
          border-color: var(--accent-travertine);
        }

        .format-card.selected {
          border-color: var(--accent-travertine);
          background-color: rgba(212, 163, 115, 0.1);
        }

        .format-text strong {
          display: block;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .format-text small {
          color: var(--text-muted);
          font-size: 0.825rem;
        }

        .upload-dropzone {
          border: 2px dashed var(--border-stone);
          border-radius: var(--radius-md);
          padding: 2rem;
          text-align: center;
          background-color: var(--bg-surface);
          transition: border-color var(--transition-normal);
        }

        .upload-dropzone:hover {
          border-color: var(--accent-travertine);
        }

        .file-input-hidden { display: none; }

        .dropzone-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          color: var(--text-main);
          font-weight: 600;
        }

        .photos-preview-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .photo-preview-item {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: var(--radius-sm);
          overflow: hidden;
          border: 1px solid var(--border-stone);
        }

        .photo-preview-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-photo-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          background: rgba(0, 0, 0, 0.75);
          color: #ff5555;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .custom-textarea, .custom-input {
          width: 100%;
          padding: 0.85rem 1rem;
          background-color: var(--bg-surface);
          border: 1px solid var(--border-stone);
          border-radius: var(--radius-sm);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.95rem;
        }

        .custom-textarea:focus, .custom-input:focus {
          outline: none;
          border-color: var(--accent-travertine);
        }

        .inputs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .full-width { grid-column: span 2; }

        .wizard-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-stone);
        }

        .submitted-view {
          text-align: center;
          padding: 2rem 0;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--accent-hydro-bg);
          color: var(--accent-hydro);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
        }

        .direct-call-box {
          margin-top: 2rem;
          padding: 1.5rem;
          background-color: var(--bg-surface);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        @media (max-width: 640px) {
          .wizard-card { padding: 1.5rem; }
          .inputs-grid { grid-template-columns: 1fr; }
          .full-width { grid-column: span 1; }
        }
      `}</style>
    </div>
  );
}
