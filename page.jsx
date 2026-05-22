import './globals.css';

export const metadata = {
  title: 'J. Rich Management Group | Real Estate Consulting Experts',
  description: 'Strategic real estate consulting for Atlanta and Metro Atlanta investors, property owners, and fix-and-flip projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
