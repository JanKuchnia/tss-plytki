import{c as r,j as e}from"./createLucideIcon.Bu8kSKCY.js";import{r as n}from"./index.CVf8TyFT.js";import{C as u}from"./check.BvWnRi7X.js";import{A as v}from"./arrow-right.lKPE7JPY.js";import{P as y}from"./phone.BPbOJz9W.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=r("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=r("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=r("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=r("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),d=[{label:"60 × 60 cm",m2PerBox:1.44,boxesEstimate:!0},{label:"120 × 60 cm",m2PerBox:1.44,boxesEstimate:!0},{label:"120 × 120 cm",m2PerBox:2.88,boxesEstimate:!0},{label:"30 × 30 cm / Mozaika",m2PerBox:1.08,boxesEstimate:!0}];function B(){const[s,m]=n.useState(25),[l,p]=n.useState(10),[c,x]=n.useState(0),o=d[c],t=parseFloat((s*(1+l/100)).toFixed(1)),h=Math.ceil(t/o.m2PerBox),b=Math.round(t*80),g=Math.round(t*180);return e.jsxs("div",{className:"calculator-card glass-card",children:[e.jsxs("div",{className:"calc-header",children:[e.jsxs("div",{className:"calc-badge",children:[e.jsx(k,{size:16,className:"text-gold"}),e.jsx("span",{children:"Kalkulator Zapotrzebowania Płytek"})]}),e.jsx("h3",{children:"Ile płytek potrzebujesz na swój projekt?"}),e.jsx("p",{children:"Oblicz zapas na docinki, liczbę kartonów oraz orientacyjny koszt materiału."})]}),e.jsxs("div",{className:"calc-body",children:[e.jsxs("div",{className:"calc-group",children:[e.jsxs("div",{className:"group-label-row",children:[e.jsx("label",{children:"Metraż pomieszczenia (m²):"}),e.jsxs("span",{className:"value-highlight",children:[s," m²"]})]}),e.jsx("input",{type:"range",min:"3",max:"150",value:s,onChange:a=>m(parseInt(a.target.value)),className:"custom-range"})]}),e.jsxs("div",{className:"calc-group",children:[e.jsxs("div",{className:"group-label-row",children:[e.jsx("label",{children:"Zapas na docinki & wzór układania:"}),e.jsxs("span",{className:"value-highlight",children:["+",l,"%"]})]}),e.jsx("div",{className:"reserve-buttons",children:[{val:5,label:"+5% (Standard)",desc:"Układ prosty"},{val:10,label:"+10% (Wielki format)",desc:"Układ z przesunięciem"},{val:15,label:"+15% (Skosy / Jodełka)",desc:"Wiele docięć"}].map(a=>e.jsxs("button",{type:"button",className:`reserve-btn ${l===a.val?"selected":""}`,onClick:()=>p(a.val),children:[e.jsx("strong",{children:a.label}),e.jsx("small",{children:a.desc})]},a.val))})]}),e.jsxs("div",{className:"calc-group",children:[e.jsx("label",{className:"group-label",children:"Format płytek:"}),e.jsx("div",{className:"sizes-grid",children:d.map((a,i)=>e.jsxs("button",{type:"button",className:`size-btn ${c===i?"selected":""}`,onClick:()=>x(i),children:[e.jsx("span",{children:a.label}),c===i&&e.jsx(u,{size:14,className:"text-gold"})]},a.label))})]}),e.jsxs("div",{className:"results-panel",children:[e.jsxs("div",{className:"result-metric",children:[e.jsxs("span",{className:"metric-label",children:[e.jsx(f,{size:16,className:"text-gold"}),e.jsx("span",{children:"Łączny metraż z zapasem:"})]}),e.jsxs("span",{className:"metric-value",children:[t," m²"]})]}),e.jsxs("div",{className:"result-metric",children:[e.jsxs("span",{className:"metric-label",children:[e.jsx(j,{size:16,className:"text-gold"}),e.jsx("span",{children:"Szacowana liczba kartonów:"})]}),e.jsxs("span",{className:"metric-value",children:[h," op. (",o.m2PerBox," m²/op.)"]})]}),e.jsxs("div",{className:"result-metric highlight",children:[e.jsxs("span",{className:"metric-label",children:[e.jsx(z,{size:16,className:"text-gold"}),e.jsx("span",{children:"Orientacyjny koszt materiału:"})]}),e.jsxs("span",{className:"metric-value text-gold",children:[b.toLocaleString()," – ",g.toLocaleString()," zł"]})]})]})]}),e.jsxs("div",{className:"calc-footer",children:[e.jsxs("p",{className:"calc-disclaimer",children:[e.jsx(N,{size:16,className:"text-emerald"}),e.jsx("span",{children:"Robocizna zależy od podłoża i formatu płytek. Chcesz znać dokładny koszt montażu?"})]}),e.jsxs("div",{className:"calc-actions",children:[e.jsxs("a",{href:"/kontakt",class:"btn btn-primary btn-lg",children:[e.jsx("span",{children:"Darmowa wycena montażu"}),e.jsx(v,{size:18})]}),e.jsxs("a",{href:"tel:603100978",class:"btn btn-secondary",children:[e.jsx(y,{size:18}),e.jsx("span",{children:"Zadzwoń: 603 100 978"})]})]})]}),e.jsx("style",{children:`
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
      `})]})}export{B as default};
