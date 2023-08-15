'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useSiteContext } from '@/contexts/site-context'
import SearchEngineHeader from './searchEngineHeader'
import PageSkeleton from './pageSkeleton'
import { TITLE_MAX_CHARS, DESCRIPTION_MAX_CHARS } from '@/consts/conditions'

export default function Preview() {
  const { domain, url, title, description } = useSiteContext()

  return (
    <section className='mt-12 w-full select-none rounded-md border-2 border-border bg-background p-2 lg:mt-0'>
      <Tabs defaultValue='desktop' className='grid w-full place-items-center'>
        <TabsList>
          <TabsTrigger value='desktop'>Desktop</TabsTrigger>
          <TabsTrigger value='mobile'>Mobile</TabsTrigger>
        </TabsList>
        <TabsContent value='desktop' className='w-full'>
          <SearchEngineHeader />
          <main className='mt-8 p-2'>
            <section className='flex items-center gap-3'>
              <div className='grid h-12 w-12 place-content-center rounded-full border-2 border-primary bg-accent p-4'>
                L
              </div>
              <div className='flex flex-col'>
                <p>{domain ? domain : 'domain.com'}</p>
                <p className='text-primary/70'>
                  {url ? url : 'https://yoursite.com'}
                </p>
              </div>
            </section>
            <section className='mb-4'>
              <p className='mt-2 break-all text-lg text-blue-400'>
                {title
                  ? title.length < TITLE_MAX_CHARS
                    ? title
                    : title.substring(0, TITLE_MAX_CHARS).concat('...')
                  : 'The title of your Website.'}
              </p>
              <p className='text-md break-all text-primary'>
                {description
                  ? description.length < DESCRIPTION_MAX_CHARS
                    ? description
                    : description
                        .substring(0, DESCRIPTION_MAX_CHARS)
                        .concat('...')
                  : 'This is where the description of your website will be displayed.'}
              </p>
            </section>
            <PageSkeleton />
            <PageSkeleton />
          </main>
        </TabsContent>
        <TabsContent value='mobile' className='w-full max-w-sm'>
          <SearchEngineHeader />
          <main className='mt-8 p-2'>
            <div className='mb-4 rounded-md bg-accent/50 p-2'>
              <section className='flex items-center gap-3 border-b border-primary pb-1'>
                <div className='grid h-12 w-12 place-content-center rounded-full border-2 border-primary bg-accent p-4'>
                  L
                </div>
                <div className='flex flex-col'>
                  <p>{domain ? domain : 'domain.com'}</p>
                  <p className='text-primary/70'>
                    {url ? url : 'https://yoursite.com'}
                  </p>
                </div>
              </section>
              <section>
                <p className='mt-2 break-all text-lg text-blue-400'>
                  {title
                    ? title.length < TITLE_MAX_CHARS
                      ? title
                      : title.substring(0, TITLE_MAX_CHARS).concat('...')
                    : 'The title of your Website.'}
                </p>
                <p className='text-md break-all text-primary'>
                  {description
                    ? description.length < DESCRIPTION_MAX_CHARS
                      ? description
                      : description
                          .substring(0, DESCRIPTION_MAX_CHARS)
                          .concat('...')
                    : 'This is where the description of your website will be displayed.'}
                </p>
              </section>
            </div>
            <div className='mb-4 rounded-md bg-accent/50 p-2'>
              <PageSkeleton />
            </div>
            <div className='mb-4 rounded-md bg-accent/50 p-2'>
              <PageSkeleton />
            </div>
          </main>
        </TabsContent>
      </Tabs>
    </section>
  )
}
