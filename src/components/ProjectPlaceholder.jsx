/**
 * Placeholder visual para proyectos sin imagen. Icono según tipo de proyecto.
 */
const icons = {
  ecommerce: (
    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  'pos-nfc': (
    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  'litematica-3d': (
    <svg className="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8 4-8-4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
}

const gradients = {
  ecommerce: 'from-amber-100 to-orange-200',
  'pos-nfc': 'from-emerald-100 to-teal-200',
  'litematica-3d': 'from-sky-100 to-indigo-200',
}

export default function ProjectPlaceholder({ projectId, title }) {
  const gradient = gradients[projectId] || 'from-slate-200 to-slate-300'
  const icon = icons[projectId] || icons.ecommerce

  return (
    <div
      className={`aspect-video w-full flex items-center justify-center bg-gradient-to-br ${gradient}`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-2">
        {icon}
        <span className="text-slate-500 text-xs font-medium">{title}</span>
      </div>
    </div>
  )
}
