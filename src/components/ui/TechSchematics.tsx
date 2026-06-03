/* ------------------------------------------------------------------
   Custom schematic-style technical illustrations for the Modern
   Recovery Platform. Engineering-UI / industrial-infographic style:
   dark background, precise lines, amber/copper accents, subtle
   animated flow. No photoreal imagery. viewBox 0 0 400 240.
------------------------------------------------------------------- */

const C = {
  line: "rgba(246,241,232,0.36)",
  faint: "rgba(246,241,232,0.15)",
  amber: "#f2a01b",
  orange: "#f26a1b",
  copper: "#c47e45",
  res: "rgba(242,160,27,0.10)",
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 240"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function Ground() {
  return (
    <g>
      <line x1="16" y1="40" x2="384" y2="40" stroke={C.line} strokeWidth="1.5" />
      <g stroke={C.faint} strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={30 + i * 26} y1="40" x2={24 + i * 26} y2="47" />
        ))}
      </g>
    </g>
  );
}

function Strata() {
  return (
    <g stroke={C.faint} strokeWidth="1" strokeDasharray="2 7">
      <line x1="16" y1="72" x2="384" y2="72" />
      <line x1="16" y1="100" x2="384" y2="100" />
      <line x1="16" y1="128" x2="384" y2="128" />
    </g>
  );
}

function Reservoir() {
  return (
    <g>
      <rect x="16" y="150" width="368" height="68" fill={C.res} />
      <line x1="16" y1="150" x2="384" y2="150" stroke={C.amber} strokeWidth="1" opacity="0.45" />
      <line x1="16" y1="218" x2="384" y2="218" stroke={C.faint} strokeWidth="1" />
      <g fill={C.amber} opacity="0.22">
        {[166, 186, 206].map((y) =>
          Array.from({ length: 14 }).map((_, i) => (
            <circle key={`${y}-${i}`} cx={32 + i * 26} cy={y} r="1.2" />
          ))
        )}
      </g>
    </g>
  );
}

function Wellhead({ x }: { x: number }) {
  return (
    <g stroke={C.line} strokeWidth="1.5" fill="none">
      <rect x={x - 9} y={28} width={18} height={12} />
      <line x1={x} y1={28} x2={x} y2={20} />
    </g>
  );
}

/* 1 — Reservoir Stimulation */
function Stimulation() {
  return (
    <Frame>
      <Ground />
      <Strata />
      <Reservoir />
      <Wellhead x={200} />
      <line x1="200" y1="40" x2="200" y2="182" stroke={C.line} strokeWidth="2.5" />
      <g stroke={C.amber} strokeWidth="2" strokeLinecap="round" fill="none">
        <path d="M200 164 L96 156 M150 160 L120 148 M200 168 L108 184 M154 176 L124 188 M200 174 L132 208 M168 191 L140 200 M200 164 L304 156 M250 160 L280 148 M200 168 L292 184 M246 176 L276 188 M200 174 L268 208 M232 191 L260 200" />
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.6s" repeatCount="indefinite" />
      </g>
      <g fill={C.amber}>
        {[
          [96, 156],
          [108, 184],
          [132, 208],
          [304, 156],
          [292, 184],
          [268, 208],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" />
        ))}
      </g>
    </Frame>
  );
}

/* 2 — Artificial Lift */
function Lift() {
  return (
    <Frame>
      <Ground />
      <Strata />
      <Reservoir />
      {/* surface unit */}
      <g stroke={C.line} strokeWidth="1.5" fill="none">
        <rect x="176" y="22" width="48" height="18" rx="2" />
        <line x1="186" y1="22" x2="186" y2="14" />
        <line x1="214" y1="22" x2="214" y2="14" />
      </g>
      {/* casing */}
      <line x1="193" y1="40" x2="193" y2="206" stroke={C.line} strokeWidth="1.75" />
      <line x1="207" y1="40" x2="207" y2="206" stroke={C.line} strokeWidth="1.75" />
      {/* downhole pump */}
      <rect x="192" y="168" width="16" height="30" rx="2" fill={C.res} stroke={C.amber} strokeWidth="2" />
      {/* reservoir inflow */}
      <g stroke={C.copper} strokeWidth="1.75" strokeLinecap="round" fill="none">
        <path d="M168 200 L188 196 M186 190 L188 196 L180 198" />
        <path d="M232 200 L212 196 M214 190 L212 196 L220 198" />
      </g>
      {/* upward flow */}
      <line x1="200" y1="168" x2="200" y2="44" stroke={C.amber} strokeWidth="2.5" strokeDasharray="3 7" strokeLinecap="round">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.85s" repeatCount="indefinite" />
      </line>
      <g stroke={C.orange} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M193 70 L200 62 L207 70" />
        <path d="M193 100 L200 92 L207 100" />
        <path d="M193 130 L200 122 L207 130" />
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </g>
    </Frame>
  );
}

/* 3 — Enhanced Oil Recovery */
function EOR() {
  return (
    <Frame>
      <Ground />
      <Strata />
      <Reservoir />
      <Wellhead x={108} />
      <Wellhead x={292} />
      <line x1="108" y1="40" x2="108" y2="184" stroke={C.line} strokeWidth="2.25" />
      <line x1="292" y1="40" x2="292" y2="184" stroke={C.line} strokeWidth="2.25" />
      {/* injection down */}
      <line x1="108" y1="44" x2="108" y2="180" stroke={C.copper} strokeWidth="2.25" strokeDasharray="3 7">
        <animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />
      </line>
      {/* sweep lines across reservoir */}
      <g stroke={C.amber} strokeWidth="2" strokeLinecap="round">
        {[166, 184, 202].map((y) => (
          <line key={y} x1="116" y1={y} x2="284" y2={y} strokeDasharray="5 9">
            <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.2s" repeatCount="indefinite" />
          </line>
        ))}
      </g>
      <g stroke={C.amber} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {[166, 184, 202].map((y) => (
          <path key={y} d={`M276 ${y - 5} L286 ${y} L276 ${y + 5}`} />
        ))}
      </g>
      {/* producer up */}
      <line x1="292" y1="180" x2="292" y2="44" stroke={C.amber} strokeWidth="2.25" strokeDasharray="3 7">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.85s" repeatCount="indefinite" />
      </line>
      <text x="108" y="16" fill={C.copper} fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
        INJ
      </text>
      <text x="292" y="16" fill={C.amber} fontSize="10" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
        PROD
      </text>
    </Frame>
  );
}

/* 4 — Recompletion: stacked zones, one newly activated */
function Recompletion() {
  const zones = [
    { y: 64, active: false },
    { y: 100, active: false },
    { y: 140, active: true },
    { y: 182, active: false },
  ];
  return (
    <Frame>
      <Ground />
      <Wellhead x={200} />
      {zones.map((z) => (
        <g key={z.y}>
          <rect
            x="32"
            y={z.y}
            width="336"
            height={z.active ? 26 : 22}
            fill={z.active ? C.res : C.faint}
            stroke={z.active ? C.amber : C.faint}
            strokeWidth={z.active ? 1.5 : 1}
          />
        </g>
      ))}
      {/* casing */}
      <line x1="194" y1="40" x2="194" y2="212" stroke={C.line} strokeWidth="1.75" />
      <line x1="206" y1="40" x2="206" y2="212" stroke={C.line} strokeWidth="1.75" />
      {/* perforations into active zone (y 140-166) */}
      <g stroke={C.amber} strokeWidth="2" strokeLinecap="round">
        {[147, 153, 159].map((y) => (
          <g key={y}>
            <line x1="206" y1={y} x2="230" y2={y} />
            <line x1="194" y1={y} x2="170" y2={y} />
          </g>
        ))}
        <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />
      </g>
      <text x="362" y="137" fill={C.amber} fontSize="10" fontFamily="monospace" textAnchor="end" letterSpacing="1">
        ACTIVE
      </text>
    </Frame>
  );
}

/* 5 — Field Optimization: monitoring dashboard */
function Optimization() {
  return (
    <Frame>
      <rect x="32" y="34" width="336" height="172" rx="7" stroke={C.line} strokeWidth="1.5" fill="rgba(255,255,255,0.015)" />
      <line x1="32" y1="62" x2="368" y2="62" stroke={C.faint} />
      <circle cx="48" cy="48" r="3" fill={C.orange} />
      <circle cx="60" cy="48" r="3" fill={C.amber} />
      <circle cx="72" cy="48" r="3" fill={C.faint} />
      {/* area chart */}
      <path d="M56 172 L92 150 L126 160 L160 124 L196 132 L232 96 L264 106 L264 190 L56 190 Z" fill="rgba(242,160,27,0.12)" />
      <polyline
        points="56,172 92,150 126,160 160,124 196,132 232,96 264,106"
        stroke={C.amber}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="264" cy="106" r="4" fill={C.amber}>
        <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <line x1="56" y1="190" x2="264" y2="190" stroke={C.faint} />
      {/* donut gauge */}
      <circle cx="318" cy="104" r="26" stroke={C.faint} strokeWidth="7" fill="none" />
      <circle
        cx="318"
        cy="104"
        r="26"
        stroke={C.amber}
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="108 163"
        transform="rotate(-90 318 104)"
      />
      <text x="318" y="108" fill={C.line} fontSize="13" fontFamily="monospace" textAnchor="middle">
        66%
      </text>
      {/* mini bars */}
      <g stroke={C.copper} strokeWidth="7" strokeLinecap="round">
        <line x1="294" y1="190" x2="294" y2="176" />
        <line x1="310" y1="190" x2="310" y2="164" />
        <line x1="326" y1="190" x2="326" y2="170" />
        <line x1="342" y1="190" x2="342" y2="154" stroke={C.amber} />
      </g>
    </Frame>
  );
}

/* 6 — Surface Infrastructure */
function Surfaceworks() {
  const tanks = [
    { cx: 96, accent: false },
    { cx: 200, accent: false },
    { cx: 304, accent: true },
  ];
  return (
    <Frame>
      <line x1="16" y1="200" x2="384" y2="200" stroke={C.line} strokeWidth="1.5" />
      <g stroke={C.faint} strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={30 + i * 26} y1="200" x2={24 + i * 26} y2="207" />
        ))}
      </g>
      {/* inlet */}
      <line x1="24" y1="64" x2="72" y2="64" stroke={C.amber} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 9">
        <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.3s" repeatCount="indefinite" />
      </line>
      {/* header manifold */}
      <line x1="72" y1="64" x2="328" y2="64" stroke={C.line} strokeWidth="2" />
      <line x1="72" y1="64" x2="328" y2="64" stroke={C.amber} strokeWidth="1.75" strokeDasharray="4 10" opacity="0.9">
        <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.3s" repeatCount="indefinite" />
      </line>
      {/* outlet */}
      <line x1="328" y1="64" x2="372" y2="64" stroke={C.line} strokeWidth="2" />
      <path d="M364 59 L374 64 L364 69" stroke={C.amber} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {tanks.map((t, i) => {
        const stroke = t.accent ? C.amber : C.line;
        return (
          <g key={i}>
            <line x1={t.cx} y1="64" x2={t.cx} y2="108" stroke={C.line} strokeWidth="1.5" />
            <circle cx={t.cx} cy="64" r="3.5" fill="none" stroke={C.line} strokeWidth="1.5" />
            <g stroke={stroke} strokeWidth="1.75" fill={t.accent ? C.res : "none"}>
              <path d={`M${t.cx - 32} 116 L${t.cx - 32} 200 L${t.cx + 32} 200 L${t.cx + 32} 116`} />
              <ellipse cx={t.cx} cy="116" rx="32" ry="9" />
            </g>
            <line
              x1={t.cx - 22}
              y1="168"
              x2={t.cx + 22}
              y2="168"
              stroke={t.accent ? C.amber : C.faint}
              strokeWidth="1.5"
            />
          </g>
        );
      })}
    </Frame>
  );
}

const REGISTRY: Record<string, () => React.ReactElement> = {
  stimulation: Stimulation,
  lift: Lift,
  eor: EOR,
  recompletion: Recompletion,
  optimization: Optimization,
  surface: Surfaceworks,
};

export function TechSchematic({ name }: { name: string }) {
  const Cmp = REGISTRY[name] ?? Stimulation;
  return <Cmp />;
}
