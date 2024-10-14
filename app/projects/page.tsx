import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with user authentication, product management, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    title: "Task Management App",
    description: "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["Vue.js", "Firebase", "Vuex", "PWA"],
    link: "#"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "An interactive dashboard displaying weather forecasts using data from multiple APIs.",
    technologies: ["React", "Redux", "Chart.js", "OpenWeatherMap API"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={project.link}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}