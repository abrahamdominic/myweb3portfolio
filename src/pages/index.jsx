import { About } from "../components/About"
import { Hero } from "../components/Hero"
import { Interview } from "../components/Interview"
import { Projects } from "../components/Projects"

export function Home() {

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Interview />
    </div>
  )
}