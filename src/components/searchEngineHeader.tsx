import { Separator } from './ui/separator'
import { Search } from 'lucide-react'

export default function SearchEngineHeader() {
  return (
    <header className='p-2 pb-1'>
      <div className='flex items-center gap-4'>
        <p className='min-w-max text-xl font-bold text-primary'>
          Search <span className='text-red-500 underline'>Engine</span>
        </p>
        <div className='flex w-full rounded-full bg-accent p-4 text-primary/70'>
          <div className='flex-1'>Text...</div>
          <div className='mr-4 grid place-items-center border-l border-primary pl-2'>
            <Search className='h-4 w-4 text-primary' />
          </div>
        </div>
      </div>
      <Separator className='my-4' />
      <p className='text-primary/70'>
        About 806,000,000 results (0.32 seconds)
      </p>
    </header>
  )
}
