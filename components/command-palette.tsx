"use client"

import { useEffect, useState } from "react"
import { Command, Search, Code, FileText, User, Home, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CommandPaletteProps {
  onClose: () => void
}

export function CommandPalette({ onClose }: CommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands = [
    {
      icon: <Home className="w-4 h-4" />,
      name: "Home",
      shortcut: "H",
      action: () => scrollToSection("top"),
    },
    {
      icon: <User className="w-4 h-4" />,
      name: "About",
      shortcut: "A",
      action: () => scrollToSection("about"),
    },
    {
      icon: <Code className="w-4 h-4" />,
      name: "Projects",
      shortcut: "P",
      action: () => scrollToSection("projects"),
    },
    {
      icon: <FileText className="w-4 h-4" />,
      name: "Articles",
      shortcut: "R",
      action: () => scrollToSection("articles"),
    },
    {
      icon: <Command className="w-4 h-4" />,
      name: "Contact",
      shortcut: "C",
      action: () => scrollToSection("contact"),
    },
  ]

  const filteredCommands = commands.filter((command) => command.name.toLowerCase().includes(searchQuery.toLowerCase()))

  function scrollToSection(id: string) {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    onClose()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowDown") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev < filteredCommands.length - 1 ? prev + 1 : prev))
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0))
      } else if (e.key === "Enter") {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [filteredCommands, selectedIndex, onClose])

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-black border border-green-500 rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 border-b border-green-500/30 flex items-center">
          <Search className="w-5 h-5 text-green-500 mr-2" />
          <input
            type="text"
            placeholder="Search commands..."
            className="flex-1 bg-transparent border-none outline-none text-green-300 placeholder:text-green-500/50"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setSelectedIndex(0)
            }}
            autoFocus
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="ml-2 text-green-500 hover:text-green-400 hover:bg-green-900/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="py-2 max-h-80 overflow-y-auto">
          {filteredCommands.length > 0 ? (
            filteredCommands.map((command, index) => (
              <div
                key={command.name}
                className={`px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-green-900/20 ${
                  index === selectedIndex ? "bg-green-900/30 text-green-300" : "text-green-400"
                }`}
                onClick={() => command.action()}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-md bg-green-900/30 flex items-center justify-center mr-3 border border-green-500/30">
                    {command.icon}
                  </div>
                  <span>{command.name}</span>
                </div>
                <div className="text-xs border border-green-500/30 rounded px-1.5 py-0.5">{command.shortcut}</div>
              </div>
            ))
          ) : (
            <div className="px-4 py-8 text-center text-green-500/50">No commands found</div>
          )}
        </div>
      </div>
    </div>
  )
}

