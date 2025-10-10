import { createFileRoute } from '@tanstack/react-router'
import SaluteHand from '@/components/SaluteHand'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="">
      <div className='flex flex-col sm:flex-row px-4 py-8 sm:px-8 sm:py-16 lg:p-16 items-center gap-12 sm-gap-8 lg:gap-12 w-full lg:max-w-[1024px] mx-auto'>
        <div className='p-4 rounded-full relative group w-[60%] sm:w-[40%]'>
          <img className='rounded-full overflow-hidden w-full h-full' src="https://i.pravatar.cc/300" alt="" />
          <span className='border-2 border-primary rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 w-[90%] h-[90%] group-hover:w-full group-hover:h-full'></span>
          <span className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full scale-100 group-hover:scale-0 transition-all duration-300'></span>
        </div>
        <div className='w-[100%] sm:w-[60%]'>
          <p className='p-2 text-foreground-2 text-xl'>Yo! <SaluteHand />, I’m <b>Jonas Fernandes</b></p>
          <h1 className="font-[Proxima_Nova_Bold] text-primary text-8xl sm:text-8xl tracking-tighter leading-20">Frontend <br />Developer.</h1>
          <p className="p-2 text-foreground-2 text-md mt-2 sm:mt-4">I've been building things on the Internet since 2012, and I'm experienced with languages and frameworks like JavaScript, React, Vue, Node.js, Sass, Tanstack Query, Tanstack Router and Vite.</p>
        </div>
      </div>
    </main>
  )
}
