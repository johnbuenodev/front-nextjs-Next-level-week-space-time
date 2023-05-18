import { Button } from '@/components/Button'
import Image from 'next/image';
import logo from '../assets/nlw-spacetime-logo.svg';
// TypeScript + JSX = TSX
// JSX = Javascript + XML
import { User } from 'lucide-react';

export default function Home() {
  //<Button title="Aceitar"></Button>
  //multiplos de 4      m-10   == 40px

  /*
       <div className='h-screen bg-zinc-950 text-zinc-50'>
         <h1 className='text-4xl font-bold'>Sua Capsula do Tempo!</h1>
         <h1 className='text-4xl font-bold font-alt'>Sua Capsula do Tempo!</h1>
       </div>
  */

  return ( 
      <main className='grid grid-cols-2 min-h-screen'>
        {/* Left */}
        <div className='relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden'>
        
         {/* Blur */}
         <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />
        
         {/* stripes  w-2 igual a 8pixels de width na tela 34:20 */}
         <div className='absolute bottom-0 right-2 top-0 w-2 bg-stripes' />
         
         {/* sign in */}
         <a href="" className='flex items-center gap-3 text-left transition-colors hover:text-gray-50'>
           <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-400'>
            <User className='h-5 w-5 text-gray-500w'/>
           </div>

           <p className='text-sm leading-snug max-w-[140px]'><span className='underline'>Crie sua conta</span> e salve suas memórias!</p>
           
         </a>

         {/* Hero */}
         <div className="space-y-5">
          <Image src={logo} alt='nlw space time'/>
          
          <div className='max-w-[420px] space-y-1'>
           <h1 className='mt-5 text-5xl font-bold leading-tight text-gray-50'>Sua Cápsula do tempo</h1>
           <p className='max-w-[360px] text-lg leading-relaxed'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</p>
          </div>

          <a href="" className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600'>
            CADASTRAR LEMBRANÇA</a>

         </div>

         {/* Copyright */}
         <div className='text-sn leading-relaxed text-gray-200'>
           Feito com 💜 no NLW da{' '} <a target="_blank" rel="noreferrer" className='underline hover:text-gray-100' href='https://rocketseat.com.br'>RocketSeat</a>
         </div>

        </div>
        
        {/* right */}
        <div className='flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover' >
          <div className='flex flex-1 items-center justify-center'>
            <p className='text-center leading-relaxed w-[360px]'>
             Você ainda não registrou nenhuma lembrança, comece a {' '} 
             <a href='' className='underline hover:text-gray-50'>criar agora</a>!
            </p>
          </div>
        </div>
      </main> 
  )
}
