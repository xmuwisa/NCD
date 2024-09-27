import type { Metadata } from 'next'
import './globals.css'

import { Header, Footer } from '@/components/layout'

export const metadata: Metadata = {
    title: 'National Crush Day',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/images/logo/White.png"
                    type="image/png"
                />
            </head>
            <body className="w-screen max-w-full m-0 p-0">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
