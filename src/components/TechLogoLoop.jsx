import { techLogos } from '../data/techLogos'

export default function TechLogoLoop() {
  const duplicated = [...techLogos, ...techLogos]

  return (
    <div className="w-full overflow-hidden py-6 border-y border-slate-200/80 dark:border-slate-700/80">
      <div className="logo-marquee-track flex items-center gap-10 sm:gap-12 px-4">
        {duplicated.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex items-center gap-2 shrink-0 text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            title={tech.name}
          >
            {tech.icon()}
            <span className="text-sm font-medium hidden sm:inline whitespace-nowrap">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
