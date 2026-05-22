import './globals.css';

export const metadata = {
  title: 'J. Rich Management Group | Strategic Real Estate Consulting in Atlanta',
  description: 'J. Rich Management Group provides strategic real estate consulting, fix and flip guidance, renovation planning, acquisition support, and market analysis across Atlanta and Metro Atlanta.',
  metadataBase: new URL('https://jrichmgmt.org'),
  openGraph: {
    title: 'J. Rich Management Group',
    description: 'Strategic real estate consulting across Atlanta and Metro Atlanta.',
    url: 'https://jrichmgmt.org',
    siteName: 'J. Rich Management Group',
    locale: 'en_US',
    type: 'website'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
