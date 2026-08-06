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
import Contact from '../components/Contact'
import MembershipForm from '../components/MembershipForm'

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
      <Contact />
      <section className="bg-[linear-gradient(180deg,#fff7f0_0%,#ffffff_100%)] px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold tracking-[1px] text-[#fa6a21]">MEMBERS AREA</p>
          <h2 className="mt-3 text-[clamp(1.7rem,3.5vw,2.7rem)] leading-[1.12] text-[#1f1f1f]">
            Join Realty Gurukul Membership
          </h2>
          <p className="mt-3 max-w-[70ch] text-[15px] leading-[1.7] text-[#555] sm:text-base">
            Fill the same membership form to apply directly from the homepage.
          </p>

          <div className="mt-6">
            <MembershipForm />
          </div>
        </div>
      </section>
    </main>
  )
}
