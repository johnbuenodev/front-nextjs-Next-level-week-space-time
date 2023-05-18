import { ReactNode } from 'react'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from 'next/font/google'

//IMPORTANDO AS FONTS E DECLARANDO AS VARIAVEIS PARA SEREM UTILIZADAS NO CSS JS --FONT-NOME-DA-FONTE

const roboto = Roboto({ subsets: ['latin'],variable: '--font-roboto' });

const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: '700', variable: '--font-baijamjuree' })

export const metadata = {
  title: 'NLW SpaceTime App',
  description: 'Estudo de Nextjs, Reactjs, Typescript, Nodejs e Prisma',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} bg-gray-900 font-sans text-gray-100`}>{children}</body>
    </html>
  )
}
