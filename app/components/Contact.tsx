import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter, FaGitlab } from "react-icons/fa6";
import { IconType } from "react-icons";

interface SocialLink {
  name: string;
  icon: IconType;
  url: string;
  color: string;
  handle: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/hendisantika",
    color: "#333",
    handle: "hendisantika",
  },
  {
    name: "GitLab",
    icon: FaGitlab,
    url: "https://gitlab.com/hendisantika",
    color: "#FC6D26",
    handle: "hendisantika",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/hendisantika",
    color: "#0A66C2",
    handle: "hendisantika",
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    url: "https://x.com/hendisantika34",
    color: "#000",
    handle: "@hendisantika34",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/hendisantika",
    color: "#E4405F",
    handle: "@hendisantika",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/hendisantika",
    color: "#1877F2",
    handle: "hendisantika",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://youtube.com/@hendisantika",
    color: "#FF0000",
    handle: "Hendi Santika",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://tiktok.com/@hendisantika",
    color: "#000",
    handle: "@hendisantika",
  },
  {
    name: "Telegram",
    icon: FaTelegram,
    url: "https://t.me/hendisantika34",
    color: "#26A5E4",
    handle: "@hendisantika34",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/6281321411881",
    color: "#25D366",
    handle: "+62 813 214 11881",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-2">
            Let&apos;s connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-3 text-foreground/60">
            <FaEnvelope className="text-primary" size={20} />
            <a
              href="mailto:hendisantika@yahoo.co.id"
              className="hover:text-primary transition-colors"
            >
              hendisantika@yahoo.co.id
            </a>
          </div>
          <div className="flex items-center gap-3 text-foreground/60">
            <FaMapMarkerAlt className="text-primary" size={20} />
            <span>Bandung, Jawa Barat, Indonesia</span>
          </div>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card-bg border border-card-border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <link.icon
                size={28}
                className="text-foreground/50 group-hover:scale-110 transition-all duration-300"
                style={{ color: undefined }}
              />
              <div className="text-center">
                <p className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  {link.name}
                </p>
                <p className="text-xs text-foreground/40 mt-0.5 truncate max-w-[120px]">
                  {link.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
