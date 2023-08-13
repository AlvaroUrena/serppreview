import FormElement from '@/components/formElement'
import Preview from '@/components/preview'
import { Separator } from '@/components/ui/separator'
import SiteContextProvider from '@/contexts/site-context'

export default function Home() {
  return (
    <>
      <section className='container flex h-96 flex-col items-center justify-center'>
        <h1 className='text-center text-6xl font-bold md:text-9xl'>
          SERP{' '}
          <span className='animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text text-transparent'>
            Preview
          </span>
        </h1>
        <Separator className='h-2 rounded-md' />
      </section>
      <SiteContextProvider>
        <div className='mx-auto block max-w-[1400px] grid-cols-2 place-items-center items-start gap-2 px-6 md:grid'>
          <FormElement />
          <Preview />
        </div>
      </SiteContextProvider>
    </>
  )
}
