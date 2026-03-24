import { site, footer } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();
  const linkedin = site.social.linkedin;

  return (
    <footer className="border-t border-white/[0.06] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-muted">
          © {year} {site.name}. {footer.note}
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          ) : null}
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
