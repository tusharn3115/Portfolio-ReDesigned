"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

interface TerminalProps {
  className?: string
}

type CommandHistoryItem = {
  command: string
  output: string[]
}

export function Terminal({ className = "" }: TerminalProps) {
  const [bootSequence, setBootSequence] = useState<string[]>([])
  const [currentBootLine, setCurrentBootLine] = useState("")
  const [bootIndex, setBootIndex] = useState(0)
  const [isBooting, setIsBooting] = useState(true)
  const [inputValue, setInputValue] = useState("")
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const bootLines = [
    "$ Initializing system...",
    "$ Loading kernel modules...",
    "$ Mounting file systems...",
    "$ Starting network services...",
    "$ Checking dependencies...",
    "$ Loading profile data...",
    "$ System ready!",
    "",
    "$ whoami",
    "Tushar Negi | full-stack developer | tech enthusiast | creative coder",
    "",
    "$ skills",
    "JavaScript/TypeScript, React, Next.js, Node.js, Python, AWS, Docker",
    "",
    "$ cat interests.txt",
    "Web Development, UI/UX Design, System Architecture, AI, Anime, Gaming",
    "",
    "$ ./welcome.sh",
    "Welcome to my interactive portfolio! Type 'help' for commands.",
    "Let's build something amazing together.",
    "",
    "$ _",
  ]

  // Process commands
  const processCommand = (cmd: string): string[] => {
    const command = cmd.trim().toLowerCase()

    if (command === "") return []

    if (command === "help") {
      return [
        "Available commands:",
        "  help        - Show this help message",
        "  about       - Display information about me",
        "  skills      - List my technical skills",
        "  projects    - Show my projects",
        "  contact     - Display contact information",
        "  clear       - Clear the terminal",
        "  github      - Open my GitHub profile",
        "  twitter     - Open my Twitter profile",
        "  linkedin    - Open my LinkedIn profile",
        "  email       - Send me an email",
      ]
    }

    if (command === "about") {
      return [
        "About Me:",
        "First year MCA student with a passion for building scalable full-stack solutions.",
        "Specializing in modern web technologies.",
        "When not coding, you'll find me exploring the latest in tech, anime, and sharing",
        "unfiltered thoughts on my digital journey.",
      ]
    }

    if (command === "skills") {
      return [
        "Technical Skills:",
        "• Frontend: React, Next.js, TypeScript, Tailwind CSS, Three.js",
        "• Backend: Node.js, Express, Python, Django, PostgreSQL, MongoDB",
        "• DevOps: Docker, AWS, CI/CD, Vercel, Netlify",
        "• Tools: Git, VS Code, Figma, Postman",
        "• Other: RESTful APIs, GraphQL, WebSockets, WebRTC",
      ]
    }

    if (command === "projects") {
      return [
        "Projects:",
        "1. Devboard - GitHub & LeetCode Stats Gamified",
        "2. Batatafy - The world through cryptox_0's camera",
        "3. rm-email - Redact emails from any page",
        "4. CoolestPFPOfAllTime - Facemash made for TPOT",
        "",
        "Type 'project <number>' for more details",
      ]
    }

    if (command.startsWith("project ")) {
      const projectNum = Number.parseInt(command.split(" ")[1])

      if (projectNum === 1) {
        return [
          "Devboard - GitHub & LeetCode Stats Gamified",
          "A dashboard that visualizes your GitHub and LeetCode activity",
          "with gamification elements to make coding more engaging.",
          "Tech: React, TypeScript, GitHub API, LeetCode API, Chart.js",
        ]
      }

      if (projectNum === 2) {
        return [
          "Batatafy - The world through cryptox_0's camera",
          "A photo sharing platform with cryptographic signatures to",
          "verify authenticity of images in the age of AI generation.",
          "Tech: Next.js, AWS S3, Web Crypto API, PostgreSQL",
        ]
      }

      if (projectNum === 3) {
        return [
          "rm-email - Redact emails from any page",
          "A browser extension that automatically detects and redacts",
          "email addresses from web pages to prevent scraping.",
          "Tech: JavaScript, Chrome Extensions API, RegEx",
        ]
      }

      if (projectNum === 4) {
        return [
          "CoolestPFPOfAllTime - Facemash made for TPOT",
          "A platform where users can vote on profile pictures,",
          "with an ELO ranking system to find the coolest PFP.",
          "Tech: React, Firebase, Cloudinary, TailwindCSS",
        ]
      }

      return ["Project not found. Type 'projects' to see available projects."]
    }

    if (command === "contact") {
      return [
        "Contact Information:",
        "• GitHub: @tusharn3115",
        "• Twitter: @tushxr05",
        "• LinkedIn: Tushar Negi",
        "• Email: hello@tusharnegi.dev",
        "",
        "You can also use the 'github', 'twitter', 'linkedin', or 'email' commands to open directly.",
      ]
    }

    if (command === "github") {
      window.open("https://github.com/tusharn3115", "_blank")
      return ["Opening GitHub profile..."]
    }

    if (command === "twitter") {
      window.open("https://x.com/tushxr05", "_blank")
      return ["Opening Twitter profile..."]
    }

    if (command === "linkedin") {
      window.open("https://linkedin.com/in/tusharnegi", "_blank")
      return ["Opening LinkedIn profile..."]
    }

    if (command === "email") {
      window.open("mailto:hello@tusharnegi.dev", "_blank")
      return ["Opening email client..."]
    }

    if (command === "clear") {
      setCommandHistory([])
      return []
    }

    if (command === "ls") {
      return ["about.md", "skills.json", "projects/", "contact.txt", "welcome.sh"]
    }

    if (command === "date") {
      return [new Date().toString()]
    }

    if (command === "echo") {
      return ["Usage: echo <message>"]
    }

    if (command.startsWith("echo ")) {
      return [command.substring(5)]
    }

    return [`Command not found: ${command}. Type 'help' for available commands.`]
  }

  // Handle command submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (inputValue.trim() === "") return

    const output = processCommand(inputValue)

    setCommandHistory([...commandHistory, { command: inputValue, output }])

    setInputValue("")
    setHistoryIndex(-1)
  }

  // Handle keyboard navigation through command history
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()

      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex].command)
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()

      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex].command)
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInputValue("")
      }
    }
  }

  // Boot sequence animation
  useEffect(() => {
    if (isBooting) {
      if (bootIndex < bootLines.length) {
        const line = bootLines[bootIndex]

        if (currentBootLine.length < line.length) {
          const timer = setTimeout(() => {
            setCurrentBootLine(line.substring(0, currentBootLine.length + 1))
          }, 20)

          return () => clearTimeout(timer)
        } else {
          const timer = setTimeout(() => {
            setBootSequence([...bootSequence, line])
            setCurrentBootLine("")
            setBootIndex(bootIndex + 1)
          }, 100)

          return () => clearTimeout(timer)
        }
      } else {
        setIsBooting(false)
      }
    }
  }, [bootIndex, currentBootLine, isBooting, bootSequence])

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [bootSequence, currentBootLine, commandHistory])

  // Focus input on click
  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current && !isBooting) {
        inputRef.current.focus()
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [isBooting])

  return (
    <div className={`border border-white/50 rounded-md p-4 bg-black/80 backdrop-blur-sm overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <span className="text-xs text-gray-300 ml-2">terminal@portfolio ~ </span>
      </div>

      <div
        ref={terminalRef}
        className="font-mono text-sm md:text-base text-white h-[calc(100%-24px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Boot sequence */}
        {isBooting && (
          <>
            {bootSequence.map((line, index) => (
              <div key={`boot-${index}`} className="mb-1">
                {line}
              </div>
            ))}
            <div className="mb-1">
              {currentBootLine}
              <span className="w-2 h-4 bg-white ml-1 animate-blink inline-block"></span>
            </div>
          </>
        )}

        {/* Command history */}
        {!isBooting && (
          <>
            {commandHistory.map((item, index) => (
              <div key={`cmd-${index}`}>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">$</span>
                  <span>{item.command}</span>
                </div>
                {item.output.map((line, lineIndex) => (
                  <div key={`output-${index}-${lineIndex}`} className="ml-4 text-white">
                    {line}
                  </div>
                ))}
                <div className="h-1"></div>
              </div>
            ))}

            {/* Current command line */}
            <form onSubmit={handleSubmit} className="flex items-center text-gray-300">
              <span className="mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-gray-300"
                autoFocus={!isBooting}
                autoComplete="off"
                spellCheck="false"
              />
              <span className="w-2 h-4 bg-white ml-1 animate-blink"></span>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

