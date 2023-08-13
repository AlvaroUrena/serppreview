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
import { minLength, object, string } from 'valibot'
import { valibotResolver } from '@hookform/resolvers/valibot'

import { useSiteContext } from '@/contexts/site-context'

const formSchema = object({
  url: string('Your email must be a string.', [
    minLength(4, 'Please enter a valid URL')
  ]),
  title: string([minLength(4, 'Please enter a valid title')]),
  description: string([minLength(4, 'Please enter a valid description')])
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
                  size={60}
                  onChange={e => setUrl(e.target.value)}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
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
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
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
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
