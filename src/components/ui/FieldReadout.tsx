"use client";

import { useEffect, useState } from "react";

/* Illustrative engineering telemetry for the field cross-section.
   Values gently "tick" after mount to read like a live operations
   monitor. These are schematic/illustrative parameters, not company
   production data. */
type Row = { l: string; b: number; u: string; j: number; dec?: boolean };

const READOUTS: Record<string, Row[]> = {
  stimulation: [
    { l: "Pressure", b: 6820, u: "psi", j: 45 },
    { l: "Rate", b: 24, u: "bpm", j: 1 },
  ],
  lift: [
    { l: "Intake", b: 312, u: "psi", j: 7 },
    { l: "Stroke", b: 9, u: "spm", j: 0 },
  ],
  eor: [
    { l: "Inj Press", b: 1460, u: "psi", j: 18 },
    { l: "Sweep", b: 62, u: "%", j: 1 },
  ],
  recompletion: [
    { l: "Zone", b: 6240, u: "ft", j: 0 },
    { l: "Skin", b: -2.1, u: "", j: 0.2, dec: true },
  ],
  optimization: [
    { l: "Uptime", b: 98.6, u: "%", j: 0.2, dec: true },
    { l: "Flow Idx", b: 87, u: "", j: 2 },
  ],
  surface: [
    { l: "Header", b: 242, u: "psi", j: 5 },
    { l: "Level", b: 78, u: "%", j: 1 },
  ],
};

function fmt(num: number, dec?: boolean) {
  const s = dec ? num.toFixed(1) : String(Math.round(num));
  const neg = s.startsWith("-");
  const [intRaw, frac] = (neg ? s.slice(1) : s).split(".");
  const withC = intRaw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (neg ? "-" : "") + withC + (frac ? "." + frac : "");
}

export function FieldReadout({ active }: { active: string }) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 750);
    return () => clearInterval(id);
  }, []);

  const rows = READOUTS[active] ?? READOUTS.stimulation;
  const live = tick > 0;

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center gap-4 border-t border-border-subtle bg-background/55 px-5 py-2.5 font-mono backdrop-blur-sm sm:gap-5">
      <span className="flex items-center gap-1.5 text-[0.55rem] uppercase tracking-[0.2em] text-text-muted">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-orange" />
        Live
      </span>
      <span className="h-3 w-px bg-border-subtle" />
      {rows.map((r, i) => {
        const jitter = live && r.j ? Math.sin((tick + i * 5) * 1.7) * r.j : 0;
        return (
          <span key={r.l} className="flex items-baseline gap-1.5">
            <span className="text-[0.55rem] uppercase tracking-wider text-text-muted">
              {r.l}
            </span>
            <span className="text-xs tabular-nums text-brand-amber">
              {fmt(r.b + jitter, r.dec)}
              {r.u && (
                <span className="ml-0.5 text-[0.6rem] text-text-muted">
                  {r.u}
                </span>
              )}
            </span>
          </span>
        );
      })}
    </div>
  );
}
