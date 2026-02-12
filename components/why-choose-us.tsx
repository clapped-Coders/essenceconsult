import { Check } from "lucide-react"

const reasons = [
  {
    title: "Proven Technical Excellence",
    description:
      "Our team consistently delivers solutions grounded in engineering best practices, ensuring performance, security, and maintainability across every project.",
  },
  {
    title: "Scalable & Future-Ready Solutions",
    description:
      "We design systems that grow with your business, leveraging modern architectures and cloud-native technologies to future-proof your technology stack.",
  },
  {
    title: "Client-First Methodology",
    description:
      "We start by deeply understanding your business goals, challenges, and technical landscape before recommending any solution, ensuring maximum alignment and ROI.",
  },
  {
    title: "Tailored Engagement Models",
    description:
      "From dedicated consulting retainers to project-based engagements, we offer flexible models that adapt to your organization's needs and budget.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "We own the full lifecycle of every engagement, from discovery and design through implementation, deployment, and ongoing support.",
  },
  {
    title: "Cross-Domain Expertise",
    description:
      "Our consultants bring diverse experience across industries including fintech, healthcare, education, and e-commerce, offering contextual and relevant guidance.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left text */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
              The Essence Advantage
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Choosing the right technology partner is critical. Here is what
              sets Essence Engineering Consult apart from the rest.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start a Conversation
            </a>
          </div>

          {/* Right grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-lg border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <h3 className="mt-3 font-heading text-sm font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
