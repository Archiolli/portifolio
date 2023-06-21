import './globals.css'
import { Saira } from 'next/font/google'

const inter = Saira({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className}`}>
        
        <>
        <div className='bg-image bg-scroll bg-no-repeat bg-cover bg-center h-screen w-screen fixed'>
          {children}
          </div>
        
        </>
        </body>
    </html>
  )
}
