import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'
import Clarity from '@microsoft/clarity'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata = {
  title: 'Smart-Performance.dk',
  description: 'Generated by Smart-Performance.dk'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' className='dark'>
      <Head>
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pl5x63xp77");
            `
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
