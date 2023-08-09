
import { ReactNode } from 'react'
import '../../public/fonts/fonts.css';
import './globals.css'
import Head from './head';

export default function RootLayout({  children, }: {  children: ReactNode }) {
  return (
    <html lang="pt-br">
                 
        
     <Head />
      <body className="scroll-smooth hover:scroll-auto">
      {children}
      
      </body>
    
    </html>
  )
}
