import { FaCode, FaUsers, FaBoxOpen, FaStar } from "react-icons/fa";

const stats = [
  { icon: FaBoxOpen, value: "2285+", label: "Repositories" },
  { icon: FaUsers, value: "2050+", label: "GitHub Followers" },
  { icon: FaCode, value: "13+", label: "Years Experience" },
  { icon: FaStar, value: "3", label: "Communities Led" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Who am I?
            </h3>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I am a <strong className="text-foreground">father</strong> and a{" "}
                <strong className="text-foreground">
                  Senior Software Engineer
                </strong>{" "}
                based in{" "}
                <strong className="text-foreground">
                  Bandung, Jawa Barat, Indonesia
                </strong>
                . With more than 13 years of experience, I specialize in
                building scalable backend and web applications.
              </p>
              <p>
                I serve as{" "}
                <strong className="text-foreground">
                  Chief Executive Officer at JVM Indonesia
                </strong>{" "}
                and lead multiple developer communities including{" "}
                <strong className="text-accent">@jvmdeveloperid</strong>,{" "}
                <strong className="text-accent">@KotlinID</strong>, and{" "}
                <strong className="text-accent">@IDDevOps</strong>. I love
                organizing communities and sharing knowledge with fellow
                developers.
              </p>
              <p>
                My tech stack spans across Java, Spring Boot, Kotlin, PHP,
                Laravel, Node.js, Vue, Nuxt, Angular, TypeScript, and
                JavaScript. I&apos;m passionate about open source and
                continuously learning new technologies.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card-bg border border-card-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
              >
                <stat.icon className="mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-foreground/50 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
