"use client";

import { useState } from "react";

const EMAIL = "panos@darasflow.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgobaryg";

type Status = "idle" | "sending" | "success" | "error";

export default function ConsultCTA() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Workflow enquiry${name ? ` from ${name}` : ""}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const data = await res.json().catch(() => null);
        setError(
          data?.errors?.map((x: { message: string }) => x.message).join(", ") ||
            `Something went wrong. Please email ${EMAIL} directly.`
        );
        setStatus("error");
      }
    } catch {
      setError(`Couldn't reach the server. Please email ${EMAIL} directly.`);
      setStatus("error");
    }
  };

  return (
    <div className="consult">
      <h3>Workflow Consulting</h3>
      <p>
        I occasionally take on select workflow automation projects for businesses.
        If you have a messy operational problem that needs a lightweight, custom fix, let&apos;s talk.
      </p>

      {!open ? (
        <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
          Get in touch →
        </button>
      ) : status === "success" ? (
        <div className="contact-success">
          <p>
            <strong>Thanks, your message is on its way.</strong>{" "}I&apos;ll get back to you by email soon.
          </p>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setStatus("idle");
              setOpen(false);
            }}
          >
            Done
          </button>
        </div>
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
              required
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
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Briefly describe the problem you'd like to solve…"
            />
          </div>
          <div className="contact-actions">
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setOpen(false);
                setStatus("idle");
                setError("");
              }}
            >
              Cancel
            </button>
          </div>
          {status === "error" ? (
            <p className="contact-status is-error">{error}</p>
          ) : (
            <p className="contact-hint">Sent straight to my inbox. I&apos;ll reply by email.</p>
          )}
        </form>
      )}
    </div>
  );
}
