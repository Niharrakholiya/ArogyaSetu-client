import React from 'react'
import { hydrateRoot } from 'react-dom/client'

const islands = new Set<string>()

export function Island({ name, children }: { name: string; children: React.ReactNode }) {
  if (typeof window === 'undefined') {
    islands.add(name)
    return <div data-island={name}>{children}</div>
  }
  return <>{children}</>
}

export function hydrateIslands() {
  if (typeof window === 'undefined') return
  
  const islandElements = document.querySelectorAll('[data-island]')
  islandElements.forEach(element => {
    const name = element.getAttribute('data-island')
    if (!name) return
    
    import(`../components/islands/${name}.tsx`)
      .then(module => {
        const Component: React.ComponentType = module.default
        hydrateRoot(
          element,
          <Component />
        )
      })
      .catch(error => {
        console.error(`Failed to load island ${name}:`, error)
      })
  })
}
