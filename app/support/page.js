import Link from "next/link";
import { Leaf } from "../leaf";

export const metadata = { title: "BotaniX — Support" };

export default function Support() {
  return (
    <div className="wrap prose">
      <nav className="nav">
        <Leaf />
        <Link href="/" style={{ textDecoration: "none" }}>BotaniX</Link>
      </nav>

      <h1 style={{ color: "#1f5130" }}>Support</h1>
      <p>We're here to help you keep your plants thriving.</p>

      <h2>Get in touch</h2>
      <p>
        Email us at{" "}
        <a href="mailto:botanixapp@yahoo.com">botanixapp@yahoo.com</a> and we'll
        get back to you within 1–2 business days. {/* TODO: real support email */}
      </p>

      <h2>Common questions</h2>
      <ul>
        <li>
          <strong>How do I cancel my subscription?</strong> Manage it in
          Settings → your Apple ID → Subscriptions on your iPhone.
        </li>
        <li>
          <strong>My scan looks wrong.</strong> Retake the photo in good light
          with the plant filling the frame, then try again.
        </li>
        <li>
          <strong>Restore a purchase?</strong> Open BotaniX → Settings →
          Restore Purchases.
        </li>
      </ul>

      <footer>
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
