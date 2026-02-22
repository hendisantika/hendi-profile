import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-mono text-sm mb-2 animate-fade-in-up opacity-0">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up opacity-0 delay-100">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Hendi Santika
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-foreground/70 mb-6 animate-fade-in-up opacity-0 delay-200">
            Senior Software Engineer &{" "}
            <span className="text-accent">Community Leader</span>
          </h2>
          <p className="text-foreground/60 max-w-lg mb-8 leading-relaxed animate-fade-in-up opacity-0 delay-300">
            A father and passionate software developer with 13+ years of
            experience building backend & web applications. Community Leader of
            JVM Indonesia, KotlinID & IDDevOps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in-up opacity-0 delay-400">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="px-6 py-3 border border-card-border rounded-full font-medium hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <HiDownload />
              Learn More
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8 justify-center md:justify-start animate-fade-in-up opacity-0 delay-500">
            <a
              href="https://github.com/hendisantika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/hendisantika"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://x.com/hendisantika34"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors duration-300"
              aria-label="X (Twitter)"
            >
              <FaXTwitter size={22} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 animate-fade-in-up opacity-0 delay-200">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-float" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-card-border shadow-2xl">
              <Image
                src="/profile.jpg"
                alt="Hendi Santika"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
