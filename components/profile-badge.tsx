"use client"

import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileBadge() {
  return (
    <div className="border border-white/30 rounded-md p-6 backdrop-blur-sm bg-black/50 flex flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white p-1">
          <div className="w-full h-full rounded-full bg-gray-900/30 flex items-center justify-center">
            <span className="text-3xl">👨‍💻</span>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 bg-black rounded-full border border-white p-1">
          <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs font-bold">
            +1
          </div>
        </div>
      </div>

      <h1 className="text-xl font-bold mb-1">@tushar</h1>
      <p className="text-gray-300 text-sm mb-4">Tushar Negi | full-stack dev | tech + anime</p>

      <div className="flex gap-2 mb-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-8 h-8 border-white/50"
          onClick={() => window.open("https://github.com/tusharn3115", "_blank")}
        >
          <Github className="w-4 h-4 text-black" />
          <span className="sr-only">GitHub</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-8 h-8 border-white/50"
          onClick={() => window.open("https://x.com/tushxr05", "_blank")}
        >
          <Twitter className="w-4 h-4 text-black" />
          <span className="sr-only">Twitter</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-8 h-8 border-white/50"
          onClick={() => window.open("mailto:negitushar923@gmail.com", "_blank")}
        >
          <Mail className="w-4 h-4 text-black" />
          <span className="sr-only">Email</span>
        </Button>
      </div>

      {/* <div className="w-full pt-4 border-t border-white/30">
        <div className="flex justify-between text-xs text-gray-300">
          <div>
            <div className="font-bold">12</div>
            <div>Projects</div>
          </div>
          <div>
            <div className="font-bold">24</div>
            <div>Articles</div>
          </div>
          <div>
            <div className="font-bold">1.2k</div>
            <div>Commits</div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

