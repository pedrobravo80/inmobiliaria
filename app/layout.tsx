import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Broker en Línea – Portal Inmobiliario',
  description: 'El portal donde los brokers colaboran y cierran más negocios. Publica propiedades, gestiona leads y comparte comisiones.',
  generator: 'v0.app',
  keywords: 'inmobiliaria, broker, propiedades, bienes raíces, leads, comisiones compartidas',
  openGraph: {
    title: 'Broker en Línea',
    description: 'Portal inmobiliario donde brokers colaboran y cierran más negocios.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
