import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Event from '@/components/sections/Event'
import Team from '@/components/sections/Team'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Event />
      <Team />
      <Contact />
      <Footer />
      {/* more sections coming */}
    </main>
  )
}