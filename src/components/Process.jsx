import { motion } from 'framer-motion'

const steps = [
  {
    number: '1',
    title: 'Reunión',
    description: 'Conversamos sobre tu negocio, objetivos y qué necesitas (sitio web, tienda, sistema interno, etc.).',
  },
  {
    number: '2',
    title: 'Propuesta',
    description: 'Te envío una propuesta clara: alcance, tiempos y precio. Sin sorpresas.',
  },
  {
    number: '3',
    title: 'Desarrollo',
    description: 'Desarrollo por etapas con avances que puedes revisar. Uso tecnologías probadas y código mantenible.',
  },
  {
    number: '4',
    title: 'Entrega',
    description: 'Entrega del proyecto, explicación de uso y recomendaciones de hosting o mantenimiento si lo necesitas.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section-padding bg-white">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4"
        >
          Cómo trabajo
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-slate-600 text-lg mb-12 max-w-2xl"
        >
          Proceso simple para que sepas qué esperar desde el primer contacto.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-600 font-display font-bold text-lg flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
