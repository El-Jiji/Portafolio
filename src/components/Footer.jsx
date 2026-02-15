import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-slate-900 dark:bg-slate-950 text-slate-300 py-10 px-4"
    >
      <div className="container-wide text-center">
        <p className="text-sm">
          © {currentYear} Portafolio. Desarrollo web para negocios locales.
        </p>
        <nav className="mt-4 flex justify-center gap-6">
          <a href="#hero" className="text-sm hover:text-white transition-colors">
            Inicio
          </a>
          <a href="#contacto" className="text-sm hover:text-white transition-colors">
            Contacto
          </a>
        </nav>
      </div>
    </motion.footer>
  )
}
