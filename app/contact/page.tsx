import PageHeader from "@/components/ui/PageHeader";
import Terminal from "@/components/ui/Terminal";
import { Mail, ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TiktokIcon,
} from "@/components/ui/BrandIcons";

export const metadata = {
  title: "Contact | Fotsing Ndigue Devy",
  description: "Me contacter pour une opportunité ou une collaboration.",
};

const contacts = [
  {
    name: "Email",
    value: "fotsingndiguedevy@gmail.com",
    href: "mailto:fotsingndiguedevy@gmail.com",
    icon: "mail",
  },
  {
    name: "GitHub",
    value: "@fotsingndiguedevy-dev",
    href: "https://github.com/fotsingndiguedevy-dev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    value: "Fotsing Ndigue Devy",
    href: "https://cm.linkedin.com/in/devy-fotsing-a3859b330",
    icon: "linkedin",
  },
  {
    name: "TikTok",
    value: "@TON_PSEUDO_TIKTOK",
    href: "https://tiktok.com/@TON_PSEUDO_TIKTOK",
    icon: "tiktok",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "github") return <GithubIcon size={20} />;
  if (type === "linkedin") return <LinkedinIcon size={20} />;
  if (type === "tiktok") return <TiktokIcon size={20} />;
  return <Mail size={20} />;
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        command="ping devy"
        title="Contact"
        subtitle="Une idée, un projet, une opportunité ? Parlons-en."
      />

      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Colonne gauche : liste de contacts */}
          <div className="space-y-3">
            {contacts.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex items-center justify-between p-4 bg-bg-soft border border-border rounded-lg hover:border-accent-green/40 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-accent-green">
                    <ContactIcon type={c.icon} />
                  </span>
                  <div>
                    <p className="text-xs text-text-dim font-mono uppercase tracking-wider">
                      {c.name}
                    </p>
                    <p className="text-sm text-text font-mono group-hover:text-accent-green transition-colors">
                      {c.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-text-muted group-hover:text-accent-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
          </div>

          {/* Colonne droite : terminal message */}
          <div>
            <Terminal title="devy@portfolio:~$">
              <div className="space-y-3 text-sm">
                <p className="text-accent-green">$ cat message.txt</p>
                <div className="space-y-2 text-text-muted">
                  <p>
                    Je suis <span className="text-text">ouvert</span> aux
                    opportunités suivantes :
                  </p>
                  <ul className="space-y-1.5 ml-2">
                    <li className="flex gap-2">
                      <span className="text-accent-green">▸</span>
                      <span>Stage en DevOps / Cloud</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent-green">▸</span>
                      <span>Alternance Junior DevOps</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent-green">▸</span>
                      <span>Collaboration sur projet open source</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent-green">▸</span>
                      <span>Mentorat technique</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    N&apos;hésite pas à m&apos;écrire, je réponds en général
                    dans les 24h.
                  </p>
                </div>
                <p>
                  <span className="text-accent-green">$</span>{" "}
                  <span className="cursor-blink"></span>
                </p>
              </div>
            </Terminal>
          </div>
        </div>
      </section>
    </>
  );
}
