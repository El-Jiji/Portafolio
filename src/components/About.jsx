import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="section-padding bg-white dark:bg-slate-900"
    >
      <div className="container-narrow">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-slate-100 mb-8"
        >
          Sobre mí
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-slate dark:prose-invert max-w-none"
        >
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-4">
            Soy{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              Diego Saldaña
            </strong>
            ,{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              desarrollador web
            </strong>{" "}
            enfocado en{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              negocios locales
            </strong>
            . He desarrollado{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              proyectos completos de punta a punta
            </strong>{" "}
            — desde{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              tiendas online
            </strong>{" "}
            hasta{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              sistemas con pagos integrados
            </strong>{" "}
            y{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              herramientas 3D
            </strong>{" "}
            — sin depender de plantillas ni soluciones genéricas. Me interesa
            entender el{" "}
            <strong className="text-slate-900 dark:text-slate-100 font-semibold">
              problema real del negocio
            </strong>{" "}
            antes de escribir una sola línea de código.
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed flex items-center gap-2 mb-12">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            Atiendo clientes locales y remotos.
          </p>
        </motion.div>

        {/* Perfil Académico */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-8 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Trayectoria Académica
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 relative before:hidden md:before:block before:absolute before:inset-y-0 before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
            {/* ESCOM */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2 .712V17a1 1 0 001 1z" />
                  </svg>
                </span>
                <div>
                  <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                    2023 - Presente
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Ingeniería en Sistemas Computacionales
                  </h4>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">
                Escuela Superior de Cómputo (ESCOM - IPN)
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Especialización en desarrollo de software escalable y
                    algoritmos.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span>
                    Habilidades: Java, C++, Arquitectura de Software, Bases de
                    Datos.
                  </span>
                </li>
              </ul>
            </div>

            {/* CECyT 8 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex-shrink-0 w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    2020 - 2023
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    Técnico en Computación
                  </h4>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-3">
                CECyT 8 "Narciso Bassols" (IPN)
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>
                    Formación técnica sólida en hardware, redes y programación
                    básica.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                  <span>
                    Logros: Excelencia académica y participación en proyectos de
                    innovación.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
