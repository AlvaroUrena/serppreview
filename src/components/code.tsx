'use client'

import { useSiteContext } from '@/contexts/site-context'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect } from 'react'

export default function Code() {
  const { title, description } = useSiteContext()

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  const code = `<meta name="title" content="${title}" />;
<meta name="description" content="${description}"/>`

  return (
    <section className='rounded-md border-2 border-border bg-accent'>
      <pre style={{ margin: 0 }}>
        <code className='language-html'>{code}</code>
      </pre>
    </section>
  )
}
