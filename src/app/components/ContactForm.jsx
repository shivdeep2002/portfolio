"use client";

import { useState } from "react";

const fieldClassName =
  "w-full rounded-md border border-white/10 bg-[#2a3342] p-4 text-white placeholder-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30";

function ContactForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Could not send the message. Please try again.");
      }

      form.reset();
      setStatus({ type: "success", message: "Message sent successfully. Thank you!" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 py-20">
      <h2 className="mb-3 text-center text-4xl font-bold text-white">
        Contact <span className="text-blue-500">Me</span>
      </h2>
      <p className="mb-8 max-w-xl text-center text-gray-300">
        Have a project or opportunity in mind? Send me a message and I will get back to you soon.
      </p>
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-gray-200">
            Your name
            <input
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Full name"
              maxLength={100}
              required
              className={fieldClassName}
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-200">
            Email address
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="name@example.com"
              maxLength={254}
              required
              className={fieldClassName}
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-200">
            Phone number <span className="text-gray-400">(optional)</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 ..."
              maxLength={30}
              className={fieldClassName}
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-200">
            Subject
            <input
              name="subject"
              type="text"
              placeholder="Project inquiry"
              maxLength={150}
              required
              className={fieldClassName}
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-200 md:col-span-2">
            Message
            <textarea
              name="message"
              placeholder="Tell me about your project or question..."
              maxLength={5000}
              required
              className={`${fieldClassName} resize-y`}
              rows={5}
            />
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`min-h-6 text-center text-sm md:col-span-2 ${
              status.type === "error" ? "text-red-300" : "text-emerald-300"
            }`}
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
