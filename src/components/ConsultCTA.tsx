"use client";

import { useState } from "react";

const EMAIL = "panos@darasflow.com";

export default function ConsultCTA() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Workflow enquiry${name ? ` from ${name}` : ""}`;
    const signature = [name && `Name: ${name}`, email && `Email: ${email}`]
      .filter(Boolean)
      .join("\n");
    const body = signature ? `${message}\n\n—\n${signature}` : message;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="consult">
      <h3>Workflow Consulting</h3>
      <p>
        I occasionally take on selected workflow automation and process simplification projects for businesses.
        If you have a messy operational problem that needs a lightweight, custom tool or system integration, let&apos;s talk.
      </p>

      {!open ? (
        <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
          Get in touch →
        </button>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              className="contact-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              className="contact-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              autoComplete="email"
            />
          </div>
          <div className="contact-field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              className="contact-textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe the problem you'd like to solve…"
              required
            />
          </div>
          <div className="contact-actions">
            <button type="submit" className="btn btn-primary">
              Send email →
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
          <p className="contact-hint">
            This opens your email app with the message ready to send to {EMAIL}.
          </p>
        </form>
      )}
    </div>
  );
}
