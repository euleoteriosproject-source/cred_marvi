import { ExternalLink } from "lucide-react";
import { socialProfiles } from "@/config/site";

function SocialIcon({ id }: { id: (typeof socialProfiles)[number]["id"] }) {
  if (id === "instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        data-social-icon="instagram"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4h-4V9c0-.6.4-1 1-1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.53.02C13.84 0 15.14 0 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.72-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.45 3.98-2.14 6.15-1.74.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z" />
    </svg>
  );
}

export function SocialLinks({
  variant = "cards",
}: {
  variant?: "cards" | "compact";
}) {
  if (variant === "compact") {
    return (
      <ul
        className="flex flex-wrap gap-2"
        aria-label="Redes sociais da Cred Marvi"
      >
        {socialProfiles.map((profile) => (
          <li key={profile.id}>
            <a
              href={profile.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name} da Cred Marvi — abre em nova aba`}
              className="grid size-11 place-items-center rounded-full border border-border bg-surface-soft text-accent-text transition hover:border-accent-text hover:bg-background"
            >
              <span className="size-5 [&>svg]:size-full [&>svg]:stroke-2">
                <SocialIcon id={profile.id} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul
      className="grid gap-3 sm:grid-cols-3"
      aria-label="Redes sociais da Cred Marvi"
    >
      {socialProfiles.map((profile) => (
        <li key={profile.id}>
          <a
            href={profile.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${profile.name} da Cred Marvi — abre em nova aba`}
            className="group flex min-h-24 items-center gap-4 rounded-card border border-border bg-surface px-5 py-4 shadow-control transition hover:border-accent-text hover:bg-surface-soft"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-soft text-accent-text group-hover:bg-background">
              <span className="size-5 [&>svg]:size-full [&>svg]:stroke-2">
                <SocialIcon id={profile.id} />
              </span>
            </span>
            <span className="min-w-0">
              <strong className="block text-sm text-foreground">
                {profile.name}
              </strong>
              <span className="mt-1 block truncate text-xs text-muted">
                {profile.handle}
              </span>
            </span>
            <ExternalLink
              size={16}
              className="ml-auto shrink-0 text-muted"
              aria-hidden="true"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
