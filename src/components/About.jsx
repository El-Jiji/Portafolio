import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-8"
        >
          Sobre mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-slate max-w-none"
        >
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Soy desarrollador web con experiencia en proyectos completos: desde el diseño
            hasta el backend y la base de datos. He construido una tienda e-commerce como
            proyecto de titulación (nivel medio superior), un sistema de punto de venta
            con tarjetas NFC para cafetería escolar integrado con Mercado Pago, y un
            visualizador 3D con React y Three.js.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-4">
            Me enfoco en soluciones claras, mantenibles y adaptadas a las necesidades de
            cada negocio. Trabajo con tecnologías modernas (React, PHP, bases de datos,
            APIs) y me gusta documentar y entregar código ordenado.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            Atiendo clientes locales y remotos. Ubicado para reuniones presenciales cuando sea necesario.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
