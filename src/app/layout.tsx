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
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
