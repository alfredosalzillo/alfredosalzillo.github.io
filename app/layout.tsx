import React from 'react';
import './globals.css';
import Script from 'next/script';
import type {Metadata, Viewport} from 'next';

export const metadata: Metadata = {
  title: 'Alfredo Salzillo',
  description: 'A developer personal website',
  authors: [
    {
      name: 'Alfredo Salzillo',
    },
  ],
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: 'device-width',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="gtm-script" async src="https://www.googletagmanager.com/gtag/js?id=G-QZ1DYNJ6KE" />
        <Script id="gtm-init">
          {/* language=javascript */}
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-QZ1DYNJ6KE');
        `}
        </Script>
      </body>
    </html>
  );
}
