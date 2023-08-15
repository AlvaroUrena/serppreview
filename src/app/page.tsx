import Code from '@/components/code'
import FormElement from '@/components/formElement'
import Preview from '@/components/preview'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SiteContextProvider from '@/contexts/site-context'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SERP Preview - SERP Snippet Preview Tool',
  description:
    'With SERP Preview you can see how your site will appear on Google Search.'
}

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
        <div className='mx-auto block max-w-[1450px] grid-cols-2 place-items-center items-start px-6 md:gap-8 lg:grid lg:gap-20'>
          <section className='w-full'>
            <Tabs defaultValue='form'>
              <TabsList>
                <TabsTrigger value='form'>Form</TabsTrigger>
                <TabsTrigger value='code'>Code</TabsTrigger>
              </TabsList>
              <TabsContent value='form'>
                <FormElement />
              </TabsContent>
              <TabsContent value='code'>
                <Code />
              </TabsContent>
            </Tabs>
          </section>
          <Preview />
        </div>
      </SiteContextProvider>
    </>
  )
}
