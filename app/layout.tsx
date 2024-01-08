import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['400','500','600','700'],
  variable:'--font-poppins',
})

export const metadata: Metadata = {
  title: 'Sherehe Near Me',
  description: "Discover and share the excitement with 'Sherehe Near Me' – your go-to platform for staying connected with the latest happenings in your area. Post and explore upcoming events or parties, from local gatherings to big celebrations. Whether it's concerts, festivals, or community meet-ups, our platform brings the festivities closer to you. Join the vibrant community of event enthusiasts and never miss out on the next big thing. Sherehe Near Me – your guide to the pulse of local happenings",
  icons:{
    icon:'/assets/images/Sherehe_logo_circle.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
