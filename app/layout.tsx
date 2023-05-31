import './globals.css';
import NavBar from './components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Acólito y Hereje',
    description: 'Personal portfolio, blog and medium clone'
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
          {children}
      </body>
    </html>
  )
}
