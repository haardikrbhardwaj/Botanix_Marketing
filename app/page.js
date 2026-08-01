import { Leaf, APP_STORE_URL } from "./leaf";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrap">
      <nav className="nav">
        <Leaf />
        BotaniX
      </nav>

      <header className="hero">
        <h1>Your plants, understood.</h1>
        <p>
          Identify plants, spot diseases, and check your soil — all from one
          photo.
        </p>
        <div className="badges">
          <a className="btn" href={APP_STORE_URL}>
            Download on the App Store
          </a>
          <Link className="btn ghost" href="#pricing">
            See plans
          </Link>
        </div>
      </header>

      <section className="section">
        <h2>Three scanners, one photo</h2>
        <div className="grid">
          <div className="card">
            <Leaf />
            <h3>Plant ID</h3>
            <p>
              Point your camera at any plant and get the species, common names,
              and care basics in seconds.
            </p>
          </div>
          <div className="card">
            <Leaf />
            <h3>Disease Diagnosis</h3>
            <p>
              Spot pests, blight, and nutrient problems early — with a clear
              read on what's wrong and what to do.
            </p>
          </div>
          <div className="card">
            <Leaf />
            <h3>Soil Analysis</h3>
            <p>
              Snap your soil to gauge moisture, texture, and health, then get
              tailored planting suggestions.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <h2>Simple pricing</h2>
        <div className="plans">
          <div className="card plan">
            <h3>Growth</h3>
            <div className="price">
              ₹499<span> / month</span>
            </div>
            <ul>
              <li>All three scanners</li>
              <li>Unlimited plant IDs</li>
              <li>Care reminders</li>
            </ul>
            <Link className="btn" href="/subscribe/growth">
              Get Growth
            </Link>
          </div>
          <div className="card plan">
            <h3>Unlimited</h3>
            <div className="price">
              ₹999<span> / 3 months</span>
            </div>
            <ul>
              <li>Everything in Growth</li>
              <li>Best value — save vs monthly</li>
              <li>Priority diagnosis</li>
            </ul>
            <Link className="btn" href="/subscribe/unlimited">
              Get Unlimited
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <a href={APP_STORE_URL}>App Store</a>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
      </footer>
    </div>
  );
}
