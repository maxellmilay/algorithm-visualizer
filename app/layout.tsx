import React from 'react'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import '../styles/global.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='flex flex-col min-h-dvh'>
          <TheHeader/>
          <main className='flex grow w-full'>
            {children}
          </main>
          <TheFooter/>
        </body>
      </html>
    )
  }