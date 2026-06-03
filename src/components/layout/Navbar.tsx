"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { primaryNav, sectionNav, company } from "@/lib/site-content";
import { EASE } from "@/lib/motion";
import { MenuButton } from "@/components/layout/MenuButton";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex flex-col items-center leading-none"
    >
      <span className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-energy font-display text-xs font-bold text-black">
          W
        </span>
        <span className="font-display text-sm font-bold tracking-tight text-text-primary sm:text-base">
          West Texas Resources
        </span>
      </span>
      <span className="mt-1 flex items-center gap-1.5 font-mono text-[0.6rem] tracking-[0.22em] text-brand-amber">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" />
        {company.market}: {company.ticker}
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled && !open
            ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="shell container-px grid h-[var(--header-height)] grid-cols-3 items-center">
          {/* Left — spacer to keep the logo centered */}
          <div aria-hidden />

          {/* Center — logo + ticker */}
          <div className="justify-self-center">
            <Logo onClick={close} />
          </div>

          {/* Right — menu */}
          <div className="justify-self-end">
            <MenuButton open={open} onClick={() => setOpen((v) => !v)} />
          </div>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-background/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 -z-10 radial-warm" />
            <div className="absolute inset-0 -z-10 reservoir-grid opacity-[0.04]" />

            <div className="shell container-px flex min-h-screen flex-col justify-center pb-16 pt-[var(--header-height)]">
              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                {/* Story sections */}
                <div>
                  <p className="kicker mb-8">Explore</p>
                  <ul className="space-y-1">
                    {sectionNav.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 * i + 0.1, ease: EASE }}
                      >
                        <Link
                          href={link.href}
                          onClick={close}
                          className="group flex items-baseline gap-4 py-2"
                        >
                          <span className="font-mono text-xs text-text-muted transition-colors group-hover:text-brand-amber">
                            {link.index}
                          </span>
                          <span className="font-display text-3xl font-semibold tracking-tight text-text-secondary transition-colors group-hover:text-text-primary sm:text-4xl">
                            {link.label}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Pages + meta */}
                <div className="flex flex-col justify-between gap-10 border-t border-border-subtle pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div>
                    <p className="kicker mb-6">Investor & Company</p>
                    <ul className="space-y-3">
                      {primaryNav.map((link, i) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.06 * i + 0.3, ease: EASE }}
                        >
                          <Link
                            href={link.href}
                            onClick={close}
                            className="group inline-flex items-center gap-1.5 text-lg text-text-secondary transition-colors hover:text-text-primary"
                          >
                            {link.label}
                            <ArrowUpRight className="h-4 w-4 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange" />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4 text-sm text-text-muted"
                  >
                    <Link
                      href="/investors"
                      onClick={close}
                      className="inline-flex rounded-full bg-gradient-energy px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.03]"
                    >
                      Investor Relations
                    </Link>
                    <p className="font-mono tracking-widest text-brand-amber">
                      {company.market}: {company.ticker}
                    </p>
                    <a
                      href={`mailto:${company.contact.investors}`}
                      className="block transition-colors hover:text-text-primary"
                    >
                      {company.contact.investors}
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
