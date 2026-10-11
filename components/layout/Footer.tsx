import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="container-custom py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted font-mono">
          © {year}{" "}
          <span className="text-accent-green">Fotsing Ndigue Devy</span> — Built
          with Next.js
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/fotsingndiguedevy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://cm.linkedin.com/in/devy-fotsing-a3859b330"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:fotsingmisteriodevy@gmail.com"
            className="text-text-muted hover:text-accent-green transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
