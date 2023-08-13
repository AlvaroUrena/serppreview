import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between gap-3 border-t-2 border-border bg-background p-4 text-center md:flex-row'>
      <p>© Copyright 2023 Alvaro Ureña Carrillo</p>
      <section className='flex justify-center gap-4'>
        <Link href='/' rel='nofollow' className='hover:underline'>
          Privacy Policy
        </Link>
        <Link href='/' rel='nofollow' className='hover:underline'>
          Terms & Conditions
        </Link>
        <Link
          href='https://github.com/AlvaroUrena/serppreview'
          rel='nofollow'
          target='_blank'
          className='hover:underline'
        >
          Github
        </Link>
      </section>
    </footer>
  )
}
