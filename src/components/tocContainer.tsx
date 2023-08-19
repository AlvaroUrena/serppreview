import TOC from './toc'

export default function TOCContainer({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='container mt-24 grid-cols-[1fr,4fr] gap-2 md:grid'>
      <TOC selector='#content' />
      <div id='content'>{children}</div>
    </div>
  )
}
