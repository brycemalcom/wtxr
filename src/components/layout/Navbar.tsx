"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <div className="flex items-center gap-3">
      <Link href="/" onClick={onClick} className="shrink-0">
        <Image
          src="/wtxr-logo.png"
          alt="West Texas Resources, Inc."
          width={44}
          height={44}
          priority
          className="h-10 w-10 sm:h-11 sm:w-11"
        />
      </Link>
      <div className="flex flex-col leading-none">
        <Link
          href="/"
          onClick={onClick}
          className="whitespace-nowrap font-display text-sm font-bold tracking-tight text-text-primary sm:text-base"
        >
          West Texas Resources
        </Link>
        {/* Ticker links to live stock information on the Investors page */}
        <Link
          href="/investors#stock"
          onClick={onClick}
          className="mt-1.5 flex items-center gap-1.5 whitespace-nowrap font-mono text-[0.6rem] tracking-[0.22em] text-brand-amber transition-colors hover:text-brand-orange"
          aria-label="View WTXR stock information"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" />
          {company.market}: {company.ticker}
        </Link>
      </div>
    </div>
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
        <div className="shell container-px grid h-[var(--header-height)] grid-cols-[1fr_auto] items-center md:grid-cols-3">
          {/* Left — logo + ticker */}
          <div className="justify-self-start">
            <Logo onClick={close} />
          </div>

          {/* Center — key destinations for a public company (desktop) */}
          <nav className="hidden items-center gap-7 justify-self-center md:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors",
                  pathname.startsWith(link.href)
                    ? "text-brand-amber"
                    : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

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
                {/* Key destinations — first on mobile, right column on desktop */}
                <div className="flex flex-col justify-between gap-10 lg:order-last lg:border-l lg:border-border-subtle lg:pl-12">
                  <div>
                    <p className="kicker mb-6">Investors & Company</p>
                    <ul className="space-y-1">
                      {primaryNav.map((link, i) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.06 * i + 0.1, ease: EASE }}
                        >
                          <Link
                            href={link.href}
                            onClick={close}
                            className="group inline-flex items-center gap-3 py-2"
                          >
                            <span className="font-display text-3xl font-semibold tracking-tight text-text-primary transition-colors group-hover:text-brand-amber sm:text-4xl">
                              {link.label}
                            </span>
                            <ArrowUpRight className="h-6 w-6 text-text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange" />
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="hidden space-y-4 text-sm text-text-muted lg:block"
                  >
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

                {/* Story sections */}
                <div className="border-t border-border-subtle pt-10 lg:border-t-0 lg:pt-0">
                  <p className="kicker mb-8">Explore the Story</p>
                  <ul className="space-y-1">
                    {sectionNav.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 * i + 0.25, ease: EASE }}
                      >
                        <Link
                          href={link.href}
                          onClick={close}
                          className="group flex items-baseline gap-4 py-1.5"
                        >
                          <span className="font-mono text-xs text-text-muted transition-colors group-hover:text-brand-amber">
                            {link.index}
                          </span>
                          <span className="font-display text-2xl font-semibold tracking-tight text-text-secondary transition-colors group-hover:text-text-primary sm:text-3xl">
                            {link.label}
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
