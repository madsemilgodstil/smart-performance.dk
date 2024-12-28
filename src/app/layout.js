import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'
import ClarityProvider from '@/components/clarity/ClarityProvider'
import Head from 'next/head'
import Script from 'next/script' // Import Script from Next.js

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
      <Head />
      {/* Google Tag Manager Script */}
      <Script
        id='google-tag-manager'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WD3F7KX7');
          `
        }}
      />
      {/* Google Analytics Script */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-SN3S65KSFN'
        strategy='afterInteractive'
      />
      <Script
        id='google-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SN3S65KSFN');
          `
        }}
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-WD3F7KX7'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <ClarityProvider />
        {children}
        <Footer />
      </body>
    </html>
  )
}
