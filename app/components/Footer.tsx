import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-card-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1 text-foreground/50 text-sm">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
            Hendi Santika
          </span>
          <span>. Built with</span>
          <FaHeart className="text-red-500 mx-1" size={12} />
          <span>& Next.js</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/hendisantika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/hendisantika"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://x.com/hendisantika34"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/40 hover:text-primary transition-colors"
            aria-label="X (Twitter)"
          >
            <FaXTwitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
