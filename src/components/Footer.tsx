import { FaTwitter } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiMedium } from "react-icons/si";

const Footer = () => {
  const links = [
    { icon: <FaGithub size={16} />, href: "https://github.com/sharon17kevin", label: "GitHub" },
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/sharon-kevin-anyanwu-8b8b0929a/", label: "LinkedIn" },
    { icon: <FaTwitter size={16} />, href: "https://x.com/Sharonkvn", label: "Twitter" },
    { icon: <SiMedium size={16} />, href: "https://medium.com/@sharon14kevin", label: "Medium" },
  ];

  return (
    <footer className="bg-forest-950 text-white/40 py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <p className="font-playfair text-lg text-white/60">
            S<span className="text-forest-400">.</span>K
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-forest-400 transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-outfit text-xs tracking-wider text-white/25">
            &copy; 2025 Sharon-Kevin Anyanwu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
