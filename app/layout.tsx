import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GuiEnf',
  description: '',
  generator: 'v0.dev',
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="pt-br">
      <body className="bg-background text-foreground">
      <div className="min-h-screen max-w-7xl mx-auto px-4">
        {children}
      </div>
      </body>
      </html>
  )
}
