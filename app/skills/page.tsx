import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "Ruby on Rails"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git"] },
  { category: "Other", items: ["RESTful APIs", "GraphQL", "Agile Methodologies", "Unit Testing"] },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">My Skills</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((skillSet) => (
          <Card key={skillSet.category}>
            <CardHeader>
              <CardTitle>{skillSet.category}</CardTitle>
              <CardDescription>Key technologies and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}