import { Mail, MessageCircle, Palette } from "lucide-react";

const contacts = [
  {
    label: "Telegram",
    href: "https://t.me/dmitriyyadrin",
    icon: MessageCircle,
  },
  {
    label: "Email",
    href: "mailto:d.jadrin520@gmail.com",
    icon: Mail,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/dmitriyyadrin",
    icon: Palette,
  },
];

export function ContactsSection() {
  return (
    <div className="flex items-stretch gap-3 pb-6 sm:justify-center sm:gap-6">
      {contacts.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex-none sm:px-0 sm:py-0 sm:hover:bg-transparent"
        >
          <contact.icon className="h-4 w-4 shrink-0" />
          <span className="truncate">{contact.label}</span>
        </a>
      ))}
    </div>
  );
}
