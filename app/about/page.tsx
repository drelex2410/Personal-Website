import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <Card>
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
          <CardDescription>A brief overview of my professional path</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            I'm a passionate developer with a keen interest in creating innovative solutions. 
            With a background in computer science and years of hands-on experience, I've worked 
            on a variety of projects ranging from web applications to mobile apps and backend systems.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>My Philosophy</CardTitle>
          <CardDescription>What drives me as a developer</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            I believe in writing clean, maintainable code and constantly learning new technologies. 
            My goal is to create software that not only solves problems but also provides an 
            excellent user experience. I'm always excited to take on new challenges and collaborate 
            with like-minded professionals.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}