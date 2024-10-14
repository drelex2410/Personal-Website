import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        I'm a passionate developer creating innovative solutions. Explore my work and skills.
      </p>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/projects">View Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  )
}