/**
 * Wrapper que añade un reflejo de brillo diagonal (esquina superior izquierda →
 * esquina inferior derecha) al hacer hover sobre la card.
 */
export default function GlareCard({ children, className = '', ...props }) {
  return (
    <div
      className={`glare-card relative overflow-hidden rounded-xl ${className}`}
      {...props}
    >
      {children}
      <div
        className="glare-shine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        aria-hidden
      />
    </div>
  )
}
