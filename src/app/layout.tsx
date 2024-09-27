import type { Metadata } from 'next'
import './globals.css'

import { Header } from '@/components/layout'

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
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
