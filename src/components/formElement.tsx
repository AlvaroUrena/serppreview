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
import { minLength, maxLength, object, string, url, regex } from 'valibot'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { useSiteContext } from '@/contexts/site-context'
import { TITLE_MAX_CHARS, DESCRIPTION_MAX_CHARS } from '@/consts/conditions'

const domainRegex =
  /^(?!https?:\/\/)(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/.*)?$/

const formSchema = object({
  domain: string('Please enter the Domain', [
    regex(domainRegex, 'Please enter a valid Domain')
  ]),
  url: string('Please enter the URL', [url('Please enter a valid URL')]),
  title: string('Please enter the Title', [
    minLength(10, 'Too short, the recommendation is at least 10 characters.'),
    maxLength(
      60,
      'Please enter a title with fewer characters, the recommendation is 55 characters.'
    )
  ]),
  description: string('Please enter the Description', [
    minLength(10, 'Too short, the recommendation is at least 10 characters.'),
    maxLength(
      160,
      'Please enter a description with fewer characters, the recommendation is 120 characters.'
    )
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
              <FormLabel>
                Title -&gt;{' '}
                <span
                  className={`${
                    title.length < TITLE_MAX_CHARS
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {title.length} / {TITLE_MAX_CHARS} characters
                </span>
              </FormLabel>
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
              <FormLabel>
                Description -&gt;{' '}
                <span
                  className={`${
                    description.length < DESCRIPTION_MAX_CHARS
                      ? 'text-green-500'
                      : 'text-red-500'
                  }`}
                >
                  {description.length} / {DESCRIPTION_MAX_CHARS} characters
                </span>
              </FormLabel>
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
