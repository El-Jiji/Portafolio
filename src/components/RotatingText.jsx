import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PHRASES = [
  'para tu negocio',
  'que convierten',
  'a medida',
  'que escalan',
  'con impacto',
]

const ROTATE_INTERVAL_MS = 2800

export default function RotatingText({ className = '' }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <span className={`inline-block min-w-[min-content] text-primary-600 dark:text-primary-400 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={PHRASES[index]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="inline-block"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
