'use client'

import { useSiteContext } from '@/contexts/site-context'
import Image from 'next/image'

export default function Preview() {
  const { url, setUrl, title, setTitle, description, setDescription } =
    useSiteContext()

  return (
    <section className='select-none rounded-md border-2 border-border bg-[#1f2125]'>
      <header className='p-2 pb-1'>
        <Image
          src='/images/google_search.png'
          alt='google search'
          width={600}
          height={200}
        />
      </header>
      <main className='h-96 pl-[8.2dvw]'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sequi
          at culpa animi maxime porro libero amet alias, hic beatae ducimus modi
          molestiae iure, fuga, quidem quos nisi corporis. Porro.
        </p>
        <h1>{url}</h1>
      </main>
    </section>
  )
}
