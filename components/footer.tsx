import { Linkedin, Twitter, Facebook, Github } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/15">
                <span className="text-sm font-bold text-primary-foreground">
                  EE
                </span>
              </div>
              <span className="font-heading text-lg font-bold">
                Essence Engineering Consult
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/65">
              Essence Engineering Consult Pvt. Ltd. is a leading engineering
              consultancy firm delivering innovative IT solutions, software
              architecture, cloud consulting, and digital transformation
              services.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
              Contact
            </h4>
            <div className="mt-4 space-y-2.5 text-sm text-primary-foreground/60">
              <p>Bharatpur Road, Bharatpur, Chitwan</p>
              <p>info@essenceengineering.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6">
          <p className="text-center text-xs text-primary-foreground/45">
            {"© "}
            {new Date().getFullYear()}
            {" Essence Engineering Consult Pvt. Ltd. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
