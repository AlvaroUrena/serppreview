'use client'

import { useSiteContext } from '@/contexts/site-context'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ClipboardCopy, ClipboardCheck } from 'lucide-react'

export default function Code() {
  const { title, description } = useSiteContext()
  const [copied, setCopied] = useState<boolean>(false)

  const code = `<html>
  <head>
    <meta name="title" content="${title}" />;
    <meta name="description" content="${description}" />
  </head>
  <body>...</body>
</html>`

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset copied state after 1.5 seconds
      })
      .catch(err => {
        console.error('Error copying to clipboard:', err)
      })
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section className='rounded-md border-2 border-border bg-accent'>
      <pre className='relative' style={{ margin: 0 }}>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className='absolute right-0 top-0'>
              <Button variant='outline' size='icon' onClick={copyToClipboard}>
                {copied ? (
                  <ClipboardCheck className='h-4 w-4' />
                ) : (
                  <ClipboardCopy className='h-4 w-4' />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <code className='language-html'>{code}</code>
      </pre>
    </section>
  )
}
