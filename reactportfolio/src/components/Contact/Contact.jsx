import React, { useState } from "react";

export default function ContactComponent() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  // Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    return e;
  };

  // Input change handler
  const handleChange = (key) => (ev) => {
    setForm((s) => ({ ...s, [key]: ev.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  // Submit handler
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }

    setStatus({ loading: true, success: null, message: "Sending..." });

    try {
      const body = {
        ...form,
        subject: form.subject.trim() ? form.subject : "Contact Me", // default subject
      };

      const response = await fetch("https://formspree.io/f/mzzawkrz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, message: "Message sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ loading: false, success: false, message: "Failed to send message." });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, message: "Something went wrong." });
      console.error(err);
    }
  };

  return (
    <section id="Contact" className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Contact Me</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Have a project or question? Fill the form below.
      </p>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={handleChange("name")}
            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-400 ring-red-200" : "border-gray-200 ring-indigo-200"
            }`}
            placeholder="Your name"
          />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange("email")}
            className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-400 ring-red-200" : "border-gray-200 ring-indigo-200"
            }`}
            placeholder="you@domain.com"
          />
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            value={form.subject}
            onChange={handleChange("subject")}
            className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 border-gray-200 ring-indigo-200"
            placeholder="Subject (optional)"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={handleChange("message")}
            className={`w-full rounded-lg border px-3 py-2 resize-y focus:outline-none focus:ring-2 ${
              errors.message ? "border-red-400 ring-red-200" : "border-gray-200 ring-indigo-200"
            }`}
            placeholder="Your message..."
          ></textarea>
          {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
        </div>

        {/* Buttons and Status */}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={status.loading}
            className="rounded-xl px-5 py-2 bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          <button
            type="button"
            onClick={() => setForm({ name: "", email: "", subject: "", message: "" })}
            className="rounded-xl px-4 py-2 border"
          >
            Clear
          </button>

          {status.success === true && <p className="text-sm text-green-600">{status.message}</p>}
          {status.success === false && <p className="text-sm text-red-600">{status.message}</p>}
        </div>
      </form>
    </section>
  );
}
