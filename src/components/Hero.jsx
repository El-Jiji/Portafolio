import { motion } from 'framer-motion'
import RotatingText from './RotatingText'
import TechLogoLoop from './TechLogoLoop'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center section-padding pt-16 sm:pt-20"
    >
      <div className="container-narrow text-center flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary-600 dark:text-primary-400 font-medium text-sm sm:text-base uppercase tracking-wider mb-4"
        >
          Desarrollador Web
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-slate-100 leading-tight mb-6"
        >
          Sitios y aplicaciones
          <br />
          <RotatingText />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-xl mx-auto mb-10"
        >
          Tiendas online, sistemas de punto de venta y herramientas a medida.
          Desarrollo profesional con entrega clara y soporte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/25"
          >
            Contactar
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>
      <TechLogoLoop />
    </section>
  )
}
