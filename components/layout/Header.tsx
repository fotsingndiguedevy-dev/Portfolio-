"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/projects", label: "Projets" },
  { href: "/experience", label: "Expérience" },
  { href: "/skills", label: "Compétences" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Ferme le menu quand on clique ailleurs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  // Ferme le menu automatiquement à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 backdrop-blur-lg bg-bg/80 border-b border-border"
    >
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-accent-green font-mono text-lg font-bold">
            &gt;_
          </span>
          <span className="font-mono text-text group-hover:text-accent-green transition-colors">
            devy<span className="text-accent-green">.dev</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 text-sm font-mono transition-colors ${
                  pathname === link.href
                    ? "text-accent-green"
                    : "text-text-muted hover:text-accent-green"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/fotsingndiguedevy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/TON_PROFIL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-green transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-text-muted hover:text-accent-green"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-bg-soft">
          <ul className="container-custom py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-3 py-2 text-sm font-mono rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-accent-green bg-accent-green/5"
                      : "text-text-muted hover:text-accent-green"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
