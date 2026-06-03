"use client";

/* ------------------------------------------------------------------
   Master field cross-section. One cohesive engineering schematic of
   the full system (surface facilities -> wellbore -> reservoir).
   Selecting a recovery method lights up the relevant part while the
   rest of the system dims. Style: dark, precise, amber/copper, with
   subtle animated flow on the active element only.
------------------------------------------------------------------- */

const C = {
  struct: "rgba(246,241,232,0.30)",
  dim: "rgba(246,241,232,0.09)",
  faint: "rgba(246,241,232,0.14)",
  amber: "#f2a01b",
  copper: "#c47e45",
  res: "rgba(242,160,27,0.10)",
};

// Producer at x=250, injector at x=120. Ground y=112, reservoir 236..320.
const FOCUS: Record<string, { cx: number; cy: number; r: number }> = {
  surface: { cx: 372, cy: 66, r: 92 },
  optimization: { cx: 74, cy: 58, r: 86 },
  recompletion: { cx: 250, cy: 200, r: 78 },
  lift: { cx: 250, cy: 250, r: 96 },
  stimulation: { cx: 250, cy: 280, r: 110 },
  eor: { cx: 185, cy: 278, r: 150 },
};

export function FieldCrossSection({ active }: { active: string }) {
  const on = (k: string) => active === k;
  const focus = FOCUS[active] ?? FOCUS.stimulation;

  return (
    <svg
      viewBox="0 0 460 340"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <radialGradient id="fx-glow">
          <stop offset="0%" stopColor={C.amber} stopOpacity="0.22" />
          <stop offset="100%" stopColor={C.amber} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Active-focus glow */}
      <circle cx={focus.cx} cy={focus.cy} r={focus.r} fill="url(#fx-glow)">
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>

      {/* ---- Structural (always visible) ---- */}
      {/* ground */}
      <line x1="16" y1="112" x2="444" y2="112" stroke={C.struct} strokeWidth="1.5" />
      <g stroke={C.faint} strokeWidth="1">
        {Array.from({ length: 16 }).map((_, i) => (
          <line key={i} x1={28 + i * 26} y1="112" x2={22 + i * 26} y2="119" />
        ))}
      </g>
      {/* overburden strata */}
      <g stroke={C.dim} strokeWidth="1" strokeDasharray="2 7">
        <line x1="16" y1="146" x2="444" y2="146" />
        <line x1="16" y1="176" x2="444" y2="176" />
        <line x1="16" y1="206" x2="444" y2="206" />
      </g>
      {/* reservoir */}
      <rect x="16" y="236" width="428" height="84" fill={C.res} />
      <line x1="16" y1="236" x2="444" y2="236" stroke={C.amber} strokeWidth="1" opacity="0.4" />
      <line x1="16" y1="320" x2="444" y2="320" stroke={C.faint} strokeWidth="1" />
      <g fill={C.amber} opacity="0.18">
        {[252, 276, 300].map((y) =>
          Array.from({ length: 16 }).map((_, i) => (
            <circle key={`${y}-${i}`} cx={34 + i * 26} cy={y} r="1.2" />
          ))
        )}
      </g>
      {/* producer wellbore casing */}
      <g stroke={C.struct} strokeWidth="1.75">
        <line x1="244" y1="96" x2="244" y2="316" />
        <line x1="256" y1="96" x2="256" y2="316" />
      </g>
      <g stroke={C.struct} strokeWidth="1.5" fill="none">
        <rect x="241" y="84" width="18" height="12" />
        <line x1="250" y1="84" x2="250" y2="76" />
      </g>

      {/* ---- SURFACE INFRASTRUCTURE ---- */}
      <Surface on={on("surface")} />
      {/* ---- FIELD OPTIMIZATION ---- */}
      <Monitoring on={on("optimization")} />
      {/* ---- ENHANCED OIL RECOVERY ---- */}
      <Eor on={on("eor")} />
      {/* ---- RESERVOIR STIMULATION ---- */}
      <Stimulation on={on("stimulation")} />
      {/* ---- RECOMPLETION ---- */}
      <Recompletion on={on("recompletion")} />
      {/* ---- ARTIFICIAL LIFT ---- */}
      <Lift on={on("lift")} />
    </svg>
  );
}

function color(on: boolean) {
  return on ? C.amber : C.dim;
}

/* Surface tanks + manifold piped to the producer wellhead */
function Surface({ on }: { on: boolean }) {
  const s = color(on);
  return (
    <g stroke={s} strokeWidth={on ? 2 : 1.5} fill="none" strokeLinecap="round">
      {/* tie-in from wellhead to manifold */}
      <path d="M259 90 L300 90 L300 44 L320 44" />
      {on && (
        <path d="M259 90 L300 90 L300 44 L320 44" stroke={C.amber} strokeWidth="2" strokeDasharray="4 9">
          <animate attributeName="stroke-dashoffset" values="0;-26" dur="1.3s" repeatCount="indefinite" />
        </path>
      )}
      {/* manifold */}
      <line x1="320" y1="44" x2="430" y2="44" />
      {/* two tanks */}
      {[348, 410].map((cx) => (
        <g key={cx}>
          <line x1={cx} y1="44" x2={cx} y2="64" />
          <path d={`M${cx - 24} 70 L${cx - 24} 110 L${cx + 24} 110 L${cx + 24} 70`} fill={on ? C.res : "none"} />
          <ellipse cx={cx} cy="70" rx="24" ry="7" fill={on ? C.res : "none"} />
        </g>
      ))}
    </g>
  );
}

/* Monitoring card + sensors along the wellbore */
function Monitoring({ on }: { on: boolean }) {
  const s = color(on);
  return (
    <g>
      <rect x="22" y="22" width="98" height="66" rx="6" stroke={s} strokeWidth={on ? 1.75 : 1.25} fill={on ? "rgba(242,160,27,0.05)" : "none"} />
      <line x1="22" y1="40" x2="120" y2="40" stroke={on ? C.amber : C.dim} strokeWidth="1" opacity="0.6" />
      {/* mini chart */}
      <polyline
        points="34,74 48,64 60,68 74,52 88,58 104,44"
        stroke={s}
        strokeWidth={on ? 2 : 1.5}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {on && (
        <circle cx="104" cy="44" r="3" fill={C.amber}>
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.4s" repeatCount="indefinite" />
        </circle>
      )}
      {/* data link to wellbore + sensors */}
      <line x1="120" y1="55" x2="244" y2="160" stroke={on ? C.amber : C.dim} strokeWidth="1" strokeDasharray="3 6" opacity={on ? 0.8 : 0.5} />
      <g fill={on ? C.amber : C.dim}>
        {[150, 196, 250].map((y) => (
          <circle key={y} cx="250" cy={y} r={on ? 3 : 2}>
            {on && <animate attributeName="opacity" values="0.3;1;0.3" dur="1.6s" begin={`${y / 400}s`} repeatCount="indefinite" />}
          </circle>
        ))}
      </g>
    </g>
  );
}

/* Injector well + reservoir sweep to producer */
function Eor({ on }: { on: boolean }) {
  const inj = on ? C.copper : C.dim;
  const swp = on ? C.amber : C.dim;
  return (
    <g>
      {/* injector casing + head */}
      <g stroke={on ? C.struct : C.dim} strokeWidth="1.75">
        <line x1="116" y1="96" x2="116" y2="300" />
        <line x1="124" y1="96" x2="124" y2="300" />
      </g>
      <g stroke={on ? C.struct : C.dim} strokeWidth="1.5" fill="none">
        <rect x="111" y="84" width="18" height="12" />
        <line x1="120" y1="84" x2="120" y2="76" />
      </g>
      {/* injection down */}
      <line x1="120" y1="98" x2="120" y2="296" stroke={inj} strokeWidth="2.25" strokeDasharray="3 7">
        {on && <animate attributeName="stroke-dashoffset" values="0;20" dur="1s" repeatCount="indefinite" />}
      </line>
      {/* sweep */}
      <g stroke={swp} strokeWidth="2" strokeLinecap="round">
        {[256, 276, 296].map((y) => (
          <line key={y} x1="128" y1={y} x2="242" y2={y} strokeDasharray="5 9">
            {on && <animate attributeName="stroke-dashoffset" values="0;-28" dur="1.2s" repeatCount="indefinite" />}
          </line>
        ))}
      </g>
      {on && (
        <g stroke={C.amber} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[256, 276, 296].map((y) => (
            <path key={y} d={`M234 ${y - 5} L244 ${y} L234 ${y + 5}`} />
          ))}
        </g>
      )}
      {on && (
        <>
          <text x="120" y="70" fill={C.copper} fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
            INJ
          </text>
          <text x="250" y="70" fill={C.amber} fontSize="9" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
            PROD
          </text>
        </>
      )}
    </g>
  );
}

/* Fracture network radiating into the reservoir */
function Stimulation({ on }: { on: boolean }) {
  const s = color(on);
  return (
    <g stroke={s} strokeWidth={on ? 2 : 1.25} strokeLinecap="round" fill="none">
      <path d="M250 252 L168 244 M210 248 L182 236 M250 258 L176 276 M212 266 L184 284 M250 266 L196 300 M222 282 L198 294 M250 252 L332 244 M290 248 L318 236 M250 258 L324 276 M288 266 L316 284 M250 266 L304 300 M278 282 L302 294" />
      {on && (
        <>
          <animate attributeName="opacity" values="0.55;1;0.55" dur="2.6s" repeatCount="indefinite" />
        </>
      )}
      {on && (
        <g fill={C.amber} stroke="none">
          {[
            [168, 244],
            [176, 276],
            [196, 300],
            [332, 244],
            [324, 276],
            [304, 300],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2.5" />
          ))}
        </g>
      )}
    </g>
  );
}

/* Newly activated perforation interval on the producer */
function Recompletion({ on }: { on: boolean }) {
  const s = color(on);
  return (
    <g>
      {/* interval band */}
      <rect
        x="16"
        y="188"
        width="428"
        height="26"
        fill={on ? C.res : "rgba(0,0,0,0)"}
        stroke={s}
        strokeWidth={on ? 1.5 : 1}
        strokeDasharray={on ? "0" : "2 7"}
      />
      {/* perforations */}
      <g stroke={s} strokeWidth={on ? 2 : 1.25} strokeLinecap="round">
        {[195, 201, 207].map((y) => (
          <g key={y}>
            <line x1="256" y1={y} x2="280" y2={y} />
            <line x1="244" y1={y} x2="220" y2={y} />
          </g>
        ))}
        {on && <animate attributeName="opacity" values="0.5;1;0.5" dur="2.2s" repeatCount="indefinite" />}
      </g>
      {on && (
        <text x="436" y="185" fill={C.amber} fontSize="9" fontFamily="monospace" textAnchor="end" letterSpacing="1">
          ACTIVE
        </text>
      )}
    </g>
  );
}

/* Downhole pump + assisted upward flow */
function Lift({ on }: { on: boolean }) {
  const s = color(on);
  return (
    <g>
      {/* pump */}
      <rect x="242" y="270" width="16" height="34" rx="2" fill={on ? C.res : "rgba(0,0,0,0)"} stroke={s} strokeWidth={on ? 2 : 1.25} />
      {/* upflow */}
      <line x1="250" y1="270" x2="250" y2="98" stroke={s} strokeWidth={on ? 2.5 : 1.25} strokeDasharray="3 7" strokeLinecap="round">
        {on && <animate attributeName="stroke-dashoffset" values="0;-20" dur="0.85s" repeatCount="indefinite" />}
      </line>
      {on && (
        <g stroke={C.amber} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {[140, 180, 220].map((y) => (
            <path key={y} d={`M244 ${y} L250 ${y - 8} L256 ${y}`} />
          ))}
          <animate attributeName="opacity" values="0.4;1;0.4" dur="1.5s" repeatCount="indefinite" />
        </g>
      )}
    </g>
  );
}
