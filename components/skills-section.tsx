import { Music, Palette, Kanban, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Музыкальный продакшн",
    icon: Music,
    skills: ["Ableton Live", "Sound Design", "Synthesis"],
  },
  {
    title: "Дизайн",
    icon: Palette,
    skills: ["Figma", "UI/UX", "AI Tools"],
  },
  {
    title: "Управление",
    icon: Kanban,
    skills: ["Project Management", "Scrum", "Бюджетирование"],
  },
  {
    title: "Языки",
    icon: Globe,
    skills: ["Русский — родной", "Английский — B2"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Навыки
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-hover relative overflow-hidden bg-card p-6 ring-1 ring-foreground/10"
              >
                <Icon
                  className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 text-primary opacity-[0.27]"
                  strokeWidth={1.5}
                />
                <h3 className="font-semibold mb-3 relative">
                  {category.title}
                </h3>
                <ul className="relative space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-base text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
