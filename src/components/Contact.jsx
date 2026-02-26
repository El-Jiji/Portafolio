import { useState } from 'react'
import { motion } from 'framer-motion'

// Reemplaza con tu endpoint de Formspree: crea un formulario en https://formspree.io y pega aquí el ID
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/TU_FORM_ID'

const initialForm = { name: '', email: '', subject: '', message: '', website: '' }
const initialErrors = { name: '', email: '', subject: '', message: '' }
const HONEYPOT_FIELD = 'website' // campo oculto anti-spam: si viene rellenado, no enviamos

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateForm(values) {
  const errors = { ...initialErrors }
  if (!values.name.trim()) errors.name = 'Escribe tu nombre.'
  if (!values.email.trim()) errors.email = 'Escribe tu correo.'
  else if (!validateEmail(values.email)) errors.email = 'Correo no válido.'
  if (!values.subject.trim()) errors.subject = 'Indica el asunto.'
  if (!values.message.trim()) errors.message = 'Escribe tu mensaje.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.website) return // honeypot: bot rellenó el campo oculto
    const nextErrors = validateForm(form)
    const hasErrors = Object.values(nextErrors).some(Boolean)
    if (hasErrors) {
      setErrors(nextErrors)
      return
    }
    setErrors(initialErrors)
    setStatus('sending')
    try {
      const body = new FormData()
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('subject', form.subject)
      body.append('message', form.message)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setForm(initialForm)
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section-padding bg-slate-100/80 dark:bg-slate-800/50">
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 mb-4"
        >
          Contacto
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-slate-600 dark:text-slate-400 text-lg mb-10"
        >
          Cuéntame tu proyecto y te respondo a la brevedad.
        </motion.p>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7"
          >
            <h3 className="text-xl font-semibold mb-3">Contacto directo</h3>
            <p className="text-slate-600 dark:text-slate-300/90 text-sm sm:text-base mb-5">
              Si prefieres escribirme o hablar directamente, también puedes contactarme por WhatsApp o correo.
            </p>
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/40">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M6.62 10.79a15.053 15.053 0 006.59 6.59l1.47-2.48a1 1 0 01.98-.48c1.05.12 2.11.18 3.19.18a1 1 0 011 1v3.09a1 1 0 01-.91.99C17.91 20.93 16.46 21 15 21 9.02 21 3.99 15.98 3.99 10c0-1.46.07-2.91.32-4.93A1 1 0 015.3 4.16l3.09.01a1 1 0 011 1c0 1.08.06 2.14.18 3.19a1 1 0 01-.48.98l-2.47 1.45z"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-xs font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">WhatsApp</span>
                  <a
                    href="https://wa.me/5650046320"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm sm:text-base font-medium text-emerald-600 dark:text-emerald-300 hover:text-emerald-700 dark:hover:text-emerald-200 underline underline-offset-4"
                  >
                    5650046320
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.12 }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8"
          >
            {/* Honeypot: oculto para usuarios, lo rellenan bots */}
            <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="website">No completar</label>
              <input
                id="website"
                name="website"
                type="text"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900 dark:text-slate-100 ${
                    errors.name ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  disabled={status === 'sending'}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Correo *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900 dark:text-slate-100 ${
                    errors.email ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  disabled={status === 'sending'}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Asunto *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-slate-900 dark:text-slate-100 ${
                  errors.subject ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'
                }`}
                placeholder="Ej: Cotización sitio web"
                disabled={status === 'sending'}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2.5 rounded-lg border bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-y min-h-[120px] text-slate-900 dark:text-slate-100 ${
                  errors.message ? 'border-red-400' : 'border-slate-300 dark:border-slate-600'
                }`}
                placeholder="Describe tu proyecto o consulta..."
                disabled={status === 'sending'}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {status === 'success' && (
              <p className="mb-4 text-green-600 font-medium" role="status">
                Mensaje enviado. Te responderé pronto.
              </p>
            )}
            {status === 'error' && (
              <p className="mb-4 text-red-600 font-medium" role="alert">
                No se pudo enviar. Intenta de nuevo o escríbeme por otro medio.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
