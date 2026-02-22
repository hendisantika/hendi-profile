import { FaJava, FaUsers, FaExternalLinkAlt } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { HiServerStack } from "react-icons/hi2";
import { IconType } from "react-icons";

interface Community {
  name: string;
  role: string;
  description: string;
  icon: IconType;
  color: string;
  handle: string;
  url: string;
}

const communities: Community[] = [
  {
    name: "JVM Indonesia",
    role: "Chief Executive Officer",
    description:
      "A programming community for Java developers and other JVM stack developers in Indonesia. Organizing meetups, workshops, and knowledge sharing sessions.",
    icon: FaJava,
    color: "#ED8B00",
    handle: "@jvmdeveloperid",
    url: "https://github.com/jvmdeveloperid",
  },
  {
    name: "KotlinID",
    role: "Community Leader",
    description:
      "Indonesian Kotlin developer community focused on sharing Kotlin knowledge, best practices, and building connections among Kotlin enthusiasts.",
    icon: SiKotlin,
    color: "#7F52FF",
    handle: "@KotlinID",
    url: "https://github.com/ArsyaBiswornoKotlinID",
  },
  {
    name: "IDDevOps",
    role: "Community Leader",
    description:
      "Indonesia DevOps community dedicated to promoting DevOps culture, tools, and practices. Sharing knowledge about CI/CD, containers, and cloud infrastructure.",
    icon: HiServerStack,
    color: "#06B6D4",
    handle: "@IDDevOps",
    url: "https://github.com/IDDevOps",
  },
];

export default function Communities() {
  return (
    <section id="communities" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">
            Building together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Communities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {communities.map((community) => (
            <div
              key={community.name}
              className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
            >
              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(to right, ${community.color}, transparent)`,
                }}
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-lg"
                  style={{ backgroundColor: `${community.color}15` }}
                >
                  <community.icon
                    size={28}
                    style={{ color: community.color }}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {community.name}
                  </h3>
                  <p className="text-xs text-accent font-mono">
                    {community.role}
                  </p>
                </div>
              </div>

              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                {community.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-foreground/40 text-sm font-mono">
                  {community.handle}
                </span>
                <a
                  href={community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/40 hover:text-primary transition-colors"
                  aria-label={`Visit ${community.name}`}
                >
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>

              {/* Member indicator */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-card-border">
                <FaUsers size={14} className="text-foreground/40" />
                <span className="text-foreground/40 text-xs">
                  Active Community
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
