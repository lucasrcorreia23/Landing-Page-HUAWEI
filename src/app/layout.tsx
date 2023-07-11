import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import '../../public/fonts/fonts.css';
import Head from 'next/head';

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
      <Head>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "hunr1enqaf");
          `,
          }}
        />
        
      </Head>
      <body>{children}
      <Analytics />
      </body>
    </html>
  )
}
