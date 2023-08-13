'use client'

import React, { createContext, useState, useContext } from 'react'

type SiteContextProviderProps = {
  children: React.ReactNode
}

type SiteContext = {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  description: string
  setDescription: React.Dispatch<React.SetStateAction<string>>
}

export const SiteContext = createContext<SiteContext | null>(null)

export default function SiteContextProvider({
  children
}: SiteContextProviderProps) {
  const [url, setUrl] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  return (
    <SiteContext.Provider
      value={{
        url,
        setUrl,
        title,
        setTitle,
        description,
        setDescription
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
