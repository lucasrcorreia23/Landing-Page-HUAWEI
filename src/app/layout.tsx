import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import '../../public/fonts/fonts.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Access Points Prime8',
  description: 'Produtos da Prime8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth hover:scroll-auto">
      <body >{children}
      <Analytics />
      </body>
    </html>
  )
}
