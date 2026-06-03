"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "textarea";
  required?: boolean;
};

const inputClass =
  "w-full rounded-xl border border-border-subtle bg-surface/60 px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-brand-orange/60 focus:outline-none focus:ring-1 focus:ring-brand-orange/40";

export function ContactForm({
  fields,
  inquiryTypes,
  inquiryLabel = "Inquiry Type",
}: {
  fields: Field[];
  inquiryTypes: readonly string[];
  inquiryLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: wire to an API route / form service later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border-warm bg-surface-warm/30 p-10 text-center">
        <h3 className="font-display text-xl font-semibold text-text-primary">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 text-sm text-text-secondary">
          Your message has been recorded. A member of the West Texas Resources
          team will follow up using the contact details provided.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-brand-orange hover:text-brand-amber"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-border-subtle bg-surface/40 p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields
          .filter((f) => f.type !== "textarea")
          .map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                htmlFor={field.name}
                className="text-xs font-medium uppercase tracking-wider text-text-muted"
              >
                {field.label}
                {field.required ? (
                  <span className="text-brand-orange"> *</span>
                ) : null}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type ?? "text"}
                required={field.required}
                className={inputClass}
              />
            </div>
          ))}

        <div className="flex flex-col gap-2">
          <label
            htmlFor="inquiryType"
            className="text-xs font-medium uppercase tracking-wider text-text-muted"
          >
            {inquiryLabel}
          </label>
          <select id="inquiryType" name="inquiryType" className={inputClass}>
            {inquiryTypes.map((type) => (
              <option key={type} value={type} className="bg-surface">
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-wider text-text-muted"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClass}
        />
      </div>

      <div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
