import { Mdx } from '@/components/mdx-components'
import { allDocs } from 'contentlayer/generated'

export default function SeoEmojis() {
  const doc = allDocs.find(doc => doc.slugAsParams === 'seo-emojis')

  if (!doc) return <p>Has ocurred a problem while loading the page</p>

  return (
    <div>
      <h1>{doc.title}</h1>
      <h2>{doc.description}</h2>
      <Mdx code={doc.body.code} />
    </div>
  )
}
