import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SPECTRE - Shop The Future',
  description: 'Y2K Fashion & Pixel Gear',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
