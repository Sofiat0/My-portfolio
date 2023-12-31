import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import { Fasthand } from 'next/font/google'
import { Poppins } from 'next/font/google'

const fast = Fasthand({
  subsets:['latin'],
  weight:['400']
})
const popp = Poppins({
  subsets:['latin'],
  weight:['200']
})


const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
<link rel='icon' href='/favicon.ic'/>
</head>

      <body className={inter.className}>
        <Navbar />
        <main className='min-h-[450px] text-center mt-auto text-3xl container '>
          {children}
          <Footer  />
        </main>

      </body>
    </html>
  )
} 

