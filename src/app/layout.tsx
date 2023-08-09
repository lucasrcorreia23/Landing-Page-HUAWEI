
import { ReactNode } from 'react'
import '../../public/fonts/fonts.css';
import './globals.css'

export default function RootLayout({  children, }: {  children: ReactNode }) {
  return (
    <html lang="pt-br">
                 
        
     <head />
      <body className="scroll-smooth hover:scroll-auto">
      {children}
      
      </body>
    
    </html>
  )
}
