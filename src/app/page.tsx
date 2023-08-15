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
        <h2 className='mt-2 text-center text-xl'>
          Welcome to SERP Preview – Your Gateway to Enhanced Search Visibility
        </h2>
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
      <section className='container mt-24 space-y-2 rounded-md bg-accent p-4'>
        <h2 className='text-center text-4xl font-bold'>
          Optimize Your Search Results
        </h2>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Unlock the true potential of your web pages with SERP Preview. As the
          driving force behind online success, optimizing your content for
          search results is paramount. Our tool empowers you to craft
          captivating meta titles and descriptions that entice users to click.
          Discover the art of creating rich snippets that stand out, ensuring
          your content shines amidst the competition.
        </p>
        <h3 className='text-2xl underline'>
          Gain Insights Into Search Behavior
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Understanding how users interact with search results is the key to
          capturing their attention. Meta titles and descriptions are your first
          impression – a chance to showcase your content&apos;s relevance. SERP
          Preview provides real-time glimpses of your search appearance,
          enabling you to refine your snippets for maximum impact.
        </p>
        <h3 className='text-2xl underline'>
          Supercharge Your Click-Through Rates
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          With SERP Preview, take the driver&apos;s seat in crafting compelling
          search snippets. Fine-tune your meta elements to enhance click-through
          rates and drive organic traffic. Visualize how your page will appear
          in the dynamic search landscape, allowing you to make informed
          decisions that resonate with your target audience.
        </p>
        <h3 className='text-2xl underline'>Elevate Your SEO Strategy</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Make SERP Preview an integral part of your SEO toolkit. Elevate your
          search engine optimization efforts by curating rich snippets that
          highlight your content&apos;s uniqueness. Unleash the power of
          strategic keywords and engaging calls to action. Witness firsthand how
          your tweaks influence your search presence and elevate your overall
          strategy.
        </p>
      </section>
      <section className='container mt-24 space-y-2 rounded-md bg-accent p-4'>
        <h2 className='text-center text-4xl font-bold'>
          Customize Your Rich Snippets
        </h2>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Crafting Rich Snippets: Your Gateway to Click-Worthy Search Results
        </p>
        <h3 className='text-2xl underline'>
          Unleash the Power of Rich Snippets
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          In the digital realm, first impressions matter, and rich snippets are
          your secret weapon. SERP Preview empowers you to customize your
          snippets, enabling you to showcase your content&apos;s essence
          succinctly. Elevate your brand&apos;s visibility and resonate with
          your audience before they even click.
        </p>
        <h3 className='text-2xl underline'>Curate Engaging Meta Elements</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Meta titles and descriptions are the threads that weave your search
          result narrative. With SERP Preview, you hold the reins. Tailor your
          meta elements to captivate your audience, incorporating strategic
          keywords to ensure your content resonates. Witness how these
          adjustments transform your search presence.
        </p>
        <h3 className='text-2xl underline'>Stand Out in the Search Crowd</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          In a sea of search results, differentiation is the key. With SERP
          Preview, sculpt your rich snippets to stand out. Highlight your unique
          selling points, whether it&apos;s stellar reviews, tantalizing
          recipes, or comprehensive lists. Let your content shine, compelling
          users to explore further.
        </p>
        <h3 className='text-2xl underline'>
          Visualize Success Before Publishing
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Before you hit &quot;publish&quot; embark on a journey of foresight
          with SERP Preview. Witness how your rich snippets will appear in the
          search arena. Fine-tune and experiment until your snippet radiates
          brilliance. Empower your content to seize attention and entice clicks,
          all before it goes live.
        </p>
      </section>
      <section className='container mt-24 space-y-2 rounded-md bg-accent p-4'>
        <h2 className='text-center text-4xl font-bold'>
          Preview Before Publishing
        </h2>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Master Your Search Appearance: Preview with Precision
        </p>
        <h3 className='text-2xl underline'>
          Embrace the Power of Previsualization
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          The journey to optimal search visibility begins with a sneak peek.
          SERP Preview provides an immersive previsualization experience,
          allowing you to see exactly how your web page will materialize in
          search results. Empower your decision-making with real-time insights
          before your content takes center stage.
        </p>
        <h3 className='text-2xl underline'>Refine with Real-Time Insights</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Gone are the days of guesswork. With SERP Preview, you&apos;re in
          control. Make live adjustments and observe how they transform your
          search snippet. Optimize your meta titles and descriptions for
          aesthetics, engagement, and intrigue. Unveil the perfect preview
          before your content makes its grand debut.
        </p>
        <h3 className='text-2xl underline'>
          Strategic Decision-Making Made Simple
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Why leave your search appearance to chance? SERP Preview transforms
          uncertainty into strategic advantage. Experiment with different meta
          elements, explore varying lengths, and witness the impact on user
          engagement. Empower yourself to make informed decisions and set the
          stage for search success.
        </p>
        <h3 className='text-2xl underline'>Confidence in Every Click</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          As you prepare to unleash your content onto the digital stage, equip
          yourself with confidence. With SERP Preview, ensure that your search
          appearance aligns with your vision. Capture attention, evoke
          curiosity, and drive clicks – all while orchestrating your
          content&apos;s debut with finesse.
        </p>
      </section>
      <section className='container mt-24 space-y-2 rounded-md bg-accent p-4'>
        <h2 className='text-center text-4xl font-bold'>
          Tips to Enhance SERP Appearance
        </h2>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Elevate Your Search Presence: Crafting Compelling SERP Elements
        </p>
        <h3 className='text-2xl underline'>
          Mastering Meta Elements for Maximum Impact
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Meta titles and descriptions are your canvas in the world of search.
          SERP Preview equips you with the brushes to paint a compelling
          narrative. Optimize your meta elements with precision, infusing them
          with strategic keywords and a dash of creativity. Elevate your
          content&apos;s click-worthiness and captivate your audience.
        </p>
        <h3 className='text-2xl underline'>
          Strategic Snippet Lengths for Seamless Presentation
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          In the dance of search results, size matters. SERP Preview empowers
          you to perfect your snippet lengths, ensuring they display flawlessly
          across devices and screen sizes. Avoid truncation woes and maintain a
          seamless, captivating presentation that beckons users to delve deeper.
        </p>
        <h3 className='text-2xl underline'>
          The Art of Captivating Calls to Action
        </h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          Seize the moment with strategic calls to action. SERP Preview enables
          you to infuse your rich snippets with compelling invitations that
          entice users to engage. From exploring your products to diving into
          your articles, tailor your calls to action to prompt meaningful
          interactions that drive results.
        </p>
        <h3 className='text-2xl underline'>A Glimpse into Success</h3>
        <p className='rounded-md bg-background/70 p-2 text-xl'>
          With SERP Preview as your compass, chart a course for search success.
          Witness firsthand how each tweak enhances your search appearance.
          Revel in the power of captivating meta elements, resonant keywords,
          and strategic calls to action. As you take the reins of your search
          destiny, savor the satisfaction of elevated engagement and clicks.
        </p>
      </section>
    </>
  )
}
