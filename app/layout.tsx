import React from 'react';
import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alfredo Salzillo',
  description: 'A developer personal website',
  authors: [
    {
      name: 'Alfredo Salzillo',
    },
  ],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
