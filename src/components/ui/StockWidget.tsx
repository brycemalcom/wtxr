"use client";

import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------
   TradingView embeds for OTC: WTXR.
   Free widgets — require the TradingView attribution link to remain.
   Docs: https://www.tradingview.com/widget-docs/
------------------------------------------------------------------- */

const SYMBOL = "OTC:WTXR";

function TradingViewEmbed({
  src,
  config,
  className,
}: {
  src: string;
  config: Record<string, unknown>;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";
    container.appendChild(widget);

    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.innerHTML = JSON.stringify(config);
    container.appendChild(script);

    return () => {
      // Widgets inject iframes; clear everything so re-mounts stay clean.
      container.replaceChildren();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src]);

  return (
    <div className={className}>
      <div ref={ref} className="tradingview-widget-container h-full w-full" />
    </div>
  );
}

/** Scrolling ticker tape — WTXR plus energy benchmarks for context. */
export function TickerTape({
  variant = "card",
}: {
  variant?: "card" | "band";
}) {
  return (
    <TradingViewEmbed
      className={
        variant === "band"
          ? "h-[46px] w-full overflow-hidden"
          : "overflow-hidden rounded-2xl border border-border-warm bg-surface-warm/20"
      }
      src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
      config={{
        symbols: [
          { proName: "OTC:WTXR", title: "WTXR" },
          { proName: "TVC:USOIL", title: "WTI Crude" },
          { proName: "TVC:UKOIL", title: "Brent Crude" },
        ],
        showSymbolLogo: false,
        colorTheme: "dark",
        isTransparent: true,
        displayMode: "regular",
        locale: "en",
      }}
    />
  );
}

/**
 * Full-width ticker band. Sits at the bottom of the hero in normal flow,
 * then docks beneath the fixed header and stays pinned while scrolling.
 */
export function TickerBand() {
  return (
    <div className="sticky top-[var(--header-height)] z-30 border-y border-border-subtle bg-background/85 backdrop-blur-xl">
      <TickerTape variant="band" />
    </div>
  );
}

/** Quote header — price, change, volume, day/52-week range. */
export function StockQuoteHeader() {
  return (
    <TradingViewEmbed
      src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
      config={{
        symbol: SYMBOL,
        width: "100%",
        locale: "en",
        colorTheme: "dark",
        isTransparent: true,
      }}
    />
  );
}

/** Interactive price chart. */
export function StockChart() {
  return (
    <TradingViewEmbed
      className="h-[26rem] overflow-hidden rounded-2xl border border-border-subtle bg-surface/40 sm:h-[30rem]"
      src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
      config={{
        autosize: true,
        symbol: SYMBOL,
        interval: "D",
        timezone: "America/Chicago",
        theme: "dark",
        style: "2",
        locale: "en",
        backgroundColor: "rgba(10, 9, 8, 1)",
        gridColor: "rgba(255, 255, 255, 0.04)",
        hide_top_toolbar: false,
        hide_legend: false,
        allow_symbol_change: false,
        save_image: false,
        calendar: false,
        support_host: "https://www.tradingview.com",
      }}
    />
  );
}
