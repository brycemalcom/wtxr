import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { contactPage } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact West Texas Resources, Inc. (WTXR) for business inquiries, investor relations, media requests, or partnership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker={contactPage.hero.kicker}
        headline={contactPage.hero.headline}
        copy={contactPage.hero.copy}
      />

      <Section divider={false}>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <AnimatedSection>
            <ContactForm
              fields={[
                { name: "name", label: "Name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel" },
                { name: "company", label: "Company" },
              ]}
              inquiryTypes={contactPage.inquiryTypes}
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-col gap-4">
              {contactPage.cards.map((card) => (
                <div
                  key={card.title}
                  className="group rounded-2xl border border-border-subtle bg-surface/60 p-6 transition-all duration-500 hover:border-brand-orange/40 hover:bg-surface-warm/30"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-warm bg-surface-warm/50 text-brand-amber">
                      <Mail className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-text-primary">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                        {card.description}
                      </p>
                      <a
                        href={`mailto:${card.email}`}
                        className="mt-3 inline-block text-sm font-medium text-brand-orange transition-colors hover:text-brand-amber"
                      >
                        {card.email}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Section>
    </>
  );
}
