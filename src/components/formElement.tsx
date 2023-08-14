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
  domain: string('Please enter the URL', [url('Please enter a valid URL')]),
  url: string('Please enter the URL', [url('Please enter a valid URL')]),
  title: string('Please enter the Title', [
    minLength(4, 'Please enter a valid title')
  ]),
  description: string('Please enter the Description', [
    minLength(4, 'Please enter a valid description')
  ])
})

export default function FormElement() {
  const {
    domain,
    setDomain,
    url,
    setUrl,
    title,
    setTitle,
    description,
    setDescription
  } = useSiteContext()
  const form = useForm({
    resolver: valibotResolver(formSchema),
    defaultValues: {
      domain,
      url,
      title,
      description
    }
  })

  return (
    <Form {...form}>
      <form className='space-y-4'>
        <FormField
          control={form.control}
          name='domain'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domain</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter the Domain'
                  {...field}
                  onChange={e => {
                    field.onChange(e)
                    setDomain(e.target.value)
                    form.trigger('domain')
                  }}
                  size={60}
                />
              </FormControl>
              <FormDescription>Example: yoursite.com</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
                  onChange={e => {
                    field.onChange(e)
                    setUrl(e.target.value)
                    form.trigger('url')
                  }}
                  size={60}
                />
              </FormControl>
              <FormDescription>Example: https://yoursite.com</FormDescription>
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
                  onChange={e => {
                    field.onChange(e)
                    setTitle(e.target.value)
                    form.trigger('title')
                  }}
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
                  onChange={e => {
                    field.onChange(e)
                    setDescription(e.target.value)
                    form.trigger('description')
                  }}
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
