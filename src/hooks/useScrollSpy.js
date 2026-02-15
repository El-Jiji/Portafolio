import { useState, useEffect } from 'react'

const SECTION_IDS = ['hero', 'sobre-mi', 'proyectos', 'proceso', 'contacto']

/**
 * Devuelve el id de la sección actualmente visible (scroll spy).
 * Usa IntersectionObserver con threshold y rootMargin para considerar el header fijo.
 */
export function useScrollSpy() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers = new Map()
    const headerOffset = 120

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const id = entry.target.id
        if (SECTION_IDS.includes(id)) {
          setActiveId(id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${headerOffset}px 0px -60% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    })

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        observers.set(id, el)
      }
    })

    return () => observer.disconnect()
  }, [])

  return activeId
}
