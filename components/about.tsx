import { Building2, Target, Users } from "lucide-react"

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
              A Trusted Partner in Technology Excellence
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Essence Engineering Consult Pvt. Ltd. is a premier engineering
                consultancy firm specializing in Information Technology and
                Computer Engineering solutions. With a deep commitment to
                technical excellence and client success, we partner with
                organizations of all sizes to architect, build, and optimize
                their digital ecosystems.
              </p>
              <p>
                Our team of seasoned engineers and consultants brings extensive
                expertise in system design, software architecture, IT
                infrastructure, cloud solutions, AI integration, and digital
                transformation. We take a holistic approach to every engagement,
                ensuring our solutions are not only technically sound but also
                aligned with your strategic business objectives.
              </p>
              <p>
                From early-stage startups seeking scalable architectures to
                established enterprises driving digital modernization, Essence
                Engineering Consult delivers the clarity, depth, and innovation
                needed to navigate today&#39;s complex technology landscape with
                confidence.
              </p>
            </div>
          </div>

          {/* Right column - feature highlights */}
          <div className="grid gap-6 sm:grid-cols-1">
            {[
              {
                icon: Building2,
                title: "Established & Credible",
                description:
                  "With over a decade of industry experience, we have built a reputation for delivering high-quality engineering solutions that stand the test of time.",
              },
              {
                icon: Target,
                title: "Results-Driven Approach",
                description:
                  "Every solution we deliver is rooted in measurable outcomes. We align our technical expertise with your business goals to drive tangible results.",
              },
              {
                icon: Users,
                title: "Dedicated Expert Team",
                description:
                  "Our consultants hold deep domain expertise across cloud computing, software engineering, data science, and cybersecurity.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
