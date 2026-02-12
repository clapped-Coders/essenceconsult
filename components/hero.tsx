import { ArrowRight, ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5">
            <span className="text-xs font-medium tracking-wide text-primary-foreground/80 uppercase">
              IT & Engineering Consultancy
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
            Engineering Intelligent Digital Solutions
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75 lg:text-xl text-pretty">
            Essence Engineering Consult delivers innovative, scalable, and
            reliable IT consulting services that empower businesses to thrive in
            an evolving digital landscape.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-md bg-background px-7 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-background/90"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-primary-foreground/25 px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
            >
              Contact Us
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-primary-foreground/15 pt-10 sm:grid-cols-4 lg:mt-20">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "50+", label: "Enterprise Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "99%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-primary-foreground lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
