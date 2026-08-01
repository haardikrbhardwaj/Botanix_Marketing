// Shared leaf motif + config used across pages.
export const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXXXXXX"; // TODO: real App Store URL

export function Leaf({ className = "leaf" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 44C10 44 4 30 6 12 24 14 40 20 42 40c-9 2-14-4-16-14"
        fill="#1f5130"
      />
      <path d="M24 44C22 30 14 20 8 16" stroke="#eaf7c9" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
