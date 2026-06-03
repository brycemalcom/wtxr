"use client";

/* ------------------------------------------------------------------
   Operations before/after schematic. One composition, two states:
   dormant (muted, broken flow, flat activity) vs reactivated (amber
   glow, connected animated flow, rising output, pumping motion).
   Engineering-UI style consistent with the Technology section.
------------------------------------------------------------------- */

const G = "rgba(246,241,232,0.05)";
const DIM = "rgba(246,241,232,0.22)";
const DIM2 = "rgba(246,241,232,0.12)";
const AMBER = "#f2a01b";
const COPPER = "#c47e45";

export function FieldStateSchematic({ active }: { active: boolean }) {
  const s = active ? AMBER : DIM;
  const s2 = active ? COPPER : DIM2;
  const uid = active ? "on" : "off";

  return (
    <svg
      viewBox="0 0 360 220"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id={`vig-${uid}`} cx="50%" cy="42%" r="75%">
          <stop offset="55%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
        </radialGradient>
        <radialGradient id={`glow-${uid}`}>
          <stop offset="0%" stopColor={AMBER} stopOpacity="0.3" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* map grid */}
      <g stroke={G} strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="220" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="360" y2={i * 30} />
        ))}
      </g>

      {/* active glows */}
      {active && (
        <g>
          <circle cx="62" cy="150" r="60" fill={`url(#glow-${uid})`} />
          <circle cx="300" cy="128" r="46" fill={`url(#glow-${uid})`} />
        </g>
      )}

      {/* ground */}
      <line x1="12" y1="150" x2="348" y2="150" stroke={active ? DIM : DIM2} strokeWidth="1.25" />

      {/* flowline well -> tank */}
      {active ? (
        <>
          <line x1="118" y1="146" x2="284" y2="130" stroke={COPPER} strokeWidth="2" />
          <line x1="118" y1="146" x2="284" y2="130" stroke={AMBER} strokeWidth="2" strokeDasharray="4 9" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" values="0;-26" dur="1.2s" repeatCount="indefinite" />
          </line>
        </>
      ) : (
        <line x1="118" y1="146" x2="284" y2="130" stroke={DIM2} strokeWidth="1.5" strokeDasharray="5 10" opacity="0.7" />
      )}
      {/* valve node on flowline */}
      <circle cx="200" cy="138" r="3.5" fill="none" stroke={s2} strokeWidth="1.5" />

      {/* storage tank */}
      <g stroke={s} strokeWidth="1.5" fill={active ? "rgba(242,160,27,0.08)" : "none"}>
        <path d="M284 117 L284 150 L316 150 L316 117" />
        <ellipse cx="300" cy="117" rx="16" ry="5" />
        <line x1="288" y1="136" x2="312" y2="136" stroke={active ? AMBER : DIM2} strokeWidth="1.25" />
      </g>

      {/* pumpjack */}
      <g stroke={s} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* base + A-frame */}
        <path d="M74 156 L118 156" />
        <path d="M80 150 L96 98 L112 150" />
        {/* polished rod / bridle (fixed) */}
        <line x1="62" y1="100" x2="62" y2="150" stroke={s2} strokeWidth="1.4" />
        {/* walking beam group (pumps when active) */}
        <g>
          {active && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="-6 96 98; 6 96 98; -6 96 98"
              dur="3.4s"
              repeatCount="indefinite"
            />
          )}
          <line x1="58" y1="92" x2="134" y2="104" strokeWidth="2.4" />
          {/* horsehead */}
          <path d="M58 92 Q50 96 56 102" strokeWidth="2" />
          {/* counterweight */}
          <circle cx="136" cy="105" r="7" fill={active ? "rgba(242,160,27,0.18)" : "none"} />
        </g>
      </g>

      {/* wellhead node */}
      {active ? (
        <g>
          <circle cx="62" cy="150" r="5.5" fill={AMBER} />
          <circle cx="62" cy="150" r="5.5" fill="none" stroke={AMBER} strokeWidth="1.5">
            <animate attributeName="r" values="5.5;11;5.5" dur="2.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0;0.8" dur="2.2s" repeatCount="indefinite" />
          </circle>
        </g>
      ) : (
        <circle cx="62" cy="150" r="5" fill="none" stroke={DIM} strokeWidth="1.5" strokeDasharray="2 3" />
      )}

      {/* activity / output chart */}
      <rect x="16" y="172" width="328" height="40" rx="5" stroke={DIM2} strokeWidth="1" fill="rgba(255,255,255,0.012)" />
      <text x="26" y="186" fill={active ? AMBER : DIM} fontSize="7.5" fontFamily="monospace" letterSpacing="1.5">
        {active ? "OUTPUT" : "ACTIVITY"}
      </text>
      {active ? (
        <>
          <path d="M120 204 L160 198 L196 200 L236 190 L272 193 L312 182 L334 184 L334 208 L120 208 Z" fill="rgba(242,160,27,0.12)" />
          <polyline
            points="120,204 160,198 196,200 236,190 272,193 312,182 334,184"
            stroke={AMBER}
            strokeWidth="1.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="334" cy="184" r="2.5" fill={AMBER}>
            <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </>
      ) : (
        <polyline
          points="120,196 150,196 158,193 166,196 210,196 218,198 226,196 334,196"
          stroke={DIM}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      )}

      {/* vignette */}
      <rect x="0" y="0" width="360" height="220" fill={`url(#vig-${uid})`} />
    </svg>
  );
}
