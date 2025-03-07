import { LayoutDashboard, Camera, MailX, Image } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export function ProjectCard({ title, description, icon, link }: ProjectCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "layout-dashboard":
        return <LayoutDashboard className="w-5 h-5" />
      case "camera":
        return <Camera className="w-5 h-5" />
      case "mail-x":
        return <MailX className="w-5 h-5" />
      case "image":
        return <Image className="w-5 h-5" />
      default:
        return <LayoutDashboard className="w-5 h-5" />
    }
  }

  return (
    <a
      href={link}
      className="border border-white/30 rounded-md p-4 backdrop-blur-sm bg-black/50 hover:bg-white/5 transition-colors group"
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-md bg-gray-900/30 flex items-center justify-center border border-white/30 text-white group-hover:text-gray-200 transition-colors">
          {getIcon(icon)}
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-white group-hover:text-gray-200 transition-colors">{title}</h3>
            <Badge variant="outline" className="text-xs border-white/50 text-gray-300">
              v1.0
            </Badge>
          </div>
          <p className="text-sm text-gray-300/80 mt-1">{description}</p>

          <div className="mt-4 flex gap-2">
            <Badge variant="secondary" className="bg-gray-900/30 text-gray-300 text-xs hover:bg-gray-900/50">
              React
            </Badge>
            <Badge variant="secondary" className="bg-gray-900/30 text-gray-300 text-xs hover:bg-gray-900/50">
              TypeScript
            </Badge>
          </div>
        </div>
      </div>
    </a>
  )
}

