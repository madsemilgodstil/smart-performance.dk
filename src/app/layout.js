'use client'

import { useEffect } from 'react'
import Clarity from 'clarity-js' // Import Clarity SDK
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer/Footer'

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
  useEffect(() => {
    // Initialize Clarity with your project ID
    const projectId = 'pl5x63xp77' // Replace "yourProjectId" with your actual Clarity project ID
    Clarity.init(projectId)
  }, [])

  return (
    <html lang='en' className='dark'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}
