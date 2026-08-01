import "./globals.css";

export const metadata = {
  title: "BotaniX — AI plant care",
  description:
    "Identify plants, spot diseases, and check your soil — all from one photo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
