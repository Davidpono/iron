
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Navbar  from '@/components2/navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Iron',
  description: 'Make Your Goals a Reality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    
      <body className='mainlayout' >
        
      <Navbar />
        {children}</body>
    </html>
  )
}
