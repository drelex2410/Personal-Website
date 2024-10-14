import Link from 'next/link'
import { Button } from './ui/button'
import { ThemeToggle } from './theme-toggle'

const Navbar = () => {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold">Portfolio</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/skills">Skills</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="inline-flex items-center px-1 pt-1 text-sm font-medium text-foreground hover:text-primary">
    {children}
  </Link>
)

export default Navbar