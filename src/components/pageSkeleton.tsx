import { Skeleton } from './ui/skeleton'

export default function PageSkeleton() {
  return (
    <>
      <section className='flex items-center gap-3'>
        <Skeleton className='h-12 w-12 rounded-full border-2 border-primary bg-accent p-4' />
        <div className='flex flex-col gap-1'>
          <Skeleton className='h-5 w-32' />
          <Skeleton className='h-5 w-44' />
        </div>
      </section>
      <section className='mb-4 flex flex-col gap-1'>
        <Skeleton className='mt-2 h-5 w-[50%]' />
        <Skeleton className='h-10 w-[85%]' />
      </section>
    </>
  )
}
