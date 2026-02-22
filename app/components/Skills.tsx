import {
  FaJava,
  FaPhp,
  FaNodeJs,
  FaVuejs,
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiKotlin,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiNuxtdotjs,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiApachekafka,
  SiGradle,
  SiScala,
  SiTailwindcss,
} from "react-icons/si";
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Scala", icon: SiScala, color: "#DC322F" },
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Vue.js", icon: FaVuejs, color: "#4FC08D" },
      { name: "Nuxt.js", icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "Angular", icon: FaAngular, color: "#DD0031" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Database & Messaging",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Oracle DB", icon: FaDatabase, color: "#F80000" },
      { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "Gradle", icon: SiGradle, color: "#02303A" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Tech Stack</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card-bg border border-card-border rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-5 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-background/50 border border-card-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-0.5 group"
                  >
                    <skill.icon
                      size={18}
                      style={{ color: skill.color }}
                      className="group-hover:scale-110 transition-transform"
                    />
                    <span className="text-sm text-foreground/80">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
