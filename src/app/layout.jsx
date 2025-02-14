import "./globals.scss";

export const metadata = {
  title: "Paper Fold Game",
  description: "A game where you fold a piece of paper in half 42 times to reach the moon.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
