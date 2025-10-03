const steps = [
  { number: "01", title: "Strategy", description: "Shape the vision and align goals." },
  { number: "02", title: "Research", description: "Study user needs and market signals." },
  { number: "03", title: "Design", description: "Craft thoughtful, scalable interfaces." },
  { number: "04", title: "Test", description: "Validate, learn, and iterate quickly." },
]

export default function UxProcess() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-8xl flex-col gap-12 px-6 py-16 md:gap-16 md:px-10 lg:px-16">
        <header className="space-y-4 md:space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-white/60">Process in focus</p>
          <h1 className="text-pretty text-2xl font-semibold leading-tight md:text-3xl lg:text-[2.5rem]">
            We implement data-driven marketing solutions that maximize reach and ROI. Our approach ensures consistent growth and sustainable business success.
          </h1>
        </header>

        <ol className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-8">
          {steps.map((step, index) => (
            <li key={step.number} className="flex flex-col gap-4">
              <div className="flex items-center gap-6 md:gap-8">
                <span className="text-5xl font-semibold tracking-tight md:text-6xl">{step.number}</span>
                {index < steps.length - 1 && (
                  <span className="hidden text-2xl text-white/40 md:block" aria-hidden="true">
                    {"→"}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">{step.title}</p>
                <p className="text-sm leading-relaxed text-white/60 md:text-base">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
