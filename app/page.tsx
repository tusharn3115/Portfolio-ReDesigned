"use client"

import { useEffect, useState } from "react"
import { Terminal } from "@/components/terminal"
import { AnimatedBackground } from "@/components/animated-background"
import { SocialLinks } from "@/components/social-links"
import { ProjectCard } from "@/components/project-card"
import { ArticleList } from "@/components/article-list"
import { ProfileBadge } from "@/components/profile-badge"
import { CommandPalette } from "@/components/command-palette"
import { Button } from "@/components/ui/button"
import { TerminalIcon, Menu, ArrowLeft } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArticleView } from "@/components/article-view"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [showCommandPalette, setShowCommandPalette] = useState(false)
  const [currentArticle, setCurrentArticle] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white font-mono relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-6 h-6" />
            <span className="text-xl font-bold tracking-tight">terminal.dev</span>
          </div>

          <div className="flex items-center gap-4">
            {currentArticle !== null && (
              <Button
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white/10"
                onClick={() => setCurrentArticle(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden border-white">
                  <Menu className="w-4 h-4 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black border-white text-white">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#about" className="text-lg hover:text-gray-300 transition-colors">
                    About
                  </a>
                  <a href="#projects" className="text-lg hover:text-gray-300 transition-colors">
                    Projects
                  </a>
                  <a href="#articles" className="text-lg hover:text-gray-300 transition-colors">
                    Articles
                  </a>
                  <a href="#contact" className="text-lg hover:text-gray-300 transition-colors">
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main className="space-y-12">
          {currentArticle !== null ? (
            <ArticleView articleId={currentArticle} onBack={() => setCurrentArticle(null)} />
          ) : (
            <>
              <section className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
                <Terminal className="h-[300px] md:h-[400px]" />
                <ProfileBadge />
              </section>

              <section id="about" className="border border-white/30 p-6 rounded-md backdrop-blur-sm bg-black/50">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-white mr-2">~/about</span>
                  <span className="animate-blink">_</span>
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  First year MCA student with a passion for building scalable full-stack solutions. Specializing in
                  modern web technologies. When not coding, you'll find me exploring the latest in tech, anime, and
                  sharing unfiltered thoughts on my digital journey.
                </p>
              </section>

              <section id="projects" className="space-y-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-white mr-2">~/projects</span>
                  <span className="animate-blink">_</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <ProjectCard
                    title="Devboard"
                    description="GitHub & LeetCode Stats Gamified"
                    icon="layout-dashboard"
                    link="#"
                  />
                  <ProjectCard
                    title="Batatafy"
                    description="The world through cryptox_0's camera"
                    icon="camera"
                    link="#"
                  />
                  <ProjectCard title="rm-email" description="Redact emails from any page" icon="mail-x" link="#" />
                  <ProjectCard title="CoolestPFPOfAllTime" description="Facemash made for TPOT" icon="image" link="#" />
                </div>
              </section>

              <section id="articles" className="space-y-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-white mr-2">~/articles</span>
                  <span className="animate-blink">_</span>
                </h2>
                <ArticleList onArticleClick={(id) => setCurrentArticle(id)} />
              </section>

              <section id="contact" className="border border-white/30 p-6 rounded-md backdrop-blur-sm bg-black/50">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <span className="text-white mr-2">~/contact</span>
                  <span className="animate-blink">_</span>
                </h2>
                <SocialLinks />
              </section>
            </>
          )}
        </main>

        <footer className="mt-16 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} terminal.dev - Built with Next.js and ❤️</p>
        </footer>
      </div>

      {showCommandPalette && <CommandPalette onClose={() => setShowCommandPalette(false)} />}
    </div>
  )
}