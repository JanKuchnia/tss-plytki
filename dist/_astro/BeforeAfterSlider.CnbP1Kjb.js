import{c as p,j as e}from"./createLucideIcon.Bu8kSKCY.js";import{r}from"./index.CVf8TyFT.js";import{w as b}from"./base.BT99lU2e.js";/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=p("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=p("MoveHorizontal",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=p("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);function q({beforeImage:w="/images/before.webp",afterImage:y="/images/after.webp",beforeLabel:x="Stan surowy / Wyburzenia",afterLabel:m="Gotowa łazienka z gierowaniem 45°",shortBeforeLabel:v="Stan surowy",shortAfterLabel:k="Gotowa łazienka",caption:f="Przesuń suwak, by zobaczyć przemianę — od skucia starych płytek po gotową łazienkę z gierowanym narożnikiem."}){const[u,z]=r.useState(50),[t,l]=r.useState(!1),i=r.useRef(null),s=r.useCallback(o=>{if(!i.current)return;const h=i.current.getBoundingClientRect();let n=(o-h.left)/h.width*100;n<0&&(n=0),n>100&&(n=100),z(n)},[]),d=r.useCallback(o=>{t&&s(o.touches[0].clientX)},[t,s]),c=r.useCallback(o=>{t&&s(o.clientX)},[t,s]),a=r.useCallback(()=>{l(!1)},[]);return r.useEffect(()=>(t&&(window.addEventListener("mousemove",c),window.addEventListener("mouseup",a),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",a)),()=>{window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",a),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",a)}),[t,c,a,d]),e.jsxs("div",{className:"before-after-wrapper",children:[e.jsxs("div",{ref:i,className:"before-after-container",onMouseDown:()=>l(!0),onTouchStart:()=>l(!0),children:[e.jsx("img",{src:b(y),alt:m,className:"after-image",loading:"eager"}),e.jsxs("span",{className:"slider-label label-before",children:[e.jsx(g,{size:14,className:"label-icon"}),e.jsx("span",{className:"label-text-full",children:x}),e.jsx("span",{className:"label-text-short",children:v})]}),e.jsxs("span",{className:"slider-label label-after",children:[e.jsx(j,{size:14,className:"icon-gold label-icon"}),e.jsx("span",{className:"label-text-full",children:m}),e.jsx("span",{className:"label-text-short",children:k})]}),e.jsx("div",{className:"before-image-clip",style:{width:`${u}%`},children:e.jsx("img",{src:b(w),alt:x,className:"before-image",style:{width:i.current?`${i.current.offsetWidth}px`:"100%"},loading:"eager"})}),e.jsx("div",{className:"slider-divider",style:{left:`${u}%`},children:e.jsx("div",{className:"slider-handle","aria-label":"Przesuń suwak przed i po",children:e.jsx(N,{size:20})})})]}),f&&e.jsxs("p",{className:"slider-caption",children:[e.jsx(g,{size:15,className:"caption-icon"}),e.jsx("span",{children:f})]}),e.jsx("style",{children:`
        .before-after-wrapper {
          width: 100%;
        }

        .before-after-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid var(--border-stone);
          user-select: none;
          cursor: ew-resize;
          box-shadow: var(--shadow-lg);
          background-color: var(--bg-card);
          touch-action: pan-y;
        }

        .after-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .before-image-clip {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          overflow: hidden;
          z-index: 2;
        }

        .before-image {
          height: 100%;
          max-width: none;
          object-fit: cover;
        }

        .slider-label {
          position: absolute;
          top: 1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 700;
          backdrop-filter: blur(8px);
          z-index: 6;
          letter-spacing: 0.02em;
          white-space: nowrap;
          pointer-events: none;
          max-width: 45%;
        }

        .label-icon {
          flex-shrink: 0;
        }

        .label-text-full {
          display: inline;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .label-text-short {
          display: none;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .label-after {
          right: 1rem;
          background: rgba(13, 17, 23, 0.88);
          color: var(--text-main);
          border: 1px solid var(--border-gold);
        }

        .label-before {
          left: 1rem;
          background: rgba(13, 17, 23, 0.88);
          color: var(--text-muted);
          border: 1px solid var(--border-stone);
        }

        .icon-gold {
          color: var(--accent-travertine);
        }

        .slider-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--accent-travertine);
          z-index: 5;
          transform: translateX(-50%);
          box-shadow: 0 0 12px rgba(212, 163, 115, 0.6);
        }

        .slider-handle {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent-travertine);
          color: #0D1117;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
          border: 3px solid #0D1117;
          touch-action: none;
        }

        .slider-caption {
          margin-top: 0.85rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
          justify-content: center;
          text-align: center;
          line-height: 1.5;
        }

        .caption-icon {
          color: var(--accent-travertine);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        @media (max-width: 640px) {
          .before-after-container {
            aspect-ratio: 1 / 1;
          }
          .slider-label {
            top: 0.6rem;
            font-size: 0.725rem;
            padding: 0.35rem 0.65rem;
            max-width: 44%;
          }
          .label-before {
            left: 0.6rem;
          }
          .label-after {
            right: 0.6rem;
          }
          .label-text-full {
            display: none;
          }
          .label-text-short {
            display: inline;
          }
          .slider-caption {
            font-size: 0.8rem;
            margin-top: 0.65rem;
            text-align: left;
            padding: 0 0.25rem;
          }
        }
      `})]})}export{q as default};
