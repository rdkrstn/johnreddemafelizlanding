"use client";

import { useState, type FormEvent } from "react";

const AD_SPEND_OPTIONS = [
  "Below ₱50K",
  "₱50K - ₱100K",
  "₱100K - ₱300K",
  "₱300K - ₱500K",
  "₱500K+",
] as const;

const SHOWUP_OPTIONS = [
  "Below 20%",
  "20% - 40%",
  "40% - 60%",
  "60%+",
  "I don't track this",
] as const;

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // Collect form data
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      adSpend: formData.get("adSpend"),
      showUpRate: formData.get("showUpRate"),
    };

    // TODO: Connect to your form endpoint (GoHighLevel, webhook, etc.)
    console.log("Application submitted:", data);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-card-bg border border-border-cyan rounded-[14px] p-8 text-center">
        <div className="text-teal text-3xl mb-4">&#10003;</div>
        <h3 className="font-display text-xl font-semibold text-soft-white mb-3">
          Application Received
        </h3>
        <p className="text-[14px] text-cool-gray leading-relaxed max-w-sm mx-auto">
          Thank you for applying. If you qualify, you&apos;ll hear from us
          within 24 hours to schedule your strategy call.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-surface border border-cool-gray/10 rounded-lg px-3.5 py-3 text-soft-white text-base font-sans outline-none focus:border-cyan/40 transition-colors placeholder:text-cool-gray/30";
  const selectClass =
    "w-full bg-surface border border-cool-gray/10 rounded-lg px-3.5 py-3 text-soft-white text-base font-sans outline-none focus:border-cyan/40 transition-colors appearance-none";

  return (
    <div className="bg-card-bg border border-border-cyan rounded-[14px] p-8">
      <h3 className="font-display text-lg font-semibold text-soft-white mb-2">
        Apply for a Strategy Call
      </h3>
      <p className="text-[12px] text-cool-gray/60 mb-6">
        Takes 2 minutes. Not everyone qualifies.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-[12px] font-medium text-cool-gray mb-1.5"
          >
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-[12px] font-medium text-cool-gray mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="adSpend"
            className="block text-[12px] font-medium text-cool-gray mb-1.5"
          >
            Monthly Ad Spend
          </label>
          <select
            id="adSpend"
            name="adSpend"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled className="text-cool-gray/30">
              Select your range
            </option>
            {AD_SPEND_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="showUpRate"
            className="block text-[12px] font-medium text-cool-gray mb-1.5"
          >
            Current Show-Up Rate
          </label>
          <select
            id="showUpRate"
            name="showUpRate"
            required
            defaultValue=""
            className={selectClass}
          >
            <option value="" disabled className="text-cool-gray/30">
              Select your range
            </option>
            {SHOWUP_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting..." : "Submit Application \u2192"}
        </button>

        <p className="text-[11px] text-cool-gray/40 text-center mt-3">
          Your information is kept confidential and never shared.
        </p>
      </form>
    </div>
  );
}
