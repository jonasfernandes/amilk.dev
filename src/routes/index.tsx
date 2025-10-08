import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <main className="">
      <div className='flex flex-row p-16 items-center gap-12 max-w-[1024px] mx-auto'>
        <div className='p-4 rounded-full overflow-hidden min-w-80 relative group'>
          <img className='rounded-full overflow-hidden min-w-[288px] min-h-[288px]' src="https://i.pravatar.cc/300" alt="" />
          <span className='border-2 border-primary rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 w-[90%] h-[90%] group-hover:w-full group-hover:h-full'></span>
          <span className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full h-full bg-primary rounded-full scale-100 group-hover:scale-0 transition-all duration-300'></span>
        </div>
        <div>
          <h1 className="font-[Proxima_Nova_Bold] text-primary text-8xl tracking-tighter leading-20">Frontend <br />Developer.</h1>
          <p className="p-2 text-foreground-2 text-md mt-6">I've been building things on the Internet since 2012, and I'm experienced with languages and frameworks like JavaScript, React, Vue, Node.js, Sass, Tanstack Query, Tanstack Router and Vite.</p>
        </div>
      </div>
    </main>
  )
}
