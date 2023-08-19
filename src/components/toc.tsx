'use client'

import { useEffect, useRef, useState } from 'react'

type TOSType = {
  selector: string
}

//FIXME: When entering the page the TOC background is displayed for a few moments even if the isOpen property is false.

export default function TOC({ selector }: TOSType) {
  const [isOpen, setIsOpen] = useState(true)
  const [currentHeadingID, setCurrentHeadingID] = useState<string | undefined>()

  const listWrapperRef = useRef<HTMLDivElement>(null)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWindowResize = () => {
      setIsOpen(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleWindowResize)
    handleWindowResize()

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const [headings, setHeadings] = useState<HTMLHeadElement[]>([])
  useEffect(() => {
    const headingNodeList = document
      .querySelector(selector)!
      .querySelectorAll('h2') as NodeListOf<HTMLHeadElement>

    if (headingNodeList.length) {
      const headingArray = Array.from(headingNodeList)
      headingArray.forEach(el => {
        el.dataset.id = Math.round(Math.random() * 100000).toString()
      })
      setHeadings(headingArray)
    }
  }, [selector])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          // if (entry.intersectionRatio > 0.9) {
          // console.log(entry.target.innerHTML, entry.intersectionRatio);
          if (entry.isIntersecting && entry.intersectionRatio >= 1) {
            setCurrentHeadingID((entry.target as HTMLHeadElement).dataset.id)
          }
        })
      },
      {
        rootMargin: '0% 0% -60% 0%',
        threshold: 1
      }
    )

    if (headings.length) {
      headings.forEach(s => {
        observer.observe(s)
      })
    }

    return () => {
      return observer.disconnect()
    }
  }, [headings, headings.length])

  useEffect(() => {
    const element = listWrapperRef.current?.querySelector(
      'button[data-id="' + currentHeadingID + '"]'
    )

    if (currentHeadingID && element) {
      listWrapperRef.current?.scrollTo({
        top: (element as HTMLElement).offsetTop,
        behavior: 'smooth'
      })
    }
  }, [currentHeadingID])

  return (
    <div
      className='sticky top-20 z-50 h-fit border-2 border-b-2 border-primary bg-accent py-2 text-sm md:top-12 md:rounded-md'
      ref={wrapperRef}
    >
      <div className='flex items-center gap-2'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='rounded-lg p-2 hover:bg-accent'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='30'
            height='30'
            fill='currentColor'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'
            />
          </svg>
        </button>
        <span>Table of Content</span>
      </div>
      <div
        className={`absolute inset-x-0 top-[103%] z-50 overflow-hidden rounded-b-2xl bg-background drop-shadow transition-[height] duration-200 ${
          isOpen ? 'visible h-60' : 'invisible h-0'
        }`}
      >
        <div className='h-full p-4' ref={listWrapperRef}>
          {headings.map(heading => {
            const tagLevel = heading.tagName.match(/(\d+)/)?.[0] || '1'
            return (
              <button
                key={heading.dataset.id}
                style={{ paddingLeft: +tagLevel * 7 + 'px' }}
                className={`my-1 flex w-full rounded-md py-2  pr-2 font-semibold ${
                  currentHeadingID === heading.dataset.id
                    ? 'bg-accent text-white'
                    : 'hover:bg-muted '
                }`}
                title={heading.innerHTML}
                data-id={heading.dataset.id}
                onClick={() => {
                  window.scrollTo({
                    top:
                      heading.getBoundingClientRect().top + window.scrollY - 60,
                    behavior: 'smooth'
                  })
                }}
              >
                {heading.innerHTML}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
