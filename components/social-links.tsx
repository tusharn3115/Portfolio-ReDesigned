import { Github, Twitter, Linkedin, Mail, Globe } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      username: "@tusharn3115",
      link: "https://github.com/tusharn3115",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      username: "@tushxr05",
      link: "https://x.com/tushxr05",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      username: "Tushar Negi",
      link: "https://linkedin.com/in/tusharnegi",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      username: "hello@tusharnegi.dev",
      link: "mailto:hello@tusharnegi.dev",
    },
    {
      name: "Website",
      icon: <Globe className="w-5 h-5" />,
      username: "tusharnegi.dev",
      link: "https://tusharnegi.dev",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.link}
          className="flex items-center gap-3 p-3 rounded-md hover:bg-white/10 transition-colors group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 rounded-full bg-gray-900/30 flex items-center justify-center border border-white/30 text-white group-hover:text-gray-200 transition-colors">
            {social.icon}
          </div>

          <div>
            <div className="font-bold text-white group-hover:text-gray-200 transition-colors">{social.name}</div>
            <div className="text-sm text-gray-300/80">{social.username}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

