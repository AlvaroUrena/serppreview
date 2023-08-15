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
import { ClipboardCopy, ClipboardCheck, ClipboardX } from 'lucide-react'

export default function Code() {
  const { title, description } = useSiteContext()
  const [copied, setCopied] = useState<boolean>(false)
  const [copyError, setCopyError] = useState<boolean>(false)

  const code = `<html>
  <head>
    <meta name="title" content="${title}" />;
    <meta name="description" content="${description}" />
  </head>
  <body>...</body>
</html>`

  const copyToClipboard = () => {
    let errorTimeout: ReturnType<typeof setTimeout> | null = null

    // Reset copy error
    if (errorTimeout) clearTimeout(errorTimeout)
    setCopyError(false)

    // Copy
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset copied state after 2 seconds
      })
      .catch(err => {
        setCopyError(true)
        errorTimeout = setTimeout(() => setCopyError(false), 5000) // Reset copy error state after 5 seconds
      })
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return (
    <section className='relative rounded-md border-2 border-border bg-accent'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className='absolute right-0 top-0'>
            <Button variant='outline' size='icon' onClick={copyToClipboard}>
              {copyError ? (
                <ClipboardX className='h-4 w-4' />
              ) : copied ? (
                <ClipboardCheck className='h-4 w-4' />
              ) : (
                <ClipboardCopy className='h-4 w-4' />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {copyError
                ? 'Has ocurred and error while trying to copy the code'
                : 'Copy'}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <pre style={{ margin: 0 }}>
        <code className='language-html'>{code}</code>
      </pre>
    </section>
  )
}
