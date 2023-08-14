'use client'

import React, { createContext, useState, useContext } from 'react'

type SiteContextProviderProps = {
  children: React.ReactNode
}

type SiteContext = {
  domain: string
  setDomain: React.Dispatch<React.SetStateAction<string>>
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  titleWidth: number
  setTitleWidth: React.Dispatch<React.SetStateAction<number>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
  descriptionWidth: number
  setDescriptionWidth: React.Dispatch<React.SetStateAction<number>>
}

export const SiteContext = createContext<SiteContext | null>(null)

export default function SiteContextProvider({
  children
}: SiteContextProviderProps) {
  const [domain, setDomain] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [titleWidth, setTitleWidth] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [descriptionWidth, setDescriptionWidth] = useState<number>(0)

  return (
    <SiteContext.Provider
      value={{
        domain,
        setDomain,
        url,
        setUrl,
        title,
        setTitle,
        titleWidth,
        setTitleWidth,
        description,
        setDescription,
        descriptionWidth,
        setDescriptionWidth
      }}
    >
      {children}
    </SiteContext.Provider>
  )
}

export function useSiteContext() {
  const context = useContext(SiteContext)
  if (!context) {
    throw new Error('useSiteContext must be used within a SiteContextProvider')
  }

  return context
}
