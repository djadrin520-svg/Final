type SkillsMarqueeProps = {
  skills: string[];
  direction: "left" | "right";
};

export function SkillsMarquee({ skills, direction }: SkillsMarqueeProps) {
  const track = [...skills, ...skills];
  return (
    <div className="marquee relative overflow-hidden">
      <div
        className={`marquee-track marquee-track--${direction}`}
        aria-hidden={false}
      >
        {track.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="marquee-item mx-3 border border-primary/20 bg-card px-4 py-1.5 text-base font-medium whitespace-nowrap sm:text-lg md:text-xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
