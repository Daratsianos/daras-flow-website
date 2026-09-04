"use client";

import { useState } from "react";

const EMAIL = "panos@darasflow.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgobaryg";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
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
      setError(`Couldn’t reach the server. Please email ${EMAIL} directly.`);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <p>
          <strong>Thanks. It’s in my inbox.</strong>
        </p>
        <p>I’ll read it properly and reply by email.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label is-muted" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
      </div>
      <div className="field">
        <label className="label is-muted" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          className="input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>
      <div className="field">
        <label className="label is-muted" htmlFor="contact-message">
          What’s clunky?
        </label>
        <p className="field-help" id="contact-message-help">
          Where does the work get stuck? Which tools are involved? Who does it,
          and how often?
        </p>
        <textarea
          id="contact-message"
          className="textarea"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="contact-message-help"
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send it over"}
        </button>
        {status === "error" ? (
          <p className="form-error">{error}</p>
        ) : (
          <p className="form-note">Goes straight to my inbox.</p>
        )}
      </div>
    </form>
  );
}
