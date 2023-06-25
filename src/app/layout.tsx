import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Landing Page From Lucas',
  description: 'All the things i never did',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth hover:scroll-auto">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
