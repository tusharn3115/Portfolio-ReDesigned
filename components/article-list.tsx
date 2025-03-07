"use client"

import { CalendarDays, ArrowRight } from "lucide-react"

interface ArticleListProps {
  onArticleClick: (id: number) => void
}

export function ArticleList({ onArticleClick }: ArticleListProps) {
  const articles = [
    {
      id: 1,
      title: "Goals",
      excerpt: "Setting clear objectives for personal and professional growth",
      date: "2 weeks ago",
      content: `# Setting Goals for Success

Goals are the roadmap to your future. They provide direction, motivation, and a clear path forward. Without goals, we drift aimlessly, reacting to whatever comes our way rather than proactively creating the life we want.

## Why Goals Matter

1. **Direction**: Goals give you a clear destination to work towards.
2. **Motivation**: Having something to strive for keeps you engaged and excited.
3. **Measurement**: Goals allow you to track your progress and celebrate wins.
4. **Focus**: They help you prioritize what truly matters.

## Setting SMART Goals

The SMART framework is a powerful tool for setting effective goals:

- **Specific**: Clearly define what you want to accomplish
- **Measurable**: Include concrete criteria to measure progress
- **Achievable**: Make sure it's realistic given your resources
- **Relevant**: Align with your broader objectives
- **Time-bound**: Set a deadline to create urgency

## My Current Goals

### Technical Skills
- Master Next.js and React Server Components
- Build a full-stack application with TypeScript
- Contribute to open source projects

### Career Development
- Complete MCA with distinction
- Build a portfolio of 5 high-quality projects
- Network with industry professionals

### Personal Growth
- Read 20 books this year
- Improve physical fitness
- Practice mindfulness daily

Remember, goals are not set in stone. They should be flexible and adaptable as circumstances change. The key is to use them as guiding principles rather than rigid rules.

## Tracking Progress

Regularly reviewing your goals is essential for success. I recommend:

1. Weekly check-ins to assess short-term progress
2. Monthly reviews to evaluate medium-term goals
3. Quarterly deep dives to reassess and adjust as needed

## Conclusion

Setting meaningful goals has transformed my approach to both my career and personal life. By clearly defining what I want to achieve, I've been able to make consistent progress even when faced with challenges.

What goals are you working toward? I'd love to hear about your journey!`,
    },
    {
      id: 2,
      title: "Resources",
      excerpt: "Curated list of tools and learning materials for developers",
      date: "1 month ago",
      content: `# Essential Resources for Modern Web Developers

As developers, we're constantly learning and adapting to new technologies. Having the right resources at your fingertips can make all the difference in your growth journey. Here's my curated list of the most valuable tools and learning materials I've discovered.

## Learning Platforms

### Free Resources
- **[MDN Web Docs](https://developer.mozilla.org)**: The definitive resource for web standards
- **[freeCodeCamp](https://www.freecodecamp.org/)**: Comprehensive curriculum with certificates
- **[The Odin Project](https://www.theodinproject.com/)**: Full-stack curriculum focused on practical skills
- **[CS50](https://cs50.harvard.edu/)**: Harvard's introduction to computer science

### Paid Courses
- **[Frontend Masters](https://frontendmasters.com/)**: In-depth workshops from industry experts
- **[Udemy](https://www.udemy.com/)**: Affordable courses on specific technologies
- **[Egghead.io](https://egghead.io/)**: Concise, focused lessons for working developers

## Development Tools

### Code Editors
- **VS Code**: My primary editor with essential extensions:
  - ESLint
  - Prettier
  - GitHub Copilot
  - Thunder Client

### Design Tools
- **Figma**: Collaborative design tool
- **Excalidraw**: Simple diagrams and wireframes
- **Coolors**: Color palette generator

### Productivity
- **Notion**: Documentation and knowledge management
- **Obsidian**: Personal knowledge base with Markdown
- **Raycast**: Productivity launcher for Mac

## Books Worth Reading

1. **"Clean Code" by Robert C. Martin**: Principles of writing maintainable code
2. **"Eloquent JavaScript" by Marijn Haverbeke**: Deep dive into JS
3. **"Designing Data-Intensive Applications" by Martin Kleppmann**: For backend developers

## YouTube Channels

- **Fireship**: Quick, informative videos on modern web tech
- **Traversy Media**: Practical tutorials and projects
- **The Net Ninja**: Clear, step-by-step tutorials
- **Web Dev Simplified**: Focused explanations of complex concepts

## Communities

- **Dev.to**: Developer blogging platform
- **Hashnode**: Developer-focused blogging with personal domains
- **Stack Overflow**: The go-to for troubleshooting
- **Discord communities**: Technology-specific servers

## Conclusion

The resources above have been instrumental in my development journey. I'm constantly updating this list as I discover new tools and learning materials.

What resources have you found most valuable? I'd love to expand this list with your recommendations!`,
    },
    {
      id: 3,
      title: "Winter Arc Plan",
      excerpt: "My roadmap for the upcoming winter season projects",
      date: "2 months ago",
      content: `# Winter Arc: My Seasonal Development Plan

As winter approaches, I'm planning my next phase of learning and project development. Having a seasonal "arc" helps me stay focused and make meaningful progress over a defined period.

## Why Seasonal Planning Works

Breaking the year into seasonal arcs (3-4 months each) provides:
- **Manageable timeframes**: Long enough to complete substantial projects
- **Natural review points**: Seasonal transitions prompt reflection
- **Varied focus**: Prevents burnout by shifting priorities
- **Momentum**: Creates a sense of progress and accomplishment

## Winter Arc Focus Areas

### 1. Technical Skills Development

This winter, I'm focusing on three core technologies:

#### Next.js App Router
- Master server components and server actions
- Build a full-stack application with the latest patterns
- Implement advanced caching strategies

#### TypeScript
- Move beyond basics to advanced type patterns
- Implement a type-safe API with Zod validation
- Contribute to DefinitelyTyped

#### UI/UX Design Skills
- Complete a Figma fundamentals course
- Create a design system for personal projects
- Practice implementing complex animations

### 2. Project Roadmap

I'll be working on three main projects this winter:

#### Personal Portfolio Redesign
- Create a unique terminal-based interface
- Implement interactive project showcases
- Optimize for performance and accessibility

#### Developer Productivity Tool
- Build a browser extension for streamlining workflows
- Focus on developer experience and customization
- Open source with community contributions

#### Content Creation Platform
- Start a technical blog on Hashnode
- Publish at least 6 in-depth articles
- Create accompanying code repositories

### 3. Learning Schedule

To make consistent progress, I've established a weekly schedule:

- **Monday/Wednesday**: Technical skill development (courses/tutorials)
- **Tuesday/Thursday**: Project work
- **Friday**: Exploration and experimentation
- **Weekend**: Content creation and documentation

## Milestones and Deadlines

| Milestone | Target Date |
|-----------|-------------|
| Portfolio design completed | December 15 |
| Portfolio development finished | January 10 |
| First blog post published | December 20 |
| Developer tool MVP | January 25 |
| Winter arc review | February 28 |

## Conclusion

By the end of this winter arc, I aim to have significantly improved my Next.js and TypeScript skills, launched my redesigned portfolio, created a useful developer tool, and established a presence as a technical writer.

What are your plans for the winter? Are you working on any exciting projects or learning new technologies?`,
    },
  ]

  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <button
          key={article.id}
          onClick={() => onArticleClick(article.id)}
          className="block w-full text-left border border-white/30 rounded-md p-4 backdrop-blur-sm bg-black/50 hover:bg-white/5 transition-colors group"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-white group-hover:text-gray-200 transition-colors">
              [{article.id - 1}] {article.title}
            </h3>
            <div className="flex items-center text-xs text-gray-300/70">
              <CalendarDays className="w-3 h-3 mr-1" />
              {article.date}
            </div>
          </div>

          <p className="text-sm text-gray-300/80 mb-3">{article.excerpt}</p>

          <div className="flex items-center text-xs text-white group-hover:text-gray-200 transition-colors">
            <span>Read more</span>
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>
      ))}
    </div>
  )
}

