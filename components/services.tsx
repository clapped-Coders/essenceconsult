import {
  Code2,
  Cloud,
  BrainCircuit,
  Server,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Software Development & Architecture",
    description:
      "From microservices and APIs to full-scale enterprise platforms, we design and build software architectures that are resilient, maintainable, and ready to scale with your business.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps Consulting",
    description:
      "We help organizations migrate, optimize, and manage cloud infrastructure across AWS, Azure, and GCP, backed by robust CI/CD pipelines and infrastructure-as-code practices.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Solutions",
    description:
      "Unlock the power of your data with our machine learning models, predictive analytics, and intelligent automation solutions designed to drive smarter business decisions.",
  },
  {
    icon: Server,
    title: "IT Infrastructure Design",
    description:
      "We architect robust, secure, and high-availability IT environments, from network topology and server infrastructure to virtualization and disaster recovery planning.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Consulting",
    description:
      "Protect your digital assets with our comprehensive security assessments, penetration testing, compliance auditing, and zero-trust architecture implementations.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Project Advisory",
    description:
      "Our senior consultants provide hands-on technical leadership, from project scoping and vendor evaluation to technology roadmapping and engineering team mentorship.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Comprehensive IT Consulting Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We deliver end-to-end engineering solutions tailored to your
            organization&#39;s unique challenges and growth objectives.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-border bg-background p-7 transition-all hover:border-accent/50 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary">
                <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
