import Link from "next/link";
import { Leaf } from "../leaf";

export const metadata = { title: "BotaniX — Privacy Policy" };

export default function Privacy() {
  return (
    <div className="wrap prose">
      <nav className="nav">
        <Leaf />
        <Link href="/" style={{ textDecoration: "none" }}>BotaniX</Link>
      </nav>

      <h1 style={{ color: "#1f5130" }}>Privacy Policy</h1>
      <p className="muted">Last updated: placeholder date</p>

      <div className="flag">
        ⚠ Placeholder content — this policy must be reviewed by a lawyer before
        going live.
      </div>

      <h2>Data we collect</h2>
      <ul>
        <li>Photos you capture for plant, disease, and soil analysis.</li>
        <li>Account details (email) if you create an account.</li>
        <li>Subscription and purchase status via the App Store.</li>
        <li>Basic device and usage diagnostics.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        To run the scanners, deliver results, manage your subscription, and
        improve the app. We do not sell your personal data.
      </p>

      <h2>Third-party services</h2>
      <ul>
        <li>
          <strong>Supabase</strong> — authentication and data storage.
        </li>
        <li>
          <strong>Google Gemini API</strong> — image analysis powering the
          scanners. Photos may be processed by this service to generate results.
        </li>
        <li>
          <strong>Apple</strong> — App Store subscriptions and payments.
        </li>
      </ul>

      <h2>Data retention & your rights</h2>
      <p>
        You can request access to or deletion of your data by contacting us.
        Retention periods to be finalized during legal review.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email{" "}
        <a href="mailto:support@example.com">support@example.com</a>. {/* TODO: real support email */}
      </p>

      <footer>
        <Link href="/">Home</Link>
        <Link href="/support">Support</Link>
      </footer>
    </div>
  );
}
