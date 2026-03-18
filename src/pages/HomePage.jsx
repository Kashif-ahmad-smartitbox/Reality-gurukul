import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Objectives from '../components/Objectives'
import Steps from '../components/Steps'
import Banner from '../components/Banner'
import Community from '../components/Community'
import LogoSection from '../components/LogoSection'
import FollowUs from '../components/FollowUs'
import ConnectPage from './ConnectPage'
import Footer from '../components/Footer'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 30)
    }
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <Objectives />
      <Steps />
      <Banner />
      <Community />
      <LogoSection />
      <ConnectPage />
      <FollowUs />      
      <Footer />
    </main>
  )
}
