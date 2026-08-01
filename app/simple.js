import { Leaf, APP_STORE_URL } from "./leaf";

// Shared fallback page for Universal Link targets (/paywall, /subscribe/*).
// On iOS with the app installed, the OS opens the app before this ever renders.
// Everyone else sees this and gets sent to the App Store.
export default function SimplePage({ title, blurb }) {
  return (
    <main className="simple">
      <Leaf />
      <h1>{title}</h1>
      <p>{blurb}</p>
      <p className="muted">
        Have the app? It should open automatically. Otherwise, grab BotaniX
        below.
      </p>
      <a className="btn" href={APP_STORE_URL}>
        Get BotaniX on the App Store
      </a>
    </main>
  );
}
