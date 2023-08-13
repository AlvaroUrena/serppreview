'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { minLength, object, string, url } from 'valibot'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { useSiteContext } from '@/contexts/site-context'

const formSchema = object({
  url: string('Please enter the URL', [url('Please enter a valid URL')]),
  title: string('Please enter the Title', [
    minLength(4, 'Please enter a valid title')
  ]),
  description: string('Please enter the Description', [
    minLength(4, 'Please enter a valid description')
  ])
})

export default function FormElement() {
  const { url, setUrl, title, setTitle, description, setDescription } =
    useSiteContext()
  const form = useForm({
    resolver: valibotResolver(formSchema)
  })
  return (
    <Form {...form}>
      <form className='space-y-4'>
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter the URL'
                  {...field}
                  onBlur={() => form.trigger('url')}
                  onChangeCapture={() => setUrl(form.getValues().url)}
                  size={60}
                />
              </FormControl>
              <FormDescription>Example: https://site.com</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter the Title'
                  {...field}
                  onBlur={() => form.trigger('title')}
                  onChangeCapture={() => setTitle(form.getValues().title)}
                />
              </FormControl>
              <FormDescription>
                Example: The Ultimate Guide to SEO in 2023
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter the Description'
                  {...field}
                  onBlur={() => form.trigger('description')}
                  onChangeCapture={() =>
                    setDescription(form.getValues().description)
                  }
                />
              </FormControl>
              <FormDescription>
                Example: An SEO marketing strategy is a comprehensive plan to
                get more visitors to your website through search engines.
                Successful SEO includes on-page ...
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
