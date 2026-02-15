import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Portfolio() {
  return (
    <section id="proyectos" className="section-padding bg-slate-100/80">
      <div className="container-wide">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4"
        >
          Proyectos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-slate-600 text-lg mb-12 max-w-2xl"
        >
          Algunos de los proyectos que he desarrollado de punta a punta.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={item}
              className="bg-white rounded-xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-slate-200 flex items-center justify-center text-slate-400 text-sm">
                {project.image.startsWith('/placeholder') ? (
                  <span>Captura / demo</span>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>
                <p className="text-slate-500 text-xs mb-4">
                  <span className="font-medium text-slate-600">Problema resuelto:</span>{' '}
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      GitHub
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 hover:text-primary-700 flex items-center gap-1"
                    >
                      Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {(project.githubUrl === '#' || project.demoUrl === '#') && (
                    <span className="text-slate-400 text-sm">Enlaces próximamente</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
